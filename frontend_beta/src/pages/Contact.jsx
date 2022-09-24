import React from "react";
import Nav from "../components/Nav";
import ContactForm from "../layout/contact/ContactForm";
import {motion} from "framer-motion"

const Contact = () => {
  return (
    <motion.main initial={{opacity: 0}} animate={{opacity: 1}} className="contact">
      <Nav />
      <ContactForm />
    </motion.main>
  );
};

export default Contact;
