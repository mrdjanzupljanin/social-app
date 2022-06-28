import React from "react";

import PostCard from "../Layout/PostCard";
import MotionDiv from "../Layout/MotionDiv";
import Navbar from "../Layout/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <MotionDiv>
        <PostCard />
      </MotionDiv>
    </>
  );
};

export default Home;
