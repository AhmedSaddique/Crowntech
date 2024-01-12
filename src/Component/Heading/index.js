import React from 'react'
import { motion } from 'framer-motion';

export const HeadingH1 = ({icon, title,title1,className ,spanclass, initial={ opacity: 0,  y:40 },animate={ opacity: 1, y: 0 }, transition={ duration: 0.8 }}) => {
  return (
   <motion.div initial={initial}
    animate={animate}
    transition={transition}>
      <span className={`xl:text-xl-h1 lg:text-lg-h1 text-md-h1 font-semibold  gap-3 ${className}`}>
        {icon}{title}
        <span className={`${spanclass}`}>
        {title1}
        </span>
      </span>
    </motion.div>
  )
};

export const HeadingH2 = ({icon, title ,className, initial={ opacity: 0,  y:40 },animate={ opacity: 1, y: 0 }, transition={ duration: 0.8 }}) => {
  return (
   <motion.div initial={initial}
    animate={animate}
    transition={transition}>
      <p className={`xl:text-xl-h2 lg:text-lg-h2 text-md-h2 font-semibold  gap-3 ${className}`}>
        {icon}{title}
      </p>
    </motion.div>
  )
};

export const HeadingH3 = ({icon, title ,className, initial={ opacity: 0,  y:40 },animate={ opacity: 1, y: 0 }, transition={ duration: 0.8 }}) => {
  return (
   <motion.div initial={initial}
    animate={animate}
    transition={transition}>
      <p className={`xl:text-xl-h3 lg:text-lg-h3 text-md-h4 font-semibold  gap-3 ${className}`}>
        {icon}{title}
      </p>
    </motion.div>
  )
};
export const HeadingH4 = ({icon, title ,className, initial={ opacity: 0,  y:40 },animate={ opacity: 1, y: 0 }, transition={ duration: 0.8 }   }) => {
  return (
    <motion.div initial={initial}
    animate={animate}
    transition={transition}>
      <p className={`xl:text-xl-h4 lg:text-lg-h4 text-md-h4 font-semibold  gap-3 ${className}`}>
        {icon}{title}
      </p>
    </motion.div>
  )
};
export const HeadingH5 = ({icon, title ,className, initial={ opacity: 0,  y:40 },animate={ opacity: 1, y: 0 }, transition={ duration: 0.8 }}) => {
  return (
   <motion.div initial={initial}
    animate={animate}
    transition={transition}>
      <p className={`xl:text-xl-h5 lg:text-lg-h5 text-md-h5 font-semibold  gap-3 ${className}`}>
        {icon}{title}
      </p>
    </motion.div>
  )
};

export const HeadingH6 = ({icon, title ,className, initial={ opacity: 0,  y:40 },animate={ opacity: 1, y: 0 }, transition={ duration: 0.8 }}) => {
  return (
   <motion.div initial={initial}
    animate={animate}
    transition={transition}>
      <p className={`xl:text-xl-h6 lg:text-lg-h6 text-md-h6 font-semibold  gap-3 ${className}`}>
        {icon}{title}
      </p>
    </motion.div>
  )
};

