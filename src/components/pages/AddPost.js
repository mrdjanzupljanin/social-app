import React, { useState, useEffect } from "react";
import classes from "../styles/CommonStyles.module.css";
import MotionDiv from "../Layout/MotionDiv";
import Navbar from "../Layout/Navbar";
import { useFormik } from "formik";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  increment,
} from "firebase/firestore";
import { db, auth } from "../../firebase-config";
import { postSchema } from "../../schemas/post-schema";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUser = async () => {
      const profileQuery = query(
        usersCollectionRef,
        where("id", "==", auth.currentUser.uid)
      );
      const querySnapshot = await getDocs(profileQuery);
      querySnapshot.forEach((doc) => setProfile(doc.data()));
      console.log(profile);
    };
    getUser();
  }, []);

  const postNumber = async () => {
    const docRef = doc(db, "users", auth.currentUser.uid);

    await setDoc(
      docRef,
      {
        postsNum: increment(1),
      },
      { merge: true }
    );
  };

  let todayDate = new Date().toISOString().slice(0, 10);

  const postsCollectionRef = collection(db, "posts");
  const onSubmit = async (values, actions) => {
    await addDoc(postsCollectionRef, {
      name: values.name,
      place: values.place,
      access: values.access,
      type: values.type,
      desc: values.desc,
      author: {
        username: profile.username,
        id: profile.id,
        image: profile.image,
      },
      date: todayDate,
      image: values.image,
      likes: 0,
      id1: uuidv4(),
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    navigate("/");
  };
  const { values, isSubmitting, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      place: "",
      access: "",
      type: "",
      desc: "",
      image: "",
    },
    validationSchema: postSchema,
    onSubmit,
  });

  return (
    <>
      <Navbar />
      <MotionDiv>
        <div className={classes.add}>
          <div className={classes.add_container}>
            <div>
              <img
                className={classes.add_image}
                src="https://images.theconversation.com/files/137600/original/image-20160913-4948-6fyxz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop"
              ></img>
              <div className={classes.centered}>{`NEW POST`}</div>
            </div>
            <div className={classes.login_form}>
              <h1>
                Add New Post <span className={classes.dot}>.</span>
              </h1>
              <form onSubmit={handleSubmit} autoComplete="off">
                <div className={classes.two_rows}>
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
                  />
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
                <div>
                  <input
                    name="image"
                    className={classes.input}
                    placeholder="Add Image Url..."
                    value={values.image}
                    onChange={handleChange}
                  />
                </div>
                <button
                  onClick={postNumber}
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
