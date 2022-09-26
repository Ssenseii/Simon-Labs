import React from "react";
import { motion } from "framer-motion";

const Confirmation = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`confirmation ${props.visibility}`}
    >
      <h1 className={props.color}>Message {props.confirm}</h1>
    </motion.div>
  );
};

export default Confirmation;
