import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"; // This should include Tailwind directives
import Header from "./components/Navbar/Header";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";


import AboutUs from "./pages/Company/AboutUs";
import MissionVision from "./pages/Company/Mission";
import WhyChooseUs from "./pages/Company/Why";
// import OurTeam from "./pages/OurTeam";

import Strategy from "./pages/Services/Strategy"; 
// import Human from "./pages/Human";
import ICT from "./pages/Services/ICT";
import Development from "./pages/Services/Development";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            {/* Home route */}
            <Route path="/" element={<Welcome />} />
            
            {/* Company pages */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/mission-vision" element={<MissionVision />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            {/* <Route path="/our-team" element={<OurTeam />} /> */}
            
            {/* Servies pages */}
            <Route path="/strategy" element={<Strategy />} />
            {/* <Route path="/human" element={<Human />} /> */}
            <Route path="/ict" element={<ICT />} />
            <Route path="/development" element={<Development />} />
            
            
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;