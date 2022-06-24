import React from "react";
import { motion } from "framer-motion";

const MotionDiv = (props) => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{
        width: "auto",
        opacity: 1,
        textAlign: "center",
        transition: { duration: 0.5 },
      }}
      exit={{ x: window.innerWidth, opacity: 0, transition: { duration: 0.5 } }}
    >
      {props.children}
    </motion.div>
  );
};

export default MotionDiv;
