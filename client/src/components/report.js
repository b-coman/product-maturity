import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import BottomNavigation from './navigation';
import { AssessmentContext } from '../context/assessmentContext';

function Report() {
  const { assessmentData } = useContext(AssessmentContext);

  if (!assessmentData || !assessmentData.detailedReport) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 shadow-md rounded-md max-w-3xl w-full mb-16">
          <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Report</h1>
          <p className="text-center text-lg text-gray-600">No detailed report available. Please complete the assessment first!</p>
        </div>
        <BottomNavigation />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 shadow-md rounded-md max-w-3xl w-full mb-16">
        <div className="text-left text-lg text-gray-700 space-y-4">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-6 mb-20" {...props} />,
              h2: ({ node, ...props }) => (
                <>
                  <hr className="my-4" />
                  <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} />
                </>
              ),
              h3: ({ node, ...props }) => <h3 className="text-xl font-medium mt-4 mb-2" {...props} />,
              p: ({ node, ...props }) => <p className="mt-2 mb-2" {...props} />,
              ul: ({ node, ...props }) => <ul className="ml-4 list-disc" {...props} />,
              ol: ({ node, ...props }) => <ol className="ml-4 list-decimal" {...props} />,
              table: ({ node, ...props }) => (
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-300" {...props} />
                </div>
              ),
              th: ({ node, ...props }) => <th className="px-4 py-2 border border-gray-300 bg-gray-100" {...props} />,
              td: ({ node, ...props }) => <td className="px-4 py-2 border border-gray-300" {...props} />,
            }}
          >
            {assessmentData.detailedReport}
          </ReactMarkdown>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
}

export default Report;