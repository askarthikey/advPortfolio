import React from "react";
import { motion } from "framer-motion";
import "./Education.css";

const Education = () => {
  return (
    <div id="education" className="education">
      <h2>Education</h2>
      <div className="education-container">
        <motion.div className="edu-card" whileHover={{ scale: 1.05 }}>
          <h3>B.Tech in Computer Science</h3>
          <p>VNR VJIET (2023 - 2027)</p>
          <p>CGPA: 9.10</p>
        </motion.div>
        <motion.div className="edu-card" whileHover={{ scale: 1.05 }}>
          <h3>Intermediate</h3>
          <p>Narayana College (2021 - 2023)</p>
          <p>97.4%</p>
        </motion.div>
        <motion.div className="edu-card" whileHover={{ scale: 1.05 }}>
          <h3>School</h3>
          <p>Sri Chaitanya School (2021)</p>
          <p>GPA: 10.00</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
