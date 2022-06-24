import React from "react";
import classes from "../CommonStyles.module.css";

const Filter = (props) => {
  return (
    <div className={classes.filter}>
      {" "}
      <div className={classes.filter_container}>
        <p>{`${props.text1}`}</p>
        <p>{`${props.text2}`}</p>
        <p>{`${props.text3}`}</p>
      </div>
    </div>
  );
};

export default Filter;
