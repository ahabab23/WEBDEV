import React, { useState, useEffect } from "react";
import slide1 from "../../Assets/Images/slide11.jpg";
import slide2 from "../../Assets/Images/Slide4.jpg";

const slides = [
  {
    image: slide1,
    subtitle: "// We Create Leading Digital Products",
    title: "END-TO-END\nDEVELOPMENT",
    description:
      "We are 100+ professional software engineers with more than 10 years of experience in delivering superior products.",
  },
  {
    image: slide2,
    subtitle: "// Only High-Quality Services",
    title: "SOFTWARE IT\nOUTSOURCING",
    description:
      "We are 100+ professional software engineers with more than 10 years of experience in delivering superior products.",
  },
  {
    image: slide2,
    subtitle: "// Full Cycle Software Development",
    title: "From Idea \nTo Product ",
    description:
      "We are 100+ professional software engineers with more than 10 years of experience in delivering superior products.",
  },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[98vh]  overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-3000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="h-full w-full bg-black/30 flex items-center px-8 md:px-20">
            <div className="text-white max-w-xl ml-50">
              <h3 className="text-lg md:text-xl font-light mb-3">
                {slide.subtitle}
              </h3>
              <h1 className="text-3xl md:text-7xl font-bold leading-tight whitespace-pre-line">
                {slide.title}
              </h1>
              <p className="mt-6 mb-8 text-sm md:text-base">
                {slide.description}
              </p>
              <button className="bg-sky-400 hover:bg-blue-700 text-#ffff px-6 py-4  font-semibold transition">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center space-x-6 text-white text-lg  z-20">
        <span
          className="cursor-pointer hover:text-blue-400 transition text-2xl"
          onClick={prevSlide}
        >
          &#8592;
        </span>
        <span className="font-mono tracking-wider text-sm md:text-base">
          {String(currentIndex + 1).padStart(2, "0")}/
          {String(slides.length).padStart(2, "0")}
        </span>
        <span
          className="cursor-pointer hover:text-blue-400 transition text-2xl"
          onClick={nextSlide}
        >
          &#8594;
        </span>
      </div>
    </div>
  );
};

export default HeroSlider;
