import React from "react";

import Navbar from "../Layout/Navbar";
import classes from "../styles/HomePost.module.css";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { TiThumbsUp, TiThumbsDown, TiDocumentText } from "react-icons/ti";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  setDoc,
  increment,
} from "firebase/firestore";
import { db } from "../../firebase-config";
import { auth } from "../../firebase-config";
import Comments from "../Layout/Comments";
import DeleteComment from "../Layout/DeleteComment";

const Post = () => {
  const [postsInfo, setPostsInfo] = useState({});
  const [current, setCurrent] = useState({});
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState({});
  const { postId } = useParams();
  const [isModal, setIsModal] = useState(false);
  const [delCom, setDelCom] = useState({});
  const [insights, setInsights] = useState({});

  const postsCollectionRef = collection(db, "posts");
  const usersCollectionRef = collection(db, "users");
  const commentsCollectionRef = collection(db, "comments");
  const insightsCollectionRef = collection(db, "insights");
  let todayDate = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    const getPost = async () => {
      const profile = query(postsCollectionRef, where("id1", "==", postId));
      const querySnapshot = await getDocs(profile);
      querySnapshot.forEach((doc) => setPostsInfo(doc.data()));

      //setPostsInfo(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    const getCurrentUser = async () => {
      const q = query(
        usersCollectionRef,
        where("id", "==", auth.currentUser.uid)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => setCurrent(doc.data()));
    };

    const getComments = async () => {
      const q = query(commentsCollectionRef, where("post.id", "==", postId));
      onSnapshot(q, (snapshot) =>
        setAllComments(snapshot.docs.map((doc) => doc.data()))
      );
    };

    getPost();
    getCurrentUser();
    getComments();
  }, []);



  const commentHandler = async () => {
    await addDoc(commentsCollectionRef, {
      text: comment,
      date: todayDate,
      author: {
        id: current.id,
        username: current.username,
        image: current.image,
       
      },
      post: {
        id: postsInfo.id1,
      },
    });
    console.log(postsInfo.id1);

    const docRef = doc(db, "insights", postsInfo.author.id);
    await setDoc(
      docRef,
      {
        author: {
          comments: increment(1),
          id: postsInfo.author.id
         
        },
      },
      { merge: true }
    )
      .then((docRef) => console.log("success"))
      .catch((error) => console.log(error));
    setComment("");
  };
  const deleteComHandler = async (com) => {
    setDelCom(com);
    console.log(delCom);
    const docRef = doc(db, "insights", postsInfo.author.id);
    await setDoc(
      docRef,
      {
        author: {
          comments: increment(-1),
          id: postsInfo.author.id
          
        },
      },
      { merge: true }
    )
      .then((docRef) => console.log("success"))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.5 },
        }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        className={classes.post_div}
      >
        <div>
          <p className={classes.post_hash}>
            <b>Accessibillity:</b> {postsInfo?.access && postsInfo.access}
          </p>
          <img
            alt="pic"
            className={classes.post_image}
            src={postsInfo?.image && postsInfo.image}
          />
          <div className={classes.like_container}>
            <div>
              <TiThumbsUp className={classes.icon} />{" "}
              <TiThumbsDown className={classes.icon} />{" "}
              <TiDocumentText className={classes.icon} />
            </div>{" "}
            <div>
              <p className={classes.card_place}>
                Place Name({postsInfo?.place && postsInfo.place})
              </p>
            </div>
          </div>
        </div>

        <div className={classes.right_container}>
          <div className={classes.post_content}>
            <div className={classes.post_info}>
              <img
                className={classes.card_avatar}
                alt="pic"
                src={postsInfo?.author && postsInfo.author.image}
              ></img>
              <h4>
                <Link to={`/${postsInfo?.author && postsInfo.author.id}`}>
                  {" "}
                  <b>@{postsInfo.author && postsInfo.author.username}</b>
                </Link>
              </h4>
            </div>
            <div>
              {" "}
              <p className={classes.post_date}>
                {postsInfo?.date && postsInfo.date}
              </p>
              <p>{postsInfo?.desc && postsInfo.desc}</p>
            </div>
            <div className={classes.textarea}>
              <img
                className={classes.card_avatar}
                alt="pic"
                src={current?.image && current.image}
              ></img>
              <textarea
                onChange={(event) => setComment(event.target.value)}
                placeholder="Write a comment..."
                value={comment}
              />
              <button onClick={commentHandler}>Publish</button>
            </div>
          </div>
          <div className={classes.scroll}>
            {" "}
            {allComments?.length &&
              allComments.map((com) => (
                <Comments
                  deleteComHandler={deleteComHandler}
                  setIsModal={setIsModal}
                  com={com}
                />
              ))}
          </div>
        </div>
        {isModal && (
          <DeleteComment
            setIsModal={setIsModal}
            text={"Delete this comment?"}
            delCom={delCom}
          />
        )}
      </motion.div>
    </>
  );
};

export default Post;
