import React from 'react'
import Nav from "../components/Nav";
import { motion } from "framer-motion"

const Portfolio = () => {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="nopage">
      <Nav />
      <section>
        <h1>Coming Soon !!!</h1>
        <p>Working on new projects that will be added by 2023.</p>
      </section>
    </motion.main>
  );
}

export default Portfolio