import React from "react";
import classes from "../styles/CommonStyles.module.css";
import MotionDiv from "../Layout/MotionDiv";
import Navbar from "../Layout/Navbar";
import { useFormik } from "formik";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { postSchema } from "../../schemas/register-schema";

const AddPost = () => {
  const usersCollectionRef = collection(db, "posts");
  const onSubmit = async (values, actions) => {
    await addDoc(usersCollectionRef, {
      name: values.name,
      place: values.place,
      access: values.access,
      type: values.type,
      desc: values.desc,
    });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };
  const { values, isSubmitting, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      place: "",
      access: "",
      type: "",
      desc: "",
    },
    validationSchema: postSchema,
    onSubmit,
  });

  return (
    <>
      <Navbar />{" "}
      <MotionDiv>
        <div className={classes.add}>
          {" "}
          <div className={classes.add_container}>
            <div>
              <img
                className={classes.add_image}
                src="https://images.theconversation.com/files/137600/original/image-20160913-4948-6fyxz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop"
              ></img>{" "}
              <div className={classes.centered}>{`NEW POST`}</div>
            </div>
            <div className={classes.login_form}>
              <h1>
                Add New Post <span className={classes.dot}>.</span>
              </h1>
              <form onSubmit={handleSubmit} autoComplete="off">
                {" "}
                <div className={classes.two_rows}>
                  {" "}
                  <input
                    className={classes.input}
                    name="name"
                    placeholder="Name"
                    value={values.name}
                    onChange={handleChange}
                  />
                  <input
                    className={classes.input}
                    name="place"
                    placeholder="Place"
                    value={values.place}
                    onChange={handleChange}
                  />{" "}
                </div>
                <div>
                  <input
                    className={classes.input}
                    name="access"
                    placeholder="Accessibillity"
                    value={values.access}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    className={classes.input}
                    name="type"
                    placeholder="Type"
                    value={values.type}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    name="desc"
                    className={classes.input}
                    placeholder="Add description..."
                    value={values.desc}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={
                    isSubmitting ? classes.btn_disabled : classes.publish_btn
                  }
                >
                  Publish
                </button>
                <button className={classes.cancel_btn}>Discard</button>
              </form>
            </div>
          </div>
        </div>
      </MotionDiv>
    </>
  );
};

export default AddPost;
