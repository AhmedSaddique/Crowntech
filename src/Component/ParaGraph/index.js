import React from "react";
import { motion } from "framer-motion";

export const Para16 = ({
  title,
  icon,
  className,
 
}) => {
  return (
    <div
    >
      <p className={`text-16  gap-2 ${className}`}>
        {icon}
        {title}
      </p>
    </div>
  );
};

export const Para14 = ({
  title,
  icon,
  className,

}) => {
  return (
    <div >
      <p className={`text-14  gap-2 ${className}`}>
        {icon}
        {title}
      </p>
    </div>
  );
};
export const Para12 = ({
  title,
  icon,
  className,
 
}) => {
  return (
    <div >
      <p className={`text-12  gap-2 ${className}`}>
        {icon}
        {title}
      </p>
    </div>
  );
};

export const Para18 = ({
  title,
  icon,
  className,
  endicon
  // initial = { opacity: 0, x: -40 },
  // animate = { opacity: 1, x: 0 },
  // transition = { duration: 0.8 },
}) => {
  return (
    <div
    //  initial={initial} animate={animate} transition={transition}
    >
      <p className={`text-18  gap-2 ${className}`}>
        {icon}
        {title}
        {endicon}
      </p>
    </div>
  );
};
