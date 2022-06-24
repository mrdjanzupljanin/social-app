import React from "react";
import { motion } from "framer-motion";
import classes from "./Login.module.css";
import logo from "../images/logo.png";
import {Link} from 'react-router-dom'

const Login = () => {
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
            <h1>Log in to your Account <span className={classes.dot}>.</span></h1>
         <div> <input className={classes.input} placeholder='Login'/></div>
          <div><input className={classes.input} placeholder='Password'/></div>
          <div className={classes.forgot}>Forgot Password?</div>
          <button className={classes.login_btn}>Log In</button>
          <hr className={classes.hr}></hr>
          <div className={classes.already}>Don't have an account? <a href="/register" className={classes.dot}>Register?</a></div>
          
        </div>
      </div>
   
    </motion.div>
  );
};

export default Login;
