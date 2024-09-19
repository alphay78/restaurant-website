import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">α Pastry & Bakery</div>
      <ul className="navLinks">
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            Our Story
          </Link>
        </li>
        <li>
          <Link to="/find-us" className="link">
            Find Us
          </Link>
        </li>
        <li>
          <Link to="/reviews" className="link">
            Reviews
          </Link>
        </li>
        <li>
          <Link to="/contact" className="contactButton">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
