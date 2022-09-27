import React from "react";

const WhoAmI = () => {
  return (
    <section className="whoami">
      <article>
        <h2>Who Am I?</h2>

        <section>
          <p>
            My name is Simon Reinhardt, and I am a frontend developer. <br />I
            am also an avid reader and an ink artist.
          </p>
        </section>

        <section>
          <p>
            I fell in love with web design the second I compiled my first SASS
            code. The freedom of building anything I wanted on the web lead me
            to pursuing a passion in this field: <br />
          </p>
          <ul>
            <li>
              I read books on brand image, system architecture, and pattern
              design.
            </li>
            <li>
              {" "}
              I study new and innovative computer languages from the ground up.
            </li>
            <li>
              I research websites and articles from renowned sources such as{" "}
              <b>
                <a target="_blank" rel="noreferrer" href="https://web.dev/">
                  Web.dev
                </a>
              </b>{" "}
              ,
              <b>
                <a target="_blank" rel="noreferrer" href="https://www.patterns.dev/">
                  Patterns.dev
                </a>
              </b>{" "}
              ,
              <b>
                <a target="_blank" rel="noreferrer" href="https://alistapart.com/">
                  A List Apart
                </a>
              </b>
              , and many more...
            </li>
          </ul>

          <a target="_blank" rel="noreferrer" href="https://github.com/Ssenseii/Simon-Labs">
            <div>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </button>
              <p>Look at the Project's source code</p>
            </div>
          </a>
        </section>

        <section>
          <p>
            I love what I do but I don't like worrying about tiny insignificant
            design decisions. My predefined style guides allow me to seamlessly
            finish a project and hop onto the next without trouble.
          </p>

          <a
            target="_blank" rel="noreferrer"
            href="https://github.com/Ssenseii/Simon-Labs/blob/main/style-guide.md"
          >
            <div>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </button>
              <p>Check My Style Guide</p>
            </div>
          </a>
        </section>
      </article>
    </section>
  );
};

export default WhoAmI;
