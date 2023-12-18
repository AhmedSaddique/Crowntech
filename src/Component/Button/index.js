import React from "react";
import { motion } from "framer-motion";

const Button = ({ text, onClick, className, btnicon, endicon, type }) => {
  return (
    <motion.div
      drag
      dragDirectionLock
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      dragElastic={0.5}
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.7 }}
        type={type}
        onClick={onClick}
        className={`${className} flex border p-2  rounded-md font-semibold transition duration-300`}
      >
        {btnicon}
        {text}
        {endicon}
      </motion.button>
    </motion.div>
  );
};

export default Button;
