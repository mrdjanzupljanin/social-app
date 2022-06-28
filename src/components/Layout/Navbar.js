import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles/CommonStyles.module.css";
import { HiLogout } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav>
      {" "}
      <Link className="link" to="/">
        AsembleAdv.
      </Link>
      <div></div>
      <div>
        <Link to="/addpost">
          {" "}
          <button className={classes.add_btn}>+ Add New</button>
        </Link>
        <button className={classes.logout_app}>
          <HiLogout className={classes.logout_icon} />
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
