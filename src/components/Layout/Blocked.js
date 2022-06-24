import React from "react";
import classes from "../CommonStyles.module.css";
import { FiFrown, FiXCircle } from "react-icons/fi";
import MotionDiv from "./MotionDiv";

const Blocked = () => {
  return (
    <MotionDiv>
      <div className={classes.error_container}>
        <div className={classes.error_content}>
          <div className={classes.x}>
            <button className={classes.exit_1}>
              <FiXCircle />{" "}
            </button>
          </div>
          <FiFrown className={classes.sad_smile} />
          <div>
            {
              <b>
                <p>
                  Sorry,{<br></br>}your profile is blocked. {<br></br>} Contact
                  the Admin.
                </p>
              </b>
            }
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default Blocked;
