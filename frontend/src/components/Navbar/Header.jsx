import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-[#0f1932] text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
          <div className="flex space-x-4 text-white">
            <a href="#" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-500">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-pink-400">
              <FaInstagram />
            </a>
          </div>
          <div className="flex space-x-6 text-sm">
            <a
              href="tel:+254725534553"
              className="flex items-center space-x-1 hover:text-blue-400"
            >
              <FaPhoneAlt />
              <span>+254 725 534 553</span>
            </a>
            <a
              href="mailto:info@kangarosolutions.com"
              className="flex items-center space-x-1 hover:text-blue-400"
            >
              <FaEnvelope />
              <span>info@kangarosolutions.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
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
            <a
              href="https://kangarosolutions.com/"
              className="hover:text-blue-600 transition"
            >
              Home
            </a>

            {/* Our Company Dropdown */}
            <div className="relative group">
              <button className="hover:text-blue-600 transition">
                Our Company
              </button>
              <div className="absolute left-0 mt-2 w-52 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-200 z-50">
                <a
                  href="https://kangarosolutions.com/about-us/"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  About Us
                </a>
                <a
                  href="https://kangarosolutions.com/mission-vision/"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Our Mission and Vision
                </a>
                <a
                  href="https://kangarosolutions.com/why-choose-us/"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Why Choose Us
                </a>
                <a
                  href="https://kangarosolutions.com/our-team-2/"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Our Team
                </a>
              </div>
            </div>

            {/* Our Services Dropdown */}
            <div className="relative group">
              <button className="hover:text-blue-600 transition">
                Our Services
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-200 z-50">
                <a
                  href="https://kangarosolutions.com/it-services/mobile-app-development/"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Strategy Development & Execution
                </a>
                <a
                  href="https://kangarosolutions.com/it-services/data-center-and-hardware/"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Human Capital Management
                </a>
                <a
                  href="https://kangarosolutions.com/it-services/"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  ICT Consultancy Service
                </a>
                <a
                  href="https://kangarosolutions.com/it-services/front-backend-development/"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Front and Backend Development
                </a>
              </div>
            </div>

            <a
              href="https://kangarosolutions.com/our-projects-portfolio/"
              className="hover:text-blue-600 transition"
            >
              Our Projects
            </a>
            <a
              href="https://kangarosolutions.com/contacts/"
              className="hover:text-blue-600 transition"
            >
              Our Contacts
            </a>
            <a
              href="https://kangarosolutions.com/it-services/"
              className="hover:text-blue-600 transition"
            >
              ICT Consultancy Services
            </a>
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
