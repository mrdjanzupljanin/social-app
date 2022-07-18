import React, { useEffect, useState } from "react";
import classes from "../styles/AdminPage.module.css";
import { getDocs, collection, onSnapshot, doc, query, where } from "firebase/firestore";
import { db } from "../../firebase-config";
import Navbar from "../Layout/Navbar";
import { BsListOl } from "react-icons/bs";
import Filter from "../Layout/Filter";
import BlockButton from "../Layout/BlockButton";
import { setDoc } from "firebase/firestore";


const AdminPage = () => {
  const [users, setUsers] = useState({});
  const [filter, setFilter] = useState(false);

  const texts = ["Date", "Birthday", "Name"];

  const usersCollectionRef = collection(db, "users");
  const q = query(usersCollectionRef, where("admin", '==', false))
  const filterHandler = () => {
    setFilter(!filter);
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        onSnapshot(q, (snapshot) =>
        setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
    
        console.log(users);
      } catch (error) {
        console.log(error);
      }
    };
    
    getUsers();
  }, []);


    const blockHandler = async(user) => {
      const userRef =  doc(db, "users", user.id);
      await setDoc(
        userRef,
        {
          blocked: true
        },
        { merge: true }
      )
    }

    const unblockHandler = async(user) => {
      const userRef =  doc(db, "users", user.id);
      await setDoc(
        userRef,
        {
          blocked: false
        },
        { merge: true }
      )
    }

  return (
    <>
      <Navbar />
      <div className={classes.admin_container}>
        <div className={classes.two_rows}>
          <h2>
            <span className={classes.green_span}>Good day</span>, Admin
          </h2>
          <div></div>
          <h2>
            Filter
            <BsListOl onClick={filterHandler} className={classes.filter_icon} />
            {filter && <Filter texts={texts} />}
          </h2>
        </div>

        <div className={classes.admin_content}>
          {users.length && users.map((user) => (
            <div className={classes.user_row}>
              <img
                className={classes.admin_avatar}
                src={user.image}
              ></img>
              <p>
               { `${user.lastName} ${user.firstName}`}
              </p>{" "}
              <p>{user.username}</p> <p>{user.email}</p> <p>{user.birthDay}</p>{" "}
              <p>User</p>
            <BlockButton unblockHandler={unblockHandler} blockHandler={blockHandler} user={user} />
            </div>
          ))}
        </div>
      </div>
      ;
    </>
  );
};

export default AdminPage;
