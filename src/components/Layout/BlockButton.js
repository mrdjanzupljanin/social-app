import React from "react";
import classes from "../styles/AdminPage.module.css";
import { FiEyeOff, FiEye } from "react-icons/fi";

const BlockButton = ({ blockHandler, user, unblockHandler }) => {
  return (
    <button
      onClick={
        user.blocked === false
          ? () => blockHandler(user)
          : () => unblockHandler(user)
      }
      className={classes.admin_block_icon}
    >
      {user.blocked ? <FiEye /> : <FiEyeOff />}{" "}
      {user.blocked ? <p>Unblock</p> : <p>Block</p>}
    </button>
  );
};

export default BlockButton;
