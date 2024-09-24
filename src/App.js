import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomeFolder/Home "; 
import About from "./components/AboutFolder/About"; // Ensure this file exists
import NavBar from "./components/NavbarFolder/Navbar"; // Ensure this file exists
import ReviewPage from "./components/ReviewPage/ReviewPage"; // Ensure this file exists
import FindUs from "./components/FindUs/FindUs"; // Ensure this file exists
import ContactUs from "./components/ContactUs/ContactUs";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/find-us" element={<FindUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/reviews" element={<ReviewPage />} />{" "}
        {/* Added the ReviewPage route */}
      </Routes>
    </Router>
  );
};

export default App;
