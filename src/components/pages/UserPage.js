import React from "react";
import classes from "../styles/UserPage.module.css";

import Navbar from "../Layout/Navbar";
import { TiThumbsUp, TiThumbsDown, TiDocumentText } from "react-icons/ti";
import MotionDiv from "../Layout/MotionDiv";

const UserPage = () => {
  return (
    <>
      <Navbar />
      <MotionDiv>
        <div className={classes.profile}>
          <div className={classes.photo_container}>
            <div>
              <img
                className={classes.cover}
                src="https://www.timelinecoverphotomaker.com/sites/default/files/facebook-cover-photos/2013/11/pink-flower-tree-facebook-cover-photo.jpg"
              ></img>
              <div className={classes.profile_info}>
                <img
                  className={classes.profile_picture}
                  src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
                ></img>
                <h4>Marie Alabama</h4>
                <p>@mariealabama22</p>{" "}
              </div>
            </div>

            <div className={classes.two_rows}>
              <div className={classes.information}>
                <div className={classes.information_content}>
                  <h4>User Information</h4>
                  <p>johnameric@gmail.com</p>
                  <p>User</p>
                  <p>12/06/96</p>
                </div>
              </div>
              <div className={classes.information}>
                <div className={classes.likes_content}>
                  <p>Likes</p>
                  <h2>23</h2>
                  <p>Comments</p> <h2>23</h2>
                  <p>Posts</p>
                  <h2>23</h2>
                </div>
              </div>
            </div>
            <div class={classes.card}>
              <div>
                <div className={classes.card_info}>
                  <img
                    className={classes.card_avatar}
                    src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427"
                  ></img>
                  <h4>
                    <b>John Doe</b>
                  </h4>
                </div>
                <p className={classes.hash}>Accessibillity : None</p>
              </div>
              <p className={classes.card_date}>{Date()}</p>
              <p>This lovely place. I fell in love with it.</p>
              <img
                className={classes.card_image}
                src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg"
                alt="Avatar"
              />
              <div className={classes.like_container}>
                <div>
                  <TiThumbsUp className={classes.icon} />{" "}
                  <TiThumbsDown className={classes.icon} />{" "}
                  <TiDocumentText className={classes.icon} />
                </div>{" "}
                <div>
                  <p className={classes.card_place}>Place Name(Place)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionDiv>
    </>
  );
};

export default UserPage;
