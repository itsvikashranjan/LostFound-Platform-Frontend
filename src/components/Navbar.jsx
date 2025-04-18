import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg">
      <div className="mx-auto px-5">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="group">
              <span className="text-xl font-bold">
                <span className="text-blue-400 group-hover:text-blue-300 transition-all duration-300">Lost</span>
                <span className="text-purple-400 group-hover:text-purple-300 transition-all duration-300">Found</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-5">
            <Link
              to="/about"
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 group relative"
            >
              About
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link
              to="/report"
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 group relative"
            >
              Report
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link
              to="/reporteditem"
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 group relative"
            >
              Reported Items
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-5">
            <Link
              to="/login"
              className="px-3 py-2 text-sm font-medium text-white border border-white/20 hover:bg-white/10 transition-all duration-300 hover:border-white/30 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600/90 to-blue-500/90 hover:from-purple-700/90 hover:to-blue-600/90 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 hover:scale-105"
            >
              Registe
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-5 pt-2 pb-3 space-y-1 bg-gray-900">
          <Link
            to="/about"
            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/report"
            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Report
          </Link>
          <Link
            to="/reporteditem"
            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Reported Items
          </Link>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex flex-col space-y-2">
              <Link
                to="/login"
                className="block px-3 py-2 text-base font-medium text-white border border-white/20 hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block px-3 py-2 text-base font-medium text-white bg-gradient-to-r from-purple-600/90 to-blue-500/90 hover:from-purple-700/90 hover:to-blue-600/90 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
