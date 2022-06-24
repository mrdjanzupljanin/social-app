import React from "react";
import classes from "./HomePost.module.css";
import { TiThumbsUp, TiThumbsDown, TiDocumentText } from "react-icons/ti";
import { motion } from "framer-motion";

const Post = () => {
  return (
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
        <p className={classes.post_hash}>Accessibillity : None</p>
        <img
          className={classes.post_image}
          src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg"
        />
        <div className={classes.like_container}>
          <div>
            <TiThumbsUp className={classes.icon} />{" "}
            <TiThumbsDown className={classes.icon} />{" "}
            <TiDocumentText className={classes.icon} />
          </div>{" "}
          <div>
            <p className={classes.card_place}>Place Name(Place)</p>
          </div>
        </div>
      </div>

      <div className={classes.right_container}>
        <div className={classes.post_content}>
          <div className={classes.post_info}>
            <img
              className={classes.card_avatar}
              src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427"
            ></img>
            <h4>
              <b>John Doe</b>
            </h4>
          </div>
          <div>
            {" "}
            <p className={classes.post_date}>{Date()}</p>
            <p>Wonderful place</p>
          </div>
          <div className={classes.textarea}>
            <img
              className={classes.card_avatar}
              src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427"
            ></img>
            <textarea placeholder="Write a comment..." />
            <button>Publish</button>
          </div>
        </div>

        <div className={classes.comments}>
          <img
            className={classes.card_avatar}
            src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427"
          ></img>
          <div>
            <p>@MILENKO</p> <p className={classes.post_date}>{Date()}</p>
            <p>
              Place to visit at least once a year. Never had better enjoyment
              and relaxation in my life. 5/5{" "}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Post;
