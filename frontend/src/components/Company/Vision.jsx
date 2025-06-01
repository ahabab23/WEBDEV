import React from "react";
import { Code, FileText } from "lucide-react";
// Import your images at the top
import VisionBgImage from "../../Assets/bg-icon-box1.jpg";
import MissionBgImage from "../../Assets/bg-icon-box2.jpg";

const VisionMissionSection = () => {
  return (
    <div className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-600 font-medium text-sm tracking-wider uppercase mb-4">
            // ABOUT US
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Vision and Mission
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Our Vision Card */}
          <div className="group relative bg-white p-12 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden">
            {/* Background Image on Hover */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
              style={{ backgroundImage: `url(${VisionBgImage})` }}
            ></div>
            <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="mb-8 flex justify-center">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-500">
                  <Code className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-500" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center text-gray-900 mb-6 group-hover:text-white transition-colors duration-500">
                Our Vision
              </h3>

              <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                KSL's vision is to become the most trusted and innovative
                African IT solutions company and to partner with businesses to
                help imagine, execute, and accelerate their digital
                transformation journey. Our vision within the next few years is
                to become a leading IT service and software provider in the East
                African markets and also to penetrate the global markets.
              </p>
            </div>
          </div>

          {/* Our Mission Card */}
          <div className="group relative bg-white  p-12 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden">
            {/* Background Image on Hover */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
              style={{ backgroundImage: `url(${MissionBgImage})` }}
            ></div>
            <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="mb-8 flex justify-center">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-500">
                  <FileText className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-500" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center text-gray-900 mb-6 group-hover:text-white transition-colors duration-500">
                Our Mission
              </h3>

              <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                KSL's mission is to offer complete and innovative IT solutions
                and services to its clients in order for them to achieve their
                business objectives and to keep up with a continuing evolving
                world. We know that Customer growth is our growth, so we commit
                our customers to help in achieving their business goals. We
                believe in working with integrity to offer best quality
                services. We want to be known as the reliable, innovative and
                user friendly software service provider in the global IT
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionSection;
