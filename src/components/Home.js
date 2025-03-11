import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <motion.div 
      id="home"
      className="home"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h1>I'm <span>Advaith Kannayyagari</span>.</h1>
      <p>Software Engineer | Web Developer | ML Enthusiast</p>
      <motion.img 
        src="https://i.postimg.cc/MTVtYXz9/profilrport.jpg"
        alt="profile"
        className="large-photo"
        whileHover={{ scale: 1.05, rotate: 3 }}
      />
    </motion.div>
  );
};

export default Home;
