import React, { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db, auth } from "../../firebase-config";
import PostCard from "../Layout/PostCard";
import MotionDiv from "../Layout/MotionDiv";
import Navbar from "../Layout/Navbar";
import classes from "../styles/CommonStyles.module.css";
import Blocked from "../Layout/Blocked";

const Home = () => {
  const [posts, setPosts] = useState({});
  const [current, setCurrent] = useState({});

  const postsCollectionRef = collection(db, "posts");
  const usersCollectionRef = collection(db, "users");

  const getUser = async () => {
    const profile = query(
      usersCollectionRef,
      where("id", "==", auth.currentUser.uid)
    );
    const querySnapshot = await getDocs(profile);
    querySnapshot.forEach((doc) => setCurrent(doc.data()));
    console.log(current);
  };

  useEffect(() => {
    const getPosts = async () => {
      try {
        onSnapshot(postsCollectionRef, (snapshot) =>
          setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        );
        console.log(posts);
      } catch (error) {
        console.log(error);
      }
    };

    getPosts();
    getUser();
  }, []);

  return (
    <>
      <Navbar />
      <MotionDiv>
        {current.blocked && <Blocked />}
        <div className={classes.center}>
          {" "}
          {posts.length &&
            posts.map((post) => (
              <PostCard post={post} current={current} setCurrent={setCurrent}/>
            ))}
        </div>
      </MotionDiv>
    </>
  );
};

export default Home;
