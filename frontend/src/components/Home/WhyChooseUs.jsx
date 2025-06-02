import React from "react";
import {
  FaTabletAlt,
  FaLaptopCode,
  FaChartBar,
  FaShieldAlt,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const features = [
  {
    number: "01",
    title: "Experience",
    icon: <FaTabletAlt className="text-xl text-white" />,
    text: "We have been working in the industry for 6 years and have created a number of very successful systems. Our specialties include web design and implementation...",
  },
  {
    number: "02",
    title: "Expertise",
    icon: <FaLaptopCode className="text-xl text-white" />,
    text: "Our team is comprised of the best in their field, who are highly experienced and enthusiastic about delivering the best solutions to our clients.",
  },
  {
    number: "03",
    title: "Innovations",
    icon: <FaChartBar className="text-xl text-white" />,
    text: "Every day Kangaroo Solutions remain committed to providing innovative software solutions to our global market of clients.",
  },
  {
    number: "04",
    title: "Agile",
    icon: <FaShieldAlt className="text-xl text-white" />,
    text: "Agile methodologies are used to build high quality software in a timely and cost effective manner. When we develop a software, our team follows the agile..",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#1B1836] py-16 text-white h-170">
      <div className="container mx-auto px-50">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ number, title, icon, text }, index) => (
            <div
              key={index}
              className="relative group bg-[#2A2650] py-14 px-6 overflow-hidden transition duration-300 hover:bg-white hover:text-[#1B1836] flex flex-col justify-between"
            >
              {/* Faint background number */}
              <span className="absolute top-4 left-4 text-[80px] font-extrabold text-[#3C366B] opacity-10">
                {number}
              </span>

              {/* Main content */}
              <div className="relative z-10">
                <h5 className="text-lg font-semibold mb-2">{title}</h5>
                <p className="text-sm/[2] line-clamp-12 line-height-12 mb-6">
                  {text}
                </p>
                <a
                  href="https://kangarosolutions.com/why-choose-us/"
                  className="flex items-center text-[#35c1f1] font-medium group-hover:text-[#1B1836] transition"
                >
                  <HiArrowRight className="mr-1" /> LEARN MORE
                </a>
              </div>

              {/* Icon in bottom right */}
              <div className="absolute bottom-4 right-4 bg-[#443f72]   transition group-hover:bg-[#1B1836]">
                {icon}
              </div>

              {/* Decorative half circle */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#35c1f1] rounded-tl-full opacity-10 group-hover:opacity-30 transition"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
