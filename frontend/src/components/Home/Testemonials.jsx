import React, { useState } from "react";
import bgMap from "../../Assets/Images/bg-maps-dots.jpg";
import client1 from "../../Assets/Images/testi1.png";
import client2 from "../../Assets/Images/testi2.png";

const testimonialsData = [
  {
    id: 1,
    logo: client1,
    title: "County Governments in Kenya,",
    subtitle: "Real-Time Report Submission Application",
    text: `Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. The best part...always solving problems with great original ideas!.`,
  },
  {
    id: 2,
    logo: client2,
    title: "Federal Government Of Somalia",
    subtitle: "ICT Consultancy Services",
    text: `Patience. Infinite patience. No shortcuts. Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Even if the client is being careless. The best part...always solving problems with great original ideas!.`,
  },
  {
    id: 3,
    logo: client1,
    title: "Department Of Defence (Kenya)",
    subtitle: "Client of Company",
    text: `Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. The best part...always solving problems with great original ideas!.`,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const getVisibleCards = () => {
    const secondIndex = (currentIndex + 1) % testimonialsData.length;
    return [testimonialsData[currentIndex], testimonialsData[secondIndex]];
  };

  const visibleCards = getVisibleCards();

  return (
    <section
      className="relative bg-cover bg-center py-16 "
      style={{ backgroundImage: `url(${bgMap})` }}
    >
      <div className="absolute inset-0 bg-white/60" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <span className="text-sm text-purple-600 font-semibold">
          // OUR CLIENTS
        </span>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
          We are Trusted <br />
          15+ Countries Across Africa
        </h2>

        <div className="relative mt-12 flex items-center justify-center">
          <button
            onClick={handlePrev}
            className="absolute -left-30 top-1/2 transform -translate-y-1/2 h-10 w-10 text-2xl font-bold text-gray-700 bg-white/90 rounded-full shadow hover:bg-white z-20"
          >
            ←
          </button>

          {/* Cards */}
          <div className="flex gap-6 justify-center">
            {visibleCards.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow"
                style={{
                  width: "600px",
                  minHeight: "250px",
                  padding: "20px",
                  boxShadow: "3px 3px 13px 0px rgba(0, 0, 0, 0.1)",
                  textAlign: "left",
                }}
              >
                <div className="flex items-center mb-4">
                  <img
                    decoding="async"
                    src={item.logo}
                    alt={item.title}
                    className="h-14 w-14 rounded-full object-contain mr-4"
                  />
                  <div className="tinfo">
                    <h6 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h6>
                    <p className="text-sm text-gray-500">{item.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed">
                  "{item.text}"
                </p>
              </div>
            ))}
          </div>

          {/* → */}
          <button
            onClick={handleNext}
            className="absolute -right-30 top-1/2 transform -translate-y-1/2 h-10 w-10 text-2xl font-bold text-gray-700 bg-white/90 rounded-full shadow hover:bg-white z-20"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
