import React from "react";
import "./App.css"; // This should include Tailwind directives
import Header from "./components/Navbar/Header";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
      <Header />
      {/* <Welcome /> */}
      <Footer />
    </>
  );
}

export default App;
