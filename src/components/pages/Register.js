import React from "react";
import classes from "../styles/LoginRegister.module.css";
import { Link } from "react-router-dom";
import MotionDiv from "../Layout/MotionDiv";
import { useFormik } from "formik";
import { collection, addDoc } from "firebase/firestore";
import { registerSchema } from "../../schemas/register-schema";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase-config";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const usersCollectionRef = collection(db, "users");

  const onSubmit = async (values, actions) => {
    const user = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    await addDoc(usersCollectionRef, {
      firstName: values.firstName,
      lastName: values.lastName,
      username: values.username,
      email: values.email,
      birthDay: values.birthDay,
      id: user.user.uid,
      image: values.image,
      cover: values.cover,
      admin: values.admin,
      blocked: false,
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    navigate("/");
  };
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      birthDay: "",
      user: "",
      admin: false,
      image: "",
      cover: "",
    },
    validationSchema: registerSchema,
    onSubmit,
    validateOnChange: false,
  });

  console.log(errors);

  return (
    <MotionDiv>
      <div className={classes.overlay}>
        <div className={classes.login_form}>
          <h1>
            Create new Account <span className={classes.dot}>.</span>
          </h1>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className={classes.two_rows}>
              <input
                className={
                  errors.firstName && touched.firstName
                    ? classes.error_input
                    : classes.input
                }
                placeholder="First Name"
                name="firstName"
                value={values.firstName}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <input
                className={
                  errors.lastName && touched.lastName
                    ? classes.error_input
                    : classes.input
                }
                placeholder="Last Name"
                name="lastName"
                value={values.lastName}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className={classes.error_msg}>
                {errors.firstName ? errors.firstName : ""}
              </p>
            </div>
            <div>
              <input
                className={
                  errors.username && touched.username
                    ? classes.error_input
                    : classes.input
                }
                placeholder="Username"
                name="username"
                value={values.username}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className={classes.error_msg}>
                {errors.username ? errors.username : ""}
              </p>
            </div>
            <div>
              <input
                className={
                  errors.email && touched.email
                    ? classes.error_input
                    : classes.input
                }
                placeholder="Email"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className={classes.error_msg}>
                {errors.email ? errors.email : ""}
              </p>
            </div>
            <div>
              <input
                className={
                  errors.password && touched.password
                    ? classes.error_input
                    : classes.input
                }
                placeholder="Password"
                name="password"
                type="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className={classes.error_msg}>
                {errors.password ? errors.password : ""}
              </p>
            </div>
            <div>
              <input
                className={
                  errors.confirmPassword && touched.confirmPassword
                    ? classes.error_input
                    : classes.input
                }
                placeholder="Confirm Password"
                name="confirmPassword"
                type="password"
                value={values.confirmPassword}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className={classes.error_msg}>
                {errors.confirmPassword ? errors.confirmPassword : ""}
              </p>
            </div>
            <div>
              <input
                className={
                  errors.birthDay && touched.birthDay
                    ? classes.error_input
                    : classes.input
                }
                placeholder="Date of Birth"
                name="birthDay"
                type="date"
                value={values.birthDay}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className={classes.error_msg}>
                {errors.birthDay ? errors.birthDay : ""}
              </p>
            </div>
            <div>
              <input
                name="image"
                className={classes.input}
                placeholder="Add Avatar Url..."
                value={values.image}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                name="cover"
                className={classes.input}
                placeholder="Add Cover Url..."
                value={values.cover}
                onChange={handleChange}
              />
            </div>
            <div className={classes.two_rows_checkbox}>
              <input
                className={classes.check}
                type="checkbox"
                name="admin"
                value={values.admin === true}
                onChange={handleChange}
              />
              <label htmlFor="admin">Admin</label>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={
                isSubmitting ? classes.btn_disabled : classes.login_btn
              }
            >
              Sign Up
            </button>
          </form>
          <hr className={classes.hr}></hr>
          <div className={classes.already}>
            Already have an Account?
            <Link to="/login" className={classes.dot}>
              {` Log In!`}
            </Link>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default Register;
