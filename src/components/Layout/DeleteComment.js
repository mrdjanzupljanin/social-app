import React from "react";
import classes from "../CommonStyles.module.css";
import { BsQuestionDiamondFill } from "react-icons/bs";
import MotionDiv from "./MotionDiv";

const DeleteComment = (props) => {
  return (
    <MotionDiv>
      <div className={classes.error_container}>
        <div className={classes.error_content}>
          <BsQuestionDiamondFill className={classes.question_mark} />
          <div>
            <p>
              Are you sure you want to{<br></br>} {props.text}
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
