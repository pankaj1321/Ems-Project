import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left side */}
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Employee Manager. All rights reserved.
        </p>

        {/* Right side */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-500 hover:text-blue-600 transition">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-600 transition">
            Terms
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-600 transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
