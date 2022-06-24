import React from "react";
import { motion } from "framer-motion";
import classes from './Home.module.css'
import { TiThumbsUp, TiThumbsDown, TiDocumentText } from "react-icons/ti";


const Home = () => {
  return (
    <motion.div className={classes.home_cards}
      initial={{ width: 0, opacity: 0 }}
      animate={{
        width: "auto",
        opacity: 1,
        textAlign: "center",
        transition: { duration: 0.5 },
      }}
      exit={{ x: window.innerWidth, opacity: 0, transition: { duration: 0.5 } }}
    >
      <div class={classes.card}>
  
  <div>
   <div className={classes.card_info}><img className={classes.card_avatar} src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427" ></img>
    <h4><b>John Doe</b></h4></div> 
    <p className={classes.hash}>Accessibillity : None</p>
  </div>
  <p className={classes.card_date}>{Date()}</p>
  <p>This lovely place. I fell in love with it.</p>
  <img className={classes.card_image} src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg" alt="Avatar" />
  <div className={classes.like_container}>
    <div><TiThumbsUp  className={classes.icon}/>  <TiThumbsDown className={classes.icon} /> <TiDocumentText className={classes.icon}/></div> <div><p className={classes.card_place}>Place Name(Place)</p></div>
  </div>
</div>
    </motion.div>
  );
};

export default Home;
