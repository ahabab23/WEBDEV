import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"; // This should include Tailwind directives
import Header from "./components/Navbar/Header";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";


// import AboutUs from "./pages/AboutUs";
// import MissionVision from "./pages/MissionVision";
// import WhyChooseUs from "./pages/WhyChooseUs";
// import OurTeam from "./pages/OurTeam";

import Strategy from "./pages/Strategy"; 
// import Human from "./pages/Human";
// import ict from "./pages/ICT";
// import Front from "./pages/Front-Back";

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
            {/* <Route path="/about-us" element={<AboutUs />} />
            <Route path="/mission-vision" element={<MissionVision />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/our-team" element={<OurTeam />} /> */}
            
            {/* Servies pages */}
            <Route path="/strategy" element={<Strategy />} />
            {/* <Route path="/human" element={<Human />} />
            <Route path="/ict" element={<ict />} />
            <Route path="/front-back" element={<Front-Back />} />
             */}
            
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;