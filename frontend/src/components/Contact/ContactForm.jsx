import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-8  text-white">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-blue-100">
          Your email address will not be published. Required fields are marked 
          <span className="text-white font-semibold"> *</span>
        </p>
      </div>

      <div className="space-y-6">
        {/* Name Field */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-4  bg-opacity-20 border border-white border-opacity-30  placeholder-white placeholder-opacity-80 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:border-transparent transition-all duration-300"
          />
        </div>

        {/* Email Field */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email *"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-4  bg-opacity-20 border border-white border-opacity-30  placeholder-white placeholder-opacity-80 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:border-transparent transition-all duration-300"
          />
        </div>

        {/* Message Field */}
        <div>
          <textarea
            name="message"
            placeholder="Message..."
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-4  bg-opacity-20 border border-white border-opacity-30  placeholder-white placeholder-opacity-80 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:border-transparent transition-all duration-300 resize-none"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            onClick={handleSubmit}
            className="bg-white text-black font-semibold px-8 py-3  hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-500 transform hover:scale-105 active:scale-95"
          >
            SEND MESSAGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;