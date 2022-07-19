import React from "react";
import classes from "../styles/motionDiv.module.css";
import { motion } from "framer-motion";

const MotionDiv = ({ children }) => {
  return (
    <motion.div
      className={classes.container}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
