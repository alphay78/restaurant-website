import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Menu.css"; // Ensure you have a Menu.css file for custom styling

function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">BrandName</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#menu">Menu</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#reservation">Reservation</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#admin-panel">Admin Panel</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
