"use client"
import React, { useState, useEffect } from "react";

const Counter = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);
  const increment = (end - start) / (duration * 3000); 

  useEffect(() => {
    let animationFrameId;
    const startTime = Date.now();

    const updateCounter = () => {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime < duration * 1000) {
        setCount(start + increment * elapsedTime);
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
      }
    };

    updateCounter();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [start, end, duration, increment]);

  return <div>{Math.floor(count)}+</div>;
};

export default Counter;
