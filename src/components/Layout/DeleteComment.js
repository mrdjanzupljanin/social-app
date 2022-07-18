import React from "react";
import classes from "../styles/CommonStyles.module.css";
import MotionDiv from "./MotionDiv";
import { BsQuestionDiamondFill} from "react-icons/bs";
import { collection, deleteDoc, doc, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

const DeleteComment = ({ text, setIsModal, delCom }) => {
 const modalHandler = () => {
  setIsModal(false)
 
 }

 const deleteCommentHandler = async() => {
  const commentsCollectionRef = collection(db, "comments");
  const profile = query(
    commentsCollectionRef,
    where("text", "==", delCom.text)
  )
  const querySnapshot = await getDocs(profile);
  querySnapshot.forEach((doc) => deleteDoc(doc.ref));
  setIsModal(false)
  
  
 }
  return (
    <MotionDiv>
      <div onClick={modalHandler} className={classes.overlay_modal} />
      <div className={classes.error_container}>
        <div className={classes.error_content}>
          <BsQuestionDiamondFill className={classes.question_mark} />
          <div>
            <p>
              Are you sure you want to{<br></br>} {text}
            </p>
          </div>
          <div className={classes.two_rows}>
            <button className={classes.btn_del_no} onClick={modalHandler}>No</button>{" "}
            <button className={classes.btn_del_yes} onClick={deleteCommentHandler}>Yes</button>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default DeleteComment;
