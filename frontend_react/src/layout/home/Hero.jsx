import React, { useState, useEffect } from "react";
import images from "../../constants/images";

const Hero = () => {

  

  return (
    <div className="hero">
      <div className="hero__bg">
        <img src={images.bg_hero} alt="BG_hero" />
      </div>

      <div className="hero__content">
        <div className="hero__content-text">
          <h1>
            Brushing <span>Perfection</span>
          </h1>
          <h2>
            one line of <span>code</span> at a time
          </h2>

          <p>
            Millions of businesses - from startups to media conglomerats -
            strive to achieve <div>refined</div> framework design, Beautiful
            UI, and Striking brand Image.
          </p>

          <p>With our tools and experiences, so can you...</p>

          <div className="hero__text-actions">
            <button>Start Now</button>
            <a href="">Learn More</a>
          </div>

          <div className="hero__content-graphic"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
