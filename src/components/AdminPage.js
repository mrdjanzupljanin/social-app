import React from "react";
import classes from "./AdminPage.module.css";
import { BsListOl } from "react-icons/bs";
import { FiEyeOff, FiEye } from "react-icons/fi";

const AdminPage = () => {
  return (
    <div className={classes.admin_container}>
      <div className={classes.two_rows}>
        <h2>
          <span className={classes.green_span}>Good day</span>, Admin
        </h2>{" "}
        <div></div>
        <h2>
          Filter
          <BsListOl className={classes.filter_icon} />
        </h2>
      </div>

      <div className={classes.admin_content}>
        <div className={classes.user_row}>
          <img
            className={classes.admin_avatar}
            src="https://www.therconline.com/wp-content/uploads/2022/05/Does-Facebook-have-the-%E2%80%98New-Profile-Pic-feature-as-app-goes-viral-1.png"
          ></img>
          <p>Serena Lichtenshtainer</p> <p>@serene93</p> <p>giana@gmail.com</p>{" "}
          <p>23/4/2022</p> <p>User</p>
          <button className={classes.admin_block_icon}>
            <FiEye /> <p>Unblock</p>
          </button>
        </div>
        <div className={classes.user_row}>
          <img
            className={classes.admin_avatar}
            src="https://www.therconline.com/wp-content/uploads/2022/05/Does-Facebook-have-the-%E2%80%98New-Profile-Pic-feature-as-app-goes-viral-1.png"
          ></img>
          <p>Serena Lichtenshtainer</p> <p>@serene93</p> <p>giana@gmail.com</p>{" "}
          <p>23/4/2022</p> <p>User</p>{" "}
          <button className={classes.admin_block_icon}>
            <FiEyeOff /> <p>Block</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
