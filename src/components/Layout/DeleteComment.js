import React from "react";
import classes from "../styles/CommonStyles.module.css";
import MotionDiv from "./MotionDiv";
import { BsQuestionDiamondFill } from "react-icons/bs";

const DeleteComment = ({ text }) => {
  return (
    <MotionDiv>
      <div className={classes.error_container}>
        <div className={classes.error_content}>
          <BsQuestionDiamondFill className={classes.question_mark} />
          <div>
            <p>
              Are you sure you want to{<br></br>} {text}
            </p>
          </div>
          <div className={classes.two_rows}>
            <button className={classes.btn_del_no}>No</button>{" "}
            <button className={classes.btn_del_yes}>Yes</button>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default DeleteComment;
