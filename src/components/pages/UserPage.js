import React from "react";
import classes from "../styles/UserPage.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../Layout/Navbar";
import MotionDiv from "../Layout/MotionDiv";
import { auth, db } from "../../firebase-config";
import { collection, query, where, getDocs, doc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import PostCard from "../Layout/PostCard";
import ZoomImage from "../Layout/ZoomImage";

const UserPage = () => {
  let { userId } = useParams();
  const usersCollectionRef = collection(db, "users");
  const [currentUser, setCurrentUser] = useState({});
  const [profile, setProfile] = useState({});
  const [posts, setPosts] = useState({});
  const [insight, setInsight] = useState({});
  const [zoom, setZoom] = useState(false);

  const postsCollectionRef = collection(db, "posts");
  const insightsCollectionRef = collection(db, "insights");

  useEffect(() => {
    const effect = async () => {
      const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
      return unsub;
    };
    const getUser = async () => {
      const profile = query(usersCollectionRef, where("id", "==", userId));
      const querySnapshot = await getDocs(profile);
      querySnapshot.forEach((doc) => setProfile(doc.data()));
    };
    const getPosts = async () => {
      try {
        const q = query(postsCollectionRef, where("author.id", "==", userId));
        const data = await getDocs(q);
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.log(error);
      }
    };
    const getInsights = async () => {
      const q = query(insightsCollectionRef, where("author.id", "==", userId));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => setInsight(doc.data()));
      console.log(insight);
    };

    effect();
    getUser();
    getPosts();
    getInsights();
  }, []);

  const zoomHandler = () => {
    setZoom(true);
  };
  const exitZoom = () => {
    setZoom(false);
  };
  return (
    <>
      <Navbar />
      <MotionDiv>
        <div className={classes.profile}>
          <div className={classes.photo_container}>
            <div>
              <img
                className={classes.cover}
                src={
                  profile?.cover
                    ? profile.cover
                    : "https://www.fil.ion.ucl.ac.uk/wp-content/uploads/2019/05/grey-background.jpg"
                }
                alt="rave"
              ></img>
              <div className={classes.profile_info}>
                <img
                  className={classes.profile_picture}
                  onClick={zoomHandler}
                  src={
                    profile.image?.length
                      ? profile.image
                      : "https://mpspathology.com/wp-content/uploads/2022/01/Profile-Male.jpg"
                  }
                  alt="mio"
                ></img>
                <h4>
                  {profile.firstName} {profile.lastName}
                </h4>
                <p>@{profile.username}</p>{" "}
              </div>
            </div>

            <div className={classes.two_rows}>
              <div className={classes.information}>
                <div className={classes.information_content}>
                  <h4>User Information</h4>
                  <p>{profile.email}</p>
                  <p>User</p>
                  <p>{profile.birthDay}</p>
                </div>
              </div>
              <div className={classes.information}>
                <div className={classes.likes_content}>
                  <p>Likes</p> <h2>{insight?.author && insight.author.likes}</h2>
                   <p>Comments</p> <h2>{insight?.author && insight.author.comments}</h2>
                  <p>Posts</p>
                  <h2>{posts && posts.length}</h2>
                </div>
              </div>
            </div>
            <div>
              {posts?.length && posts.map((post) => <PostCard post={post} />)}
            </div>
          </div>
        </div>
        {zoom && <ZoomImage exitZoom={exitZoom} image={profile.image} />}
      </MotionDiv>
    </>
  );
};

export default UserPage;
