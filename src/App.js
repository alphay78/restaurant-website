import React from "react";
import NavbarComponent from "./components/Navbar";
import "./styles/Menu.css"; // Ensure this path is correct

const App = () => {
  return (
    <div>
      <NavbarComponent />
      <section id="home" className="landing-section">
        <div className="welcome-text">
          <h1>Welcome to</h1>
          <h2>Alpha</h2>
          <h3>Patisserie & Bakery</h3>
        </div>
      </section>
      {/* Add more sections for "Our Story", "Find Us", etc. */}
    </div>
  );
};

export default App;
