import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaDownload } from 'react-icons/fa';

const Resume = () => {
  const resumeUrl = 'https://raw.githubusercontent.com/Cyoger/Resume-/main/Resume.pdf';

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-green-400/30">
        <div className="flex items-center justify-between p-4 max-w-6xl mx-auto">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-white/70 hover:text-green-400 transition-colors duration-300"
          >
            <FaArrowLeft />
            <span>Back to Home</span>
          </Link>
          
          <h1 className="text-xl font-semibold text-white/90">Resume</h1>
          
          <a 
            href={resumeUrl}
            download="Akshat_Sharma_Resume.pdf"
            className="flex items-center space-x-2 text-white/70 hover:text-green-400 transition-colors duration-300"
          >
            <FaDownload />
            <span>Download</span>
          </a>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="pt-20 p-4">
        <div className="max-w-4xl mx-auto">
          <iframe
            src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(resumeUrl)}`}
            className="w-full h-[calc(100vh-6rem)] border border-green-400/30 rounded-lg bg-white"
            title="Resume"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;