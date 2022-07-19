import React from "react";
import classes from "../styles/HomePost.module.css";
import MotionDiv from "./MotionDiv";
import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import { auth } from "../../firebase-config";


const Comments = ({ com, setIsModal, deleteComHandler }) => {
  const modalHandler = () => {
    setIsModal(true);
  };

  const twoFuncHandler = () => {
    modalHandler();
    deleteComHandler(com);
  };
  return (
    <MotionDiv>
      <div className={classes.comments}>
        <img
          className={classes.card_avatar}
          src={com?.author && com.author.image}
          alt="pic"
        ></img>

        <div>
          <Link to={`/${com?.author && com.author.id}`}>
            {" "}
            <p>@{com?.author && com.author.username}</p>
          </Link>

          <p className={classes.post_date}>{com?.date && com.date}</p>
          <p>{com?.text && com.text}</p>
          {auth.currentUser.uid === com.author.id && (
            <div>
              <BsFillTrashFill
                onClick={twoFuncHandler}
                className={classes.del_btn}
              />
            </div>
          )}
        </div>
      </div>
    </MotionDiv>
  );
};

export default Comments;
