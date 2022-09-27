import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <article>
        <h1>
          Brushing <span>Perfection</span>
        </h1>
        <div className="hero__subtitle">
          <code>A line code at a time</code>
          <div />
        </div>

        <p>
          Millions of businesses - from startups to media conglomerats - strive
          to achieve refined framework design, Beautiful UI, and striking brand
          image.
        </p>

        <p>With our tools and experience, so can you...</p>

        <div className="hero__actions">
          <a href="#focus">
            <button>
              Our Goals
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
          </a>
          <a href="/blog">Read More About who we are</a>
        </div>
      </article>
    </section>
  );
};

export default Hero;
