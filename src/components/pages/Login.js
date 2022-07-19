import React, { useContext } from "react";
import classes from "../styles/LoginRegister.module.css";
import MotionDiv from "../Layout/MotionDiv";
import authContext from "../../store/context";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../firebase-config";

const Login = () => {
  const navigate = useNavigate();
  const ctx = useContext(authContext);
  const onSubmit = async (values, actions) => {
    const user = await signInWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    localStorage.setItem("isAuth", true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    console.log(auth.currentUser.email);
    ctx.setIsAuth(true);
    navigate("/");
  };
  const { values, handleSubmit, isSubmitting, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
  });

  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  return (
    <MotionDiv>
      <div className={classes.overlay}>
        <div className={classes.logo}></div>
        <div className={classes.login_form}>
          <h1>
            Log in to your Account <span className={classes.dot}>.</span>
          </h1>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div>
              <input
                className={classes.input}
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className={classes.input}
                type="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
              />
            </div>
            <div className={classes.forgot}>
              <p
                className={classes.p_forgot}
                onClick={() => sendPasswordReset(values.email)}
              >
                Forgot Password?
              </p>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={
                isSubmitting ? classes.btn_disabled : classes.login_btn
              }
            >
              Log In
            </button>
          </form>

          <hr className={classes.hr}></hr>
          <div className={classes.already}>
            Don't have an account?
            <Link to="/register" className={classes.dot}>
              Register?
            </Link>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default Login;
