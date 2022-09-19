import React from 'react'

const Hero = () => {
  return (
    <section className='hero'>
      <article>
        <h1>Brushing Perfection</h1>
        <div className='hero__subtitle'>
          <code>A line code at a time</code>
          <div />
        </div>

        <p>
          Millions of businesses - from startups to media conglomerats - strive
          to achieve refined framework design, Beautiful UI, and Striking brand
          Image.
        </p>

        <p>With our tools and experience, so can you...</p>

        <div className="hero__actions">
          <button>
            Contact us
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
          <a href="blog">Read More About who we are</a>
        </div>
      </article>
    </section>
  );
}

export default Hero