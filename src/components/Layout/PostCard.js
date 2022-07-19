import React from "react";
import classes from "../styles/CommonStyles.module.css";
import { TiThumbsUp, TiThumbsDown, TiDocumentText } from "react-icons/ti";
import {
  arrayUnion,
  doc,
  setDoc,
  arrayRemove,
  increment,
} from "firebase/firestore";
import { db } from "../../firebase-config";
import { Link } from "react-router-dom";

const PostCard = ({ post, current }) => {
  const likeHandler = async () => {
    const docRef = doc(db, "posts", post.id);
    await setDoc(
      docRef,
      {
        likedBy: arrayUnion(current),
        author: {
          likes: increment(1),
        },
      },
      { merge: true }
    );

    const docRefInsights = doc(db, "insights", post.author.id);
    await setDoc(
      docRefInsights,
      {
        author: {
          likes: increment(1),
          id: post.author.id,
        },
      },
      { merge: true }
    );
  };

  const dislikeHandler = async () => {
    const docRef = doc(db, "posts", post.id);
    await setDoc(
      docRef,
      {
        likedBy: arrayRemove(current),
        author: {
          likes: increment(-1),
        },
      },
      { merge: true }
    );

    const docRefInsights = doc(db, "insights", post.author.id);
    await setDoc(
      docRefInsights,
      {
        author: {
          likes: increment(-1),
          id: post.author.id,
        },
      },
      { merge: true }
    );
  };

  return (
    <div className={classes.card}>
      <div>
        <div className={classes.card_info}>
          <img
            className={classes.card_avatar}
            src={
              post.author.image?.length
                ? post.author.image
                : "https://mpspathology.com/wp-content/uploads/2022/01/Profile-Male.jpg"
            }
          ></img>
          <h4>
            <Link to={`/${post.author.id}`}>
              <b>{post.author.username}</b>
            </Link>
          </h4>
        </div>
        <p className={classes.hash}>
          Accessibillity : {post?.access && post.access}
        </p>
      </div>
      <p className={classes.card_date}>{post.date}</p>
      <p>{post.desc}</p>
      <Link to={`/post/${post.id1}`}>
        <img className={classes.card_image} src={post.image} alt="img" />
      </Link>

      <div className={classes.like_container}>
        <div>
          <TiThumbsUp
            className={classes.icon}
            onClick={likeHandler}
          ></TiThumbsUp>
          <TiThumbsDown className={classes.icon} onClick={dislikeHandler} />
          <TiDocumentText className={classes.icon} />
          <div className={classes.number_likes}>
            <p>
              <span>
                {post.likedBy?.length && (
                  <span className={classes.insight}>{`Liked by: ${
                    post?.likedBy[0] && post.likedBy[0].username
                  }, ${
                    post?.likedBy[1] !== undefined
                      ? post.likedBy[1].username
                      : ""
                  } and ${
                    post.likedBy.length >= 2
                      ? post.likedBy.length - 2
                      : post.likedBy.length - 1
                  } others.`}</span>
                )}
              </span>
            </p>
          </div>
        </div>
        <div>
          <p className={classes.card_place}>Place Name({post.place})</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
