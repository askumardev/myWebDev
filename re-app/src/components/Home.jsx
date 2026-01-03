import React from "react";
import "../css/Home.css"; // <- import from the css folder

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to My React Page!</h1>

      <div className="shapes-wrapper">
        <div className="shape square">Square</div>
        <div className="shape circle">Circle</div>
        <div className="shape rectangle">Rectangle</div>
        <div className="shape oval">Oval</div>
        <div className="shape diamond">Diamond</div>
        <div className="triangle-container">
          <span>Triangle</span>
          <div className="triangle"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
