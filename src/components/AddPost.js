import React from "react";
import classes from "./CommonStyles.module.css";
import MotionDiv from "./Layout/MotionDiv";

const AddPost = () => {
  return (
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
            <div className={classes.two_rows}>
              {" "}
              <input className={classes.input} placeholder="Name" />{" "}
              <input className={classes.input} placeholder="Place" />{" "}
            </div>
            <div>
              <input className={classes.input} placeholder="Accessibillity" />
            </div>
            <div>
              <input className={classes.input} placeholder="Type" />
            </div>
            <div>
              <input
                className={classes.input}
                placeholder="Add description..."
              />
            </div>

            <button className={classes.publish_btn}>Publish</button>
            <button className={classes.cancel_btn}>Discard</button>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default AddPost;
