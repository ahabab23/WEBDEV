import React from "react";
import {
  FaGlobe,
  FaEnvelope,
  FaPhone,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4">
      <div className="flex flex-col items-center">
        <img
          src="https://kangarosolutions.com/wp-content/uploads/2019/12/WhatsApp-Image-2023-03-04-at-07.20.274.jpeg"
          alt="Kangaroo Solutions Logo"
          className="w-[280px] mb-6"
        />

        <div className="flex flex-col md:flex-row justify-center gap-12 text-center mb-10">
          <div>
            <FaGlobe className="text-blue-500 text-2xl mx-auto mb-2" />
            <p>
              KS HQ Rose Avenue Kilimani
              <br />
              00100 Nairobi - Kenya
            </p>
            <h6 className="mt-2 font-semibold">Our Address</h6>
          </div>

          <div>
            <FaEnvelope className="text-blue-500 text-2xl mx-auto mb-2" />
            <p>info@kangarosolutions.com</p>
            <h6 className="mt-2 font-semibold">Our Mailbox</h6>
          </div>

          <div>
            <FaPhone className="text-blue-500 text-2xl mx-auto mb-2" />
            <p>
              +254 725 534 153
              <br />
              +254 700 156 201
            </p>
            <h6 className="mt-2 font-semibold">Our Phone</h6>
          </div>
        </div>

        <ul className="flex flex-wrap justify-center gap-8 text-sm font-medium mb-6">
          <li>
            <a href="https://kangarosolutions.com/">Home</a>
          </li>
          <li>
            <a href="https://kangarosolutions.com/about-us/">About Us</a>
          </li>
          <li>
            <a href="https://kangarosolutions.com/it-services/">Services</a>
          </li>
          <li>
            <a href="https://kangarosolutions.com/contacts/">Contacts</a>
          </li>
        </ul>

        <p className="text-sm mb-6">
          Copyright © 2021 Kangaroo Solutions Limited. All Rights Reserved.
        </p>

        <div className="flex justify-center gap-4 text-xl">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
