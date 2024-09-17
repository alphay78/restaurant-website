import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Menu.css"; // Ensure the path is correct

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar-custom">
      <Navbar.Brand href="#home" className="brand-name">
        Alpha
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#menu">Menu</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#reservation">Reservation</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#admin">Admin Panel</Nav.Link>
        </Nav>
        <Navbar.Brand href="#home" className="logo-container">
          <img
            src={require("../assets/AlphaLogo.png")}
            alt="Alpha Logo"
            className="logo"
          />
        </Navbar.Brand>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
