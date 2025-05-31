import React from "react";
import ServiceBg from "../../Assets/service_bg3.jpg";
import { Link } from "react-router-dom";

export default function TIndex () {
  return (
    <div
      className="w-full text-white bg-cover bg-center bg-no-repeat relative flex items-center justify-center h-[500px] p-16"
      style={{ backgroundImage: `url(${ServiceBg})`}}
    >
      <div className="w-full flex flex-col items-center justify-center min-h-[300px]">
        <p className="text-xl w-4/6 text-center mb-6">
          // TECHNOLOGY INDEX
        </p>
        <h3 className="text-4xl font-bold text-center w-5/6 mb-8">
        We Deliver Solution with
        the Goal of Trusting Relationships
        </h3>
        <Link
          to="/contact"
          className="border bg-blue-500 text-white hover:bg-purple-700 duration-300 px-8 py-4  text-lg font-medium"
        >
          CONTACT US
        </Link>
      </div>
    </div>
  );
}
