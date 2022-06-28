import React from "react";
import classes from "../styles/CommonStyles.module.css";
import { TiThumbsUp, TiThumbsDown, TiDocumentText } from "react-icons/ti";

const PostCard = () => {
  return (
    <div className={classes.card}>
      <div>
        <div className={classes.card_info}>
          <img
            className={classes.card_avatar}
            src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427"
          ></img>
          <h4>
            <b>John Doe</b>
          </h4>
        </div>
        <p className={classes.hash}>Accessibillity : None</p>
      </div>
      <p className={classes.card_date}>{Date()}</p>
      <p>This lovely place. I fell in love with it.</p>
      <img
        className={classes.card_image}
        src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg"
        alt="Avatar"
      />
      <div className={classes.like_container}>
        <div>
          <TiThumbsUp className={classes.icon}></TiThumbsUp>
          <TiThumbsDown className={classes.icon} />{" "}
          <TiDocumentText className={classes.icon} />
          <div className={classes.number_likes}>
            <p>
              <span>0</span>
              <span>0</span>
              <span>0</span>
            </p>
          </div>
        </div>{" "}
        <div>
          <p className={classes.card_place}>Place Name(Place)</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
