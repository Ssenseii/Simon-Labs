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
            strive to achieve <div>refined</div> framework design, Beautiful UI,
            and Striking brand Image.
          </p>

          <p>With our tools and experiences, so can you...</p>

          <div className="hero__content-text-actions">
            <button>
              Start Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="button-isActive"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
            <a href="">Learn More</a>
          </div>

          <div className="hero__content-graphic"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
