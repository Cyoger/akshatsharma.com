import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <p className="text-green-400 text-6xl font-mono mb-4">404</p>
      <p className="text-white/60 mb-8 tracking-widest uppercase text-sm">Page not found</p>
      <Link
        to="/"
        className="px-5 py-3 bg-green-400/20 hover:bg-green-400/30 text-green-400 border border-green-400/50 rounded transition-all duration-300"
      >
        Go home
      </Link>
    </div>
  );
};

export default NotFound;
