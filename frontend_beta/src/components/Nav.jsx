import React from "react";
import { Link } from "react-router-dom";
import { images } from '../constants/index'

const Nav = () => {
  return (
    <nav className="nav">

      <div className="nav__logo">
        <img src={images.logo} alt="" />
      </div>

      <ul>
        <li>
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li>
          <Link className="nav-link" to="/blog">Blog</Link>
        </li>
        <li>
          <Link className="nav-link" to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
