// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import "./styles/Menu.css"; // Import your CSS file

function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <h1>Home</h1>
        <p>Welcome to our website!</p>
      </div>
      <div id="menu">
        <h1>Menu</h1>
        <p>Explore our delicious menu options.</p>
      </div>
      <div id="about">
        <h1>About</h1>
        <p>Learn more about us.</p>
      </div>
      <div id="reservation">
        <h1>Reservation</h1>
        <p>Book a table with us.</p>
      </div>
      <div id="contact">
        <h1>Contact</h1>
        <p>Get in touch with us.</p>
      </div>
      <div id="admin">
        <h1>Admin Panel</h1>
        <p>Admin login and management.</p>
      </div>
    </div>
  );
}

export default App;
