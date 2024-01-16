import React from "react";
import { motion } from "framer-motion";
import bird from "../../../public/assets/images/bird.svg";
import circle from "../../../public/assets/images/circle.svg";
import travokey from "../../../public/assets/images/Travokey.svg"; // Replace with your actual asset path
import bgbird from "../../../public/assets/images/bird-back.svg"; // Replace with your actual asset path
import Image from "next/image";

const firstImageVariants = {
  initial: { x: "-100vw", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { opacity: 0 },
};

const secondImageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: .5 } },
};

const thirdImageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: .9 } },
};

const fourthImageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 1.2 } },
};

const transition = {
  duration: 1,
  ease: "easeInOut",
};
const Preloader = () => (
  <div className="preloader bg-primary-blue500 dark:bg-primary-white animate-pulse " style={{ position: "relative" }}>
    <motion.div
      variants={firstImageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ ...transition, delay: 0 }}
      style={{ position: "absolute", zIndex: 5 }}
    >
      <Image
        src={bird}
        alt="Bird Image"
        width={200}
        height={200}
        className="image w-28 h-28 mb-20 mr-4"
      />
    </motion.div>
    <motion.div
      variants={secondImageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1, delay: .6 }}
      style={{ position: "absolute", zIndex: 1 }}
    >
      <Image
        src={circle}
        alt="Circle Image"
        width={200}
        height={200}
        className="image w-80 h-80"
      />
    </motion.div>
    <motion.div
      variants={thirdImageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ ...transition, delay: 1 }}
      style={{ position: "absolute", zIndex: 2 }}
    >
      <Image
        src={travokey}
        alt="Third Image"
        width={200}
        height={200}
        className="image mt-14"
      />
    </motion.div>

    <motion.div
      variants={fourthImageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ ...transition, delay: 1.2 }}
      style={{ position: "absolute", zIndex: 3 }}
    >
      <Image
        src={bgbird}
        alt="Fourth Image"
        width={200}
        height={200}
        className="image w-64 h-64 mb-16 mr-3"
      />
    </motion.div>
  </div>
);

export default Preloader;
