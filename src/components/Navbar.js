import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../styles/Menu.css"; // Ensure this path is correct

const NavbarComponent = () => {
  return (
    <Navbar className="navbar-custom" expand="lg">
      <Navbar.Brand href="#home" className="navbar-brand">
        Alpha Patisserie & Bakery
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#our-story">Our Story</Nav.Link>
          <Nav.Link href="#find-us">Find Us</Nav.Link>
          <Nav.Link href="#our-treats">Our Treats</Nav.Link>
          <Nav.Link href="#reviews">Reviews</Nav.Link>
          <Nav.Link href="#contact-us" className="nav-button">
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
