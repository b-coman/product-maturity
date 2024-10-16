// server/server.js
require('dotenv').config(); // Load environment variables
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const logger = require('./config/logger'); // Import logger configuration
const questionRoutes = require('./routes/questionRoutes'); // Import question routes
const submitRoutes = require('./routes/submitRoutes.background'); // Import submit routes
const statusRoutes = require('./routes/statusRoutes'); // Import status routes

const app = express();
const PORT = process.env.PORT || 3001; // Use Vercel's port or 3001 locally

// CORS configuration for development
app.use(cors({
  origin: '*', // Allow all origins for simplicity in development
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow specific HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
}));

// Use Morgan middleware for HTTP request logging with Winston
app.use(morgan('combined', {
  stream: {
    write: (message) => logger.info(message.trim()), // Log HTTP requests
  },
}));

app.use(bodyParser.json());

// Mount Routes
app.use('/api/questions', questionRoutes);
app.use('/api/submit', submitRoutes);
app.use('/api', statusRoutes); // Correctly mount the status routes under '/api'

// Graceful shutdown function for local environment (optional for Vercel)
const gracefulShutdown = () => {
  logger.info('Received termination signal. Shutting down gracefully...');
  server.close(() => {
    logger.info('Closed out remaining connections.');
    process.exit(0);
  });

  setTimeout(() => {
    logger.error('Could not close connections in time, forcefully shutting down.');
    process.exit(1);
  }, 10000); // Force shutdown after 10 seconds
};

// Listen for termination signals (e.g., SIGTERM or SIGINT) only in non-serverless environment
if (process.env.NODE_ENV !== 'production') {
  process.on('SIGTERM', gracefulShutdown);
  process.on('SIGINT', gracefulShutdown);
}

// Start the server (only if not on Vercel's serverless functions)
if (process.env.NODE_ENV !== 'production') {
  const server = app.listen(PORT, '0.0.0.0', () => {
    logger.info(`Server is running on http://0.0.0.0:${PORT}`);
  });
}

module.exports = app; // Export the app for Vercel
