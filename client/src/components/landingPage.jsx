import React from 'react';
import { useNavigate } from 'react-router-dom';
import StarBackground from './StarBackground';
import './landingPage.css';
import Step from './Step';
import {
    handDrawnUnnderlines, step1, step2, step3, step4, step5, step6,
    handDrawnAccents, handDrownArrow, planet, planet2, planet3 as lines,
    github, youtube, x, linkedin, facebook, modus, moduscreate,
} from '../utils/icons';

const stepsData = [
    {
        title: "Step 1",
        icon: (
            step1
        ),
        text: "Answer a few key questions about your product."
    },
    {
        title: "Step 2",
        icon: (
            step2
        ),
        text: "Our AI algorithms analyze your responses to determine your product's maturity level."
    },
    {
        title: "Step 3",
        icon: (
            step3
        ),
        text: "Get a personalized report with targeted recommendations and strategies for improvement."
    },
    {
        icon: (
            step4
        ),
        text: "Modus Create experts can help you implement the recommendations from your assessment."
    },
    {
        icon: (
            step5
        ),
        text: 'We provide guidance on strategy, process optimization, technology upgrades, and cultural transformation.'
    },
    {
        icon: (
            step6
        ),
        text: 'Our team can help you build a roadmap for success and achieve your product goals faster.'
    }
];

