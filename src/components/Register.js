import React from "react";
import { motion } from "framer-motion";
import classes from "./Login.module.css";
import logo from "../images/logo.png";

const Register = () => {
  return (
    <motion.div
      className={classes.login_section}
      initial={{ width: 0, opacity: 0 }}
      animate={{
        width: "auto",
        opacity: 1,
        textAlign: "center",
        transition: { duration: 0.5 },
      }}
      exit={{ x: window.innerWidth, opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className={classes.overlay}>
        <div className={classes.logo}>
          <img src={logo} />
        </div>
        <div className={classes.login_form}>
          <h1>
            Create new Account <span className={classes.dot}>.</span>
          </h1>
          <div className={classes.two_rows}>
            {" "}
            <input className={classes.input} placeholder="First Name" />{" "}
            <input className={classes.input} placeholder="Last Name" />{" "}
          </div>
          <div>
            <input className={classes.input} placeholder="Username" />
          </div>
          <div>
            <input className={classes.input} placeholder="Email" />
          </div>
          <div>
            <input className={classes.input} placeholder="Password" />
          </div>
          <div>
            <input className={classes.input} placeholder="Confirm Password" />
          </div>
          <div>
            <input className={classes.input} placeholder="Date of Birth" />
          </div>
          <div className={classes.two_rows_checkbox}>
            {" "}
            <input
              type="checkbox"
              className={classes.check}
              name="user"
              value="User"
            />{" "}
            <label htmlFor="user">User</label>{" "}
            <input
              className={classes.check}
              type="checkbox"
              name="admin"
              value="Admin"
            />
            <label htmlFor="admin">Admin</label>
          </div>
          <button className={classes.login_btn}>Sign Up</button>
          <hr className={classes.hr}></hr>
          <div className={classes.already}>
            Already have an Account?
            <a href="/register" className={classes.dot}>
             {` Log In!`}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Register;
