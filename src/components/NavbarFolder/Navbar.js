import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
        <li className="menuItem">
          <button onClick={toggleMenu} className="menuButton">
            Menu ▼
          </button>
          {menuOpen && (
            <ul className="dropdownMenu">
              <li>
                <Link to="/menu/cakes" className="link">
                  Cakes
                </Link>
              </li>
              <li>
                <Link to="/menu/drinks" className="link">
                  Drinks
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/contact" className="contactButton">
            Order Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