const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-selectBG min-h-screen'>
            <div className="text-white p-8 bg-selectBG min-h-screen">
                <div className="absolute inset-0 z-0">
                    <StarBackground />
                </div>

                <div className="absolute " style={{ bottom: '-66.4rem', left: '35rem' }}>
                    <div className="absolute inset-0">
                        {planet2}
                    </div>
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute inset-0 mask-image">
                            {lines}
                        </div>
                    </div>
                </div>

                <main className='relative overflow-hidden flex flex-col items-center justify-center px-80 font-ibm-plex-mono text-gray-200'>
                    <span className='px-72 w-full flex justify-start py-20'>
                        {moduscreate}
                    </span>
                    <div className='px-72'>
                        <span className='text-left text-8xl font-bold gradient-color-text font-ibm-plex-mono'>
                            Accelerate Product Growth with AI-Powered Insights
                        </span>
                        <p className='text-left text-3xl font-ibm-plex-mono pt-14 pr-60'>
                            Feeling stuck in your product's journey? Unsure of the next steps to drive growth and innovation?
                        </p>

                        <div className='flex justify-between pt-14'>
                            <div className='w-1/2'>
                                <p className='text-left text-2xl font-ibm-plex-mono mb-10'>
                                    Our AI-powered product maturity assessment analyzes your product strategy, processes, technology, and culture to identify areas for improvement. Receive a customized roadmap with actionable recommendations to optimize your product development lifecycle.
                                </p>
                                <div className="flex justify-start">
                                    <button
                                        onClick={() => navigate('/start')}
                                        className="inline-flex items-center gap-2 font-ibm-plex-mono text-white rounded-full px-6 py-2 text-2xl font-medium transition-all bg-gradient-to-r from-[#624BED] to-[#CE5682]">
                                        Take the Free Assessment
                                    </button>
                                </div>
                            </div>
                            <div className='w-1/2'>
                                <div className='w-100 h-80 bg-blackBox rounded-2xl'></div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <div className="mt-16">
                            <div className="flex justify-center">
                                <p className='gradient-color-text font-ibm-plex-mono text-xl font-semibold'>
                                    How it works
                                </p>
                            </div>
                            <h2 className="text-4xl font-bold text-center mb-12 mt-6" style={{ lineHeight: '62.4px', letterSpacing: -0.75 }}>
                                Get Your Product Maturity <br />
                                <div className="inline-flex flex-col items-center">
                                    Score in Minutes
                                    <span className="relative inline-flex flex-col items-center">
                                        <span className="absolute pl-40">{handDrawnUnnderlines}</span>
                                    </span>
                                </div>
                            </h2>
                            <div className="grid grid-cols-1 large:grid-cols-3 gap-8">
                                {stepsData.slice(0, 3).map((step, index) => (
                                    <Step key={index} title={step.title} icon={step.icon} text={step.text} />
                                ))}
                            </div>
                            <div className='absolute -mt-10' style={{ right: '42rem' }}>
                                {handDrownArrow}
                            </div>
                            <div className='absolute -mt-10' style={{ right: '42rem' }}>
                                {handDrawnAccents}
                            </div>
                        </div>

                        <div className="mt-24 text-center">
                            <div className="flex justify-center">
                                <p className='gradient-color-text font-ibm-plex-mono text-xl font-semibold'>
                                    How Modus Can Help
                                </p>
                            </div>

                            <h2 className="text-4xl font-bold text-center mb-12 mt-6" style={{ lineHeight: '62.4px', letterSpacing: -0.75 }}>
                                Partner with Modus Create to <br />
                                Achieve Product Excellence
                            </h2>
                            <div className="grid grid-cols-1 large:grid-cols-3 gap-8">
                                {stepsData.slice(3, 6).map((step, index) => (
                                    <Step key={index} icon={step.icon} text={step.text} />
                                ))}
                            </div>
                        </div>
                        <div className="mt-44 text-center">
                            <div className="flex justify-center">
                                <p className='gradient-color-text font-ibm-plex-mono text-xl font-semibold'>
                                    How Modus Can Help
                                </p>
                            </div>
                            <h2 className="text-4xl font-bold text-center mb-12 mt-6" style={{ lineHeight: '62.4px', letterSpacing: -0.75 }}>
                                Ready to Take Action?
                            </h2>
                            <div className="flex justify-center gap-4">

                                <button
                                    onClick={() => navigate('/start')}
                                    className="inline-flex items-center gap-2 font-ibm-plex-mono text-white rounded-full px-6 py-2 text-xl font-medium transition-all bg-gradient-to-r from-[#624BED] to-[#CE5682]">
                                    Take the Free Assessment
                                </button>
                                <button
                                    className="border border-white hover:border-white text-white px-6 py-3 rounded-full transition duration-300"
                                >
                                    Talk to an Expert
                                </button>
                            </div>
                        </div>
                    </div>
                </main>

            </div>

            <footer className="mt-[65px] font-ibm-plex-mono">
                <div className="bg-[#161616] px-8 py-12">
                    <div className="max-w-7xl mx-auto grid grid-cols-2 large:grid-cols-5 gap-8">
                        <div>
                            <h4 className="font-semibold mb-4 gradient-color-text-2">What We Do</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>Digital Strategy</li>
                                <li>Platform & Cloud</li>
                                <li>Product Development</li>
                                <li>Digital Operations</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4 gradient-color-text-2">Our Partners</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>Atlassian</li>
                                <li>AWS</li>
                                <li>GitLab</li>
                                <li>Ionic</li>
                                <li>Other Partners</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4 gradient-color-text-2">Who We Are</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>Our Story</li>
                                <li>Careers</li>
                                <li>Open Source</li>
                                <li>Our Work</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4 gradient-color-text-2">Our Resources</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>Blog</li>
                                <li>Innovation Podcast</li>
                                <li>Guides & Playbooks</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4 gradient-color-text-2">Get Weekly Digital Transformation Insights</h4>
                            <div className="space-y-4">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full px-4 py-2 bg-[#232323] rounded-md text-white text-sm border border-gray-700 focus:outline-none focus-gradient"
                                />
                                <button className="px-6 py-2 bg-gradient-to-r from-[#624BED] to-[#CE5682] text-white rounded-full text-sm hover:opacity-90 transition duration-300">
                                    Stay Informed
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#121212] px-8 py-6">
                    <div className="max-w-7xl mx-auto flex flex-col large:flex-row justify-between items-center space-y-4 large:space-y-0">
                        <div className="flex items-center space-x-6">
                            {modus}

                            <span className="text-sm text-gray-400">© 2023 Modus Create, LLC</span>
                        </div>

                        <div className="flex items-center space-x-6 text-sm text-gray-400">
                            <a href="#" className="hover:text-white">Privacy Policy</a>
                            <a href="#" className="hover:text-white">Sitemap</a>
                            <div className="flex items-center space-x-4">
                                <a href="#" className="hover:text-white">
                                    {github}
                                </a>
                                <a href="#" className="hover:text-white">
                                    {youtube}
                                </a>
                                <a href="#" className="hover:text-white">
                                    {x}
                                </a>
                                <a href="#" className="hover:text-white">
                                    {linkedin}
                                </a>
                                <a href="#" className="hover:text-white">
                                    {facebook}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
