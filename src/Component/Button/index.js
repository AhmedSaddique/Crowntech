import React from "react";
import { motion } from "framer-motion";

const Button = ({ text, onClick, className, btnicon, endicon, type }) => {
  return (
    <motion.div
    
    >
      <motion.button
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
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
