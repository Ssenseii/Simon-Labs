import React from "react";
import { motion } from "framer-motion";

import Nav from "../components/Nav";
import Hero from "../layout/home/Hero";
import Whoami from "../layout/home/Whoami";
import Tools from "../layout/home/Tools";
import Focus from "../layout/home/Focus";
import Footer from "../layout/home/Footer";

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="home"
    >
      <Nav />
      <div className="home__wrapper">
        <Hero />
        <Whoami />
      </div>
      <Tools />
      <Focus />
      <Footer />
    </motion.main>
  );
};

export default Home;
