import React, {useState} from "react";

const Brand = () => {

  const [BrandStyle, setBrandStyle] = useState("serious")

  return (
    <div className="brand">
      <article className="brand__container">
        <h1>Deploying Elegant High-Quality Code.</h1>
        <p>
          Our core is built on the idea of structured beauty. <br /> With an
          ever expanding technological world, the sky is the limit with how you
          can present your ideas to your audience.
        </p>

        <div className="brand__container-choice">
          <div>
            <button onClick={() => {setBrandStyle("serious");}}>Serious</button>
            <button onClick={() => {setBrandStyle("playfull");}}>Playfull</button>
            <button onClick={() => {setBrandStyle("brutalist");}}>Brutalist</button>
            <button onClick={() => {setBrandStyle("minimalist");}}>Minimalist</button>
          </div>
          <div>
            <img src="" alt="" />
            <article className={BrandStyle}>
              <h3>Headline:</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                deleniti, eius numquam odio distinctio perferendis nobis tenetur
                dolorem esse quasi velit et consectetur? Suscipit, minus eligendi?
              </p>
              <div>
                <button>
                  Visit Our Website{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </button>
                <p>Or</p>
                <input type="text" placeholder="Join our Newsletter..." autoComplete="off" />
              </div>
            </article>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Brand;
