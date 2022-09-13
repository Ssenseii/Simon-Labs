import React, {useState} from "react";
import { motion } from "framer-motion";
import { images } from "../constants/index";

const Nav = () => {

  const [ToggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className="nav">
      <div className="nav__segment">
        <div className="nav__segment-logo">
          <img src={images.logo} alt="logo" />
        </div>
      </div>

      <div className="nav__segment">
        <ul className="nav__segment-links">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>

        <div className="nav__segment-actions">
          <button>Github</button>
          <button>Linkdin</button>
        </div>
        <div className="nav__segment-burger">
          <button
            onClick={() => {
              setToggleMenu(!ToggleMenu);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {ToggleMenu && (
        <motion.div
          initial={{ x: 400,}}
          whileInView={{ x: 0, }}
          transition={{
            default: { ease: "easeInOut" },
          }}
          className="nav__menu"
        >
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Nav;
