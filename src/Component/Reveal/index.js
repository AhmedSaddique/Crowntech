import { motion, useInView, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

const Reveal = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInView = useInView({ once: true });
  const mainControls = useAnimation();
  const slideControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControl.start("visible");
    }
  }, [isInView, mainControls, slideControl]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        style={{ width }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControl}
        transition={{ duration: 0.5, delay: 0.25, ease: "easeIn" }}
        style={{
          position: "absolute",
          right: 0,
          left: 0,
          bottom: 4,
          top: 4,
          background: "blue",
          zIndex: 20,
          width,
        }}
      ></motion.div>
    </div>
  );
};

export default Reveal;
