import React from "react";
import GM from "../../Assets/gm_bw.jpg";
import Lawyer from "../../Assets/lawyer.jpg";
import cto from "../../Assets/cto_bw.jpg";
import dev from "../../Assets/marcus2.jpg";

function Squad() {
  return (
    <>
      <div className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Leadership Team
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* GM Card */}
            <div
              className="group relative h-96 bg-cover bg-center p-12 shadow-sm border border-blue-500 hover:shadow-xl transition-all duration-500 overflow-hidden"
              style={{ backgroundImage: `url(${GM})` }}
            >
              {/* Background Image on Hover - now reduced in size */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-blue-500/50 w-full relative top-22 h-1/2 opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out flex flex-col items-center justify-center p-6 rounded-lg">
                  {/* Content moved here */}
                  <h3 className="text-xl font-bold text-center text-white mb-2 transition-colors duration-500">
                    RRIAN AGWARI
                  </h3>
                  <p className=" text-center leading-relaxed text-white text-m">
                    General Manager
                  </p>
                </div>
              </div>
            </div>

            {/* CTO Card */}
            <div
              className="group relative h-96 bg-cover bg-center p-12 shadow-sm border border-blue-500 hover:shadow-xl transition-all duration-500 overflow-hidden"
              style={{ backgroundImage: `url(${cto})` }}
            >
              {/* Background Image on Hover - now reduced in size */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-blue-500/50 w-full relative top-22 h-1/2 opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out flex flex-col items-center justify-center p-6 rounded-lg">
                  {/* Content moved here */}
                  <h3 className="text-xl font-bold text-center text-white mb-2 transition-colors duration-500">
                    GRIFFINS OSERO
                  </h3>
                  <p className=" text-center leading-relaxed text-white text-m">
                    Chief Technology Officer
                  </p>
                </div>
              </div>
            </div>

            {/* Lawyer Card */}
            <div
              className="group relative h-96 bg-cover bg-center p-12 shadow-sm border border-blue-500 hover:shadow-xl transition-all duration-500 overflow-hidden"
              style={{ backgroundImage: `url(${Lawyer})` }}
            >
              {/* Background Image on Hover - now reduced in size */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-blue-500/50 w-full relative top-22 h-1/2 opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out flex flex-col items-center justify-center p-6 rounded-lg">
                  {/* Content moved here */}
                  <h3 className="text-xl font-bold text-center text-white mb-2 transition-colors duration-500">
                    PETER O. OTIENO
                  </h3>
                  <p className=" text-center leading-relaxed text-white text-m">
                    Advocate
                  </p>
                </div>
              </div>
            </div>

            {/* Dev Card */}
            <div
              className="group relative h-96 bg-cover bg-center p-12 shadow-sm border border-blue-500 hover:shadow-xl transition-all duration-500 overflow-hidden md:col-start-2"
              style={{ backgroundImage: `url(${dev})` }}
            >
              {/* Background Image on Hover - now reduced in size */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-blue-500/50 w-full relative top-22 h-1/2 opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out flex flex-col items-center justify-center p-6 rounded-lg">
                  {/* Content moved here */}
                  <h3 className="text-xl font-bold text-center text-white mb-2 transition-colors duration-500">
                    MARCUS EZRA
                  </h3>
                  <p className=" text-center leading-relaxed text-white text-m">
                    Director of Creative Design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Squad;
