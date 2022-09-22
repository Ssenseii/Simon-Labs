import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Tools = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="tools">
      <h2>My Tools :</h2>

      <article ref={ref}>
        <motion.section
          style={{
            opacity: isInView ? 1 : 0,
            translateX: isInView ? 0 : -200,
            transition: "all 0.9s ease-in-out",
          }}
        >
          <h3>For Pre-Production: </h3>
          <p>
            &#47;&#47;&#47; Personal Projects: <span>A4 Paper &#59;</span>
          </p>
          <p>
            &#47;&#47;&#47; Commercial Projects: <span>Figma</span> or{" "}
            <span>Adobe XD &#59;</span>
          </p>
        </motion.section>

        <motion.section
          style={{
            opacity: isInView ? 1 : 0,
            translateX: isInView ? 0 : -200,
            transition: "all 0.9s ease-in-out",
          }}
        >
          <h3>Frameworks: </h3>
          <p>
            &#47;&#47;&#47; Hydrated SSR: <span>React / Next.js &#59;</span>
          </p>
          <p>
            &#47;&#47;&#47; Static Websites (blogs): <span>Astro &#59;</span>{" "}
          </p>
        </motion.section>

        <motion.section
          style={{
            opacity: isInView ? 1 : 0,
            translateX: isInView ? 0 : -200,
            transition: "all 0.9s ease-in-out",
          }}
        >
          <h3>For Styling: </h3>
          <p>
            &#47;&#47;&#47; Custom "Hell-Let-Loose" Websites:{" "}
            <span> SCSS &#59;</span>
          </p>
          <p>
            &#47;&#47;&#47; Constrained websites: <span>TailwindCSS &#59;</span>
          </p>
        </motion.section>

        <motion.section
          style={{
            opacity: isInView ? 1 : 0,
            translateX: isInView ? 0 : -200,
            transition: "all 0.9s ease-in-out",
          }}
        >
          <h3>For Asset production: </h3>
          <div>
            <ul>
              <li>Illustrator</li>
              <li>Photoshop</li>
              <li>Premier</li>
              <li>Aseprite</li>
              <li>MagicaVoxel</li>
            </ul>
          </div>
        </motion.section>
        <motion.section
          style={{
            opacity: isInView ? 1 : 0,
            translateX: isInView ? 0 : -200,
            transition: "all 0.9s ease-in-out",
          }}
        >
          <h3>Extra tools: </h3>
          <ul>
            <li>Framer</li>
            <li>Three.js</li>
            <li>Material UI</li>
          </ul>
        </motion.section>
      </article>
    </section>
  );
};

export default Tools;
