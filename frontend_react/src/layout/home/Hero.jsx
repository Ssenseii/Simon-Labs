import React, { useState } from "react";
import { motion } from "framer-motion";
import images from "../../constants/images";

const Hero = () => {
  const [Adjective, setAdjective] = useState("Innovative");
  const [IsActive, setIsActive] = useState(false);
  const adjectives = [
    "innovative",
    "creative",
    "structured",
    "aesthetic",
    "imaginative",
    "elegant",
    "ornamental",
    "stimulating",
    "sublime",
    "tasteful",
    "refined",
  ];

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
            one line of <motion.div>code</motion.div> at a time
          </h2>

          <p>
            Millions of businesses - from startups tp conglomerats - strive to
            achieve{" "}
            <motion.span
              onClick={() => {
                setInterval(() => {
                  setIsActive(!IsActive);
                  console.log("set active");
                }, 5000);

                setInterval(() => {
                  setAdjective(
                    adjectives[Math.floor(Math.random() * adjectives.length)]
                  );
                  console.log("adjective Set")
                }, 5000)
              }}
              animate={{
                rotateX: IsActive ? [0, 90, 0] : 0,
                y: IsActive ? [0, 5, -5, 0] : 0,
                opacity: IsActive ? [1, 0, 1] : 1,
              }}
            >
              {Adjective}
            </motion.span>{" "}
            framework design, Beautiful UI, and Brand Image.
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
