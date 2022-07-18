import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "../styles/CommonStyles.module.css";
import { HiLogout } from "react-icons/hi";
import { auth } from "../../firebase-config";
import authContext from "../../store/context";
import { collection, where, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

const Navbar = () => {
  const [current, setCurrent] = useState({})
  const navigate = useNavigate();
  const ctx = useContext(authContext);
  const usersCollectionRef = collection(db, "users");
  useEffect(() => {
    const getCurrentUser = async () => {
      const q = query(
        usersCollectionRef,
        where("id", "==", auth.currentUser.uid)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => setCurrent(doc.data()));
      console.log(current.admin)
    };
    getCurrentUser()
  }, [])
  const logoutHandler = async () => {
    await auth.signOut().then(() => {
      localStorage.setItem("isAuth", false);
      ctx.setIsAuth(false);
      console.log("logged out");
      navigate("/login");
    });
  };
  return (
    <nav>
      <Link className="link" to="/">
        AsembleAdv.
      </Link>
      <div></div>
      <div>
       {current?.admin && <Link to='/admin'><button className={classes.add_btn}>Admin</button></Link>}
       {auth?.currentUser ? <Link to="/addpost">
          {" "}
          <button className={classes.add_btn}>+ Add New</button>
        </Link> : <Link to="/login">
          {" "}
          <button className={classes.add_btn}>Login</button>
        </Link>  } 
        {auth.currentUser && (
          <button className={classes.logout_app} onClick={logoutHandler}>
            <HiLogout className={classes.logout_icon} />
            Log Out
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
