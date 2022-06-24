import React from "react";
import { motion } from "framer-motion";
import MotionDiv from "./Layout/MotionDiv";
import classes from "./HomePost.module.css";
import PostCard from "./Layout/PostCard";
import { TiThumbsUp, TiThumbsDown, TiDocumentText } from "react-icons/ti";

const Home = () => {
  return (
    <motion.div
      className={classes.home_cards}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <PostCard />
    </motion.div>
  );
};

export default Home;
