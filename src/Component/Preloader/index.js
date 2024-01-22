import React from "react";
import { motion } from "framer-motion";
import techarrow from "../../../public/assets/images/techarrow.svg";
import techcircle from "../../../public/assets/images/techcircle.svg";
import techleft from "../../../public/assets/images/techleft.svg";
import techright from "../../../public/assets/images/techright.svg";
import techname from "../../../public/assets/images/techname.svg";

import bird from "../../../public/assets/images/bird.svg";
import circle from "../../../public/assets/images/circle.svg";
import travokey from "../../../public/assets/images/Travokey.svg"; // Replace with your actual asset path
import bgbird from "../../../public/assets/images/bird-back.svg"; // Replace with your actual asset path
import Image from "next/image";

const firstImageVariants = {
  initial: { y: "-100vw", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { opacity: 0, transition: { duration: .6 } },
};

const secondImageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: .7 } },
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
const fifthImageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 1.1 } },
};

const transition = {
  duration: 1,
  ease: "easeInOut",
};
const Preloader = () => (
  <div className="preloader bg-white  " style={{ position: "relative" }}>
    <motion.div
      variants={firstImageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ ...transition, delay: 0 }}
      style={{ position: "absolute", zIndex: 5 }}
    >
      <Image
        src={techarrow}
        alt="Bird Image"
        width={200}
        height={200}
        className="image w-40 h-40 mb-24 ml-2 "
      />
    </motion.div>
    <motion.div
      variants={secondImageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1, delay: 1 }}
      style={{ position: "absolute", zIndex: 2 }}
    >
      <Image
        src={techcircle}
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
      transition={{ ...transition, delay: 1.3 }}
      style={{ position: "absolute", zIndex: 3 }}
    >
      <Image
        src={techright}
        alt="Third Image"
        width={200}
        height={200}
        className="image ml-3 w-72 h-72 mb-2"
      />
    </motion.div>

    <motion.div
      variants={fourthImageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ ...transition, delay: 1.5 }}
      style={{ position: "absolute", zIndex: 4 }}
    >
      <Image
        src={techleft}
        alt="Fourth Image"
        width={200}
        height={200}
        className="image w-40 h-40  mb-[3.8rem] mr-[6.5rem]"
      />

    </motion.div>
    <motion.div
      variants={fifthImageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ ...transition, delay: 1.5 }}
      style={{ position: "absolute", zIndex: 4 }}
    >
      <Image
        src={techname}
        alt="Fourth Image"
        width={200}
        height={200}
        className="image  mb-80"
      />

    </motion.div>
    <motion.div
      variants={fifthImageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ ...transition, delay: 0.3 }}
      style={{ position: "absolute", zIndex: 1 }}
      className="image w-80 h-80   rounded-full bg-white"
    >
     

    </motion.div>
  </div>
);

export default Preloader;
