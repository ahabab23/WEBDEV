import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "../../Assets/bg1-service1.jpg"

export default function ProductionProcess() {
  const [activeTab, setActiveTab] = useState("ANALYSIS");

  const content = {
    ANALYSIS: "Kangaroo Solutions Limited is the partner of choice for many of the world's leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services. Our product design service lets you prototype, test and validate your ideas.",
    DESIGN: "While integrating the security with the DevOps approach has always been of high demand, this requires a completely different range of processes and tools. DevOps is already known to boast of an agile development methodology. Now when the inputs of the security experts I’ll be brought in a collaborative environment, the project will have an array of effective security safeguards.",
    TESTING: "In spite of disturbing the agile development process of the DevOps approach, the additional security inputs only enhance the safeguards and reliability of the project. So, in a way, DevSecOps will only extend the benefits of a DevOps approach further with security inputs. DevOps is already known to boast of an agile development methodology."
  };

  return (
    <div className="min-h-screen bg-[#211E3B] flex">
      {/* Left Content Section */}
      <div className="flex-1 p-16 flex flex-col justify-center">
        <div className="max-w-2xl">
          <p className="text-purple-600 text-sm font-medium mb-4 tracking-wider">
            // TECHNOLOGY INDEX
          </p>
          
          <h1 className="text-5xl font-bold text-white mb-12 leading-tight">
            We Organize Our<br />
            Production Process
          </h1>
          
          {/* Tab Navigation */}
          <div className="flex gap-1 mb-12">
            {["ANALYSIS", "DESIGN", "TESTING"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 font-semibold text-sm tracking-wider transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          {/* Content */}
          <p className="text-gray-300 text-l leading-relaxed mb-12  h-28">
            {content[activeTab]}
          </p>
          
          {/* Learn More Button */}
          <div className="group cursor-pointer inline-flex items-center">
            <ArrowRight className="w-5 h-5 text-blue-400 mr-3 transition-transform duration-300 " />
            <span className="text-blue-400 font-semibold text-m tracking-wide transition-transform duration-300 group-hover:-translate-x-3">
              LEARN MORE
            </span>
          </div>
        </div>
      </div>
      
      {/* Right Image Section */}
      <div className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-900/20"></div>
        <img 
          src={Image}
          alt="Person working on laptop"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}