import React from "react";
import classes from "../styles/CommonStyles.module.css";
import MotionDiv from "./MotionDiv";
import { FiFrown} from "react-icons/fi";

const Blocked = () => {
  return (
    <MotionDiv>
      <div className={classes.overlay_modal} />
      <div className={classes.error_container}>
        <div className={classes.error_content}>
          <div className={classes.x}></div>
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
