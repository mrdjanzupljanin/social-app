import React from "react";

import classes from "../styles/CommonStyles.module.css";

const Filter = ({ texts }) => {
  return (
    <div className={classes.filter}>
      <div className={classes.filter_container}>
        {texts.map((text) => (
          <p className={classes.p_filter}>{text}</p>
        ))}
      </div>
    </div>
  );
};

export default Filter;
