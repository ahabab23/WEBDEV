import React, { useState } from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Helper function to check active route
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-md ">
      {/* Top Bar - Keep existing styles */}
      <div className="bg-[#0f1932] text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
          <div className="flex space-x-4 text-white">
            <a
              href="#"
              className="hover:text-blue-400 border-r pr-4 pt-0.5 border-l pl-4"
            >
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-600 border-r pr-4 pt-0.5">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-500 border-r pr-4 pt-0.5">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-pink-400 border-r pr-4 pt-0.5">
              <FaInstagram />
            </a>
          </div>
          <div className="flex space-x-6 text-sm">
            <a
              href="tel:+254725534553"
              className="flex items-center space-x-1 hover:text-blue-400 border-r pr-4 pt-0.5 border-l pl-4"
            >
              <FaPhoneAlt />
              <span>+254 725 534 553</span>
            </a>
            <a
              href="mailto:info@kangarosolutions.com"
              className="flex items-center space-x-1 hover:text-blue-400 border-r pr-4 pt-0.5"
            >
              <FaEnvelope />
              <span>info@kangarosolutions.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Modified to add underlines and active states */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 h-22">
          {/* Logo */}
          <a href="https://kangarosolutions.com/">
            <img
              src="https://kangarosolutions.com/wp-content/uploads/2020/09/Parallel-Blue-and-NO-BG-1.png"
              alt="Kangaroo Solutions"
              className="h-10"
            />
          </a>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-6 text-gray-800 font-medium items-center">
            {/* Home Link */}
            <Link
              to="/"
              className={`hover:text-blue-600 transition relative ${
                isActive("/") ? "text-blue-600" : ""
              }`}
            >
              Home
              <span className={`absolute -bottom-8 left-0 w-full h-0.5 bg-blue-600 transition-all duration-300 ${
                isActive("/") ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
              }`}></span>
            </Link>

            {/* Our Company Dropdown */}
            <div className="relative group">
              <div className={`flex items-center gap-1 hover:text-blue-600 transition-all duration-200 relative ${
                location.pathname.startsWith("/about-us") || 
                location.pathname.startsWith("/mission-vision") ||
                location.pathname.startsWith("/why-choose-us") ||
                location.pathname.startsWith("/our-team")
                  ? "text-blue-600"
                  : ""
              }`}>
                <span>Our Company</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                {/* Underline only visible on hover */}
                <span className="absolute -bottom-8 left-0 w-full h-0.5 bg-blue-600 transition-all duration-300 scale-x-0 group-hover:scale-x-100"></span>
              </div>
              <div className="absolute left-0 mt-8 w-60 bg-white border shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 invisible group-hover:visible transition-all duration-200 z-50 transform origin-top uppercase text-sm p-2">
                <Link
                  to="/about-us"
                  className={`block px-4 py-2 hover:text-blue-500 transition-all duration-400 hover:translate-x-2 relative group/item ${
                    isActive("/about-us") ? "text-blue-600" : ""
                  }`}
                >
                  <span className="relative inline-block">
                    <span className="absolute -left-2 opacity-0 group-hover/item:opacity-100 transition-all duration-400 ease-in-out">
                      //
                    </span>
                    <span className="group-hover/item:pl-2 transition-all duration-400">
                      ABOUT US
                    </span>
                  </span>
                </Link>
                <Link
                  to="/mission-vision"
                  className={`block px-4 py-2 hover:text-blue-500 transition-all duration-400 hover:translate-x-2 relative group/item ${
                    isActive("/mission-vision") ? "text-blue-600" : ""
                  }`}
                >
                  <span className="relative inline-block">
                    <span className="absolute -left-2 opacity-0 group-hover/item:opacity-100 transition-all duration-400 ease-in-out">
                      //
                    </span>
                    <span className="group-hover/item:pl-2 transition-all duration-400">
                      OUR MISSION AND VISION
                    </span>
                  </span>
                </Link>
                <Link
                  to="/why-choose-us"
                  className={`block px-4 py-2 hover:text-blue-500 transition-all duration-400 hover:translate-x-2 relative group/item ${
                    isActive("/why-choose-us") ? "text-blue-600" : ""
                  }`}
                >
                  <span className="relative inline-block">
                    <span className="absolute -left-2 opacity-0 group-hover/item:opacity-100 transition-all duration-400 ease-in-out">
                      //
                    </span>
                    <span className="group-hover/item:pl-2 transition-all duration-400">
                      WHY CHOOSE US
                    </span>
                  </span>
                </Link>
                <Link
                  to="/our-team"
                  className={`block px-4 py-2 hover:text-blue-500 transition-all duration-400 hover:translate-x-2 relative group/item ${
                    isActive("/our-team") ? "text-blue-600" : ""
                  }`}
                >
                  <span className="relative inline-block">
                    <span className="absolute -left-2 opacity-0 group-hover/item:opacity-100 transition-all duration-400 ease-in-out">
                      //
                    </span>
                    <span className="group-hover/item:pl-2 transition-all duration-400">
                      OUR TEAM
                    </span>
                  </span>
                </Link>
              </div>
            </div>

            {/* Our Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleDropdown}
                className={`flex items-center gap-1 hover:text-blue-600 transition-all duration-200 relative ${
                  location.pathname.startsWith("/strategy") || 
                  location.pathname.startsWith("/front-back") ||
                  location.pathname.startsWith("/ict") ||
                  location.pathname.startsWith("/development")
                    ? "text-blue-600"
                    : ""
                }`}
              >
                <span>Our Services</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                {/* Underline only visible on hover */}
                <span className="absolute -bottom-8 left-0 w-full h-0.5 bg-blue-600 transition-all duration-300 scale-x-0 group-hover:scale-x-100"></span>
              </button>
              <div className="absolute left-0 mt-8 w-96 bg-white border shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 invisible group-hover:visible transition-all duration-200 z-50 transform origin-top uppercase text-sm p-4">
                <Link
                  to="/strategy"
                  className={`block px-4 py-2 hover:text-blue-500 transition-all duration-400 hover:translate-x-2 relative group/item ${
                    isActive("/strategy") ? "text-blue-600" : ""
                  }`}
                >
                  <span className="relative inline-block">
                    <span className="absolute -left-2 opacity-0 group-hover/item:opacity-100 transition-all duration-400 ease-in-out">
                      //
                    </span>
                    <span className="group-hover/item:pl-2 transition-all duration-400">
                      STRATEGY DEVELOPMENT & EXECUTION
                    </span>
                  </span>
                </Link>
                <Link
                  to="/front-back"
                  className={`block px-4 py-2 hover:text-blue-500 transition-all duration-400 hover:translate-x-2 relative group/item ${
                    isActive("/front-back") ? "text-blue-600" : ""
                  }`}
                >
                  <span className="relative inline-block">
                    <span className="absolute -left-2 opacity-0 group-hover/item:opacity-100 transition-all duration-400 ease-in-out">
                      //
                    </span>
                    <span className="group-hover/item:pl-2 transition-all duration-400">
                      HUMAN CAPITAL MANAGEMENT
                    </span>
                  </span>
                </Link>
                <Link
                  to="/ict"
                  className={`block px-4 py-2 hover:text-blue-500 transition-all duration-400 hover:translate-x-2 relative group/item ${
                    isActive("/ict") ? "text-blue-600" : ""
                  }`}
                >
                  <span className="relative inline-block">
                    <span className="absolute -left-2 opacity-0 group-hover/item:opacity-100 transition-all duration-400 ease-in-out">
                      //
                    </span>
                    <span className="group-hover/item:pl-2 transition-all duration-400">
                      ICT CONSULTANCY SERVICES
                    </span>
                  </span>
                </Link>
                <Link
                  to="/development"
                  className={`block px-4 py-2 hover:text-blue-500 transition-all duration-400 hover:translate-x-2 relative group/item ${
                    isActive("/development") ? "text-blue-600" : ""
                  }`}
                >
                  <span className="relative inline-block">
                    <span className="absolute -left-2 opacity-0 group-hover/item:opacity-100 transition-all duration-400 ease-in-out">
                      //
                    </span>
                    <span className="group-hover/item:pl-2 transition-all duration-400">
                      FRONT AND BACKEND DEVELOPMENT
                    </span>
                  </span>
                </Link>
              </div>
            </div>

            {/* Other Navigation Links */}
            <Link
              to="/our-projects-portfolio"
              className={`hover:text-blue-600 transition relative ${
                isActive("/our-projects-portfolio") ? "text-blue-600" : ""
              }`}
            >
              Our Projects
              <span className={`absolute -bottom-8 left-0 w-full h-0.5 bg-blue-600 transition-all duration-300 ${
                isActive("/our-projects-portfolio") ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
              }`}></span>
            </Link>
            <Link
              to="/contact"
              className={`hover:text-blue-600 transition relative ${
                isActive("/contact") ? "text-blue-600" : ""
              }`}
            >
              Our Contacts
              <span className={`absolute -bottom-8 left-0 w-full h-0.5 bg-blue-600 transition-all duration-300 ${
                isActive("/contact") ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
              }`}></span>
            </Link>
            <Link
              to="/ict"
              className={`hover:text-blue-600 transition relative ${
                isActive("/ict") ? "text-blue-600" : ""
              }`}
            >
              ICT Consultancy Services
              <span className={`absolute -bottom-8 left-0 w-full h-0.5 bg-blue-600 transition-all duration-300 ${
                isActive("/ict") ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
              }`}></span>
            </Link>
          </nav>

          {/* Search Icon */}
          <div className="ml-4">
            <button className="text-gray-600 hover:text-blue-600">
              <FiSearch size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;