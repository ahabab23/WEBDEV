// import React from "react";
// import { FaAward, FaCog, FaArrowRight } from "react-icons/fa";
// import AboutImage from "../../Assets/Images/welcome_pg.jpg"; // Replace with correct image path

// const AboutCompany = () => {
//   return (
//     <section className="mt-10 py-12 px-40 md:px-20 bg-white flex flex-col md:flex-row items-center justify-between">
//       {/* Left Content */}
//       <div className="md:w-1/2 ml-100 mr-40 space-y-6">
//         {/* Heading */}
//         <div>
//           <span className="text-purple-700 font-bold uppercase">
//             // About Company
//           </span>
//           <h2 className="text-2xl md:text-xl font-bold mt-2 leading-snug">
//             Your Partner for Software Development and ICT Consultancy Services
//           </h2>
//         </div>

//         {/* Paragraph */}
//         <p className="text-gray-600 text-base leading-relaxed">
//           KSL is a leading-edge software development company in East Africa. Our
//           teams create apps for iOS, OS X Android and Windows platforms for our
//           clients, who have grown to millions using KSL’s technology. We have
//           offices in Kigali, Nairobi and Addis Ababa.
//         </p>

//         {/* Feature Boxes */}
//         <div className="flex flex-col sm:flex-row gap-8 pt-2">
//           <div className="flex-1 space-y-3">
//             <FaAward className="text-purple-700 text-3xl" />
//             <h5 className="text-lg font-semibold">Experience</h5>
//             <div className="w-full h-1 bg-gray-300 transition-all duration-300 group-hover:bg-purple-700 roup-hover:scale-x-105 transform origin-left" />
//             <p className="text-gray-600 text-sm leading-relaxed">
//               Our great team of more than 1400 software experts.
//             </p>
//           </div>

//           <div className="flex-1 space-y-3">
//             <FaCog className="text-purple-700  text-3xl" />
//             <h5 className="text-lg font-semibold">Quick Support</h5>
//             <div className="w-full h-1 bg-gray-300" />
//             <p className="text-gray-600 text-sm leading-relaxed">
//               We’ll help you test bold new ideas while sharing your vision.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Right Image & Link */}
//       <div className="md:w-1/2 mt-10  mr-20 md:mt-0">
//         <img
//           src={AboutImage}
//           alt="About Company"
//           className="rounded-lg shadow-lg w-full"
//         />
//         <div className="mt-4">
//           <a
//             href="https://kangarosolutions.com/about-us/"
//             className="text-blue-600 text-sm font-medium hover:underline inline-flex items-center relative bottom-20 left-10"
//           >
//             <FaArrowRight className="mr-2 text-sm " />
//             LEARN MORE ABOUT US
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutCompany;
import React from "react";
import { FaAward, FaCog, FaArrowRight } from "react-icons/fa";
import AboutImage from "../../Assets/Images/welcome_pg.jpg"; // Replace with correct image path

const AboutCompany = () => {
  return (
    <section className="mt-10 py-12 px-40 md:px-20 bg-white flex flex-col md:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="md:w-1/2 ml-100 mr-40 space-y-6">
        {/* Heading */}
        <div>
          <span className="text-purple-700 font-bold uppercase">
            // About Company
          </span>
          <h2 className="text-2xl md:text-xl font-bold mt-2 leading-snug">
            Your Partner for Software Development and ICT Consultancy Services
          </h2>
        </div>

        {/* Paragraph */}
        <p className="text-gray-600 text-base leading-relaxed">
          KSL is a leading-edge software development company in East Africa. Our
          teams create apps for iOS, OS X Android and Windows platforms for our
          clients, who have grown to millions using KSL’s technology. We have
          offices in Kigali, Nairobi and Addis Ababa.
        </p>

        {/* Feature Boxes */}
        <div className="flex flex-col sm:flex-row gap-8 pt-2">
          {/* Feature Box 1 (Experience) */}
          <div className="group flex-1 space-y-3 p-4 bg-white rounded shadow">
            <FaAward className="text-purple-700 text-3xl" />
            <h5 className="text-lg font-semibold">Experience</h5>

            {/* Animated Divider */}
            <div className="w-full overflow-hidden">
              <div
                className="h-1 bg-gray-300 w-full scale-x-0 origin-left transition-all duration-300 group-hover:scale-x-100 group-hover:bg-purple-700 transform
                "
              />
            </div>

            {/* Paragraph with hover color + slide */}
            <p
              className="text-gray-600 text-sm leading-relaxed 
                          "
            >
              Our great team of more than 1400 software experts.
            </p>
          </div>

          {/* Feature Box 2 (Quick Support) */}
          <div className="group flex-1 space-y-3 p-4 bg-white rounded shadow">
            <FaCog className="text-purple-700 text-3xl" />
            <h5 className="text-lg font-semibold">Quick Support</h5>

            {/* Animated Divider */}
            <div className="w-full overflow-hidden">
              <div
                className="
                  h-1
                  bg-gray-300
                  w-full

                  scale-x-0
                  origin-left

                  transition-all
                  duration-300

                  group-hover:scale-x-100
                  group-hover:bg-purple-700
                  transform
                "
              />
            </div>

            {/* Paragraph with hover color + slide */}
            <p
              className="text-gray-600 text-sm leading-relaxed 
                          "
            >
              We’ll help you test bold new ideas while sharing your vision.
            </p>
          </div>
        </div>
      </div>

      {/* Right Image & Link */}
      <div className="md:w-1/2 mt-10 mr-20 md:mt-0">
        <img
          src={AboutImage}
          alt="About Company"
          className="rounded-lg shadow-lg w-full"
        />
        <div className="mt-4">
          <a
            href="https://kangarosolutions.com/about-us/"
            className="text-blue-600 text-sm font-medium hover:underline inline-flex items-center relative bottom-20 left-10"
          >
            <FaArrowRight className="mr-2 text-sm" />
            LEARN MORE ABOUT US
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
