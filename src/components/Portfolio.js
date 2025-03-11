import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <motion.div 
      id="portfolio"
      className="portfolio"
      initial={{ opacity: 0, x: 100 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 1 }}
    >
      <h2>My Portfolio</h2>
      <div className="gallery">
        <img src="https://www.w3schools.com/w3images/rocks.jpg" alt="Portfolio" />
        <img src="https://www.w3schools.com/w3images/wedding.jpg" alt="Portfolio" />
      </div>
    </motion.div>
  );
};

export default Portfolio;
