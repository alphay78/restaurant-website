import React, { useState, useEffect } from "react";
import "./Home.css"; 

const Home = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-container h=100%">
      <div className={`home-content ${showContent ? "show" : ""}`}>
        <h1>Welcome to </h1>
        <h2>Alpha</h2>
        <h3>Patisserie & Bakery</h3>
        <button className="explore-button">Explore Alpha</button>
      </div>
    </div>
  );
};

export default Home;
