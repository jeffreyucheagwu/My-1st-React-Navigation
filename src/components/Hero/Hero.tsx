import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-parent-div">
        <div className="text">We Change Everything WordPress</div>
        <p className="hero-p-tag">
          This is the only WordPress theme you will ever want to use
        </p>
        <div className="parent-button">
          <div className="button-1">
            <button className="button-1">READ MORE</button>
          </div>
          <div className="button-2">
            <button className="button-2">DOWNLOAD NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
