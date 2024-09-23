import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomeFolder/Home "; 
import About from "./components/AboutFolder/About";
import NavBar from "./components/NavbarFolder/Navbar";
import FindUs from "./components/FindUs/FindUs";
const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/find-us" element={<FindUs />} />
      </Routes>
    </Router>
  );
};

export default App;
