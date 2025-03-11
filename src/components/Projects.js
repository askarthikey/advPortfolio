import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./Projects.css";

const projects = [
  { title: "Xcelifee", desc: "Excel Data Visualization", link: "https://github.com/askarthikey/xcelifiee-repo" },
  { title: "Nest-Notion", desc: "Student Resource Platform", link: "https://github.com/advaith1408/Nest-notion" },
  { title: "Blog Website", desc: "MERN Blog Platform", link: "https://github.com/advaith1408/Blog-APP" },
  { title: "Suma", desc: "Audience Engagement Platform", link: "https://github.com/hanvithSai/suma" },
];

const Projects = () => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  const startScrolling = () => {
    controls.start({ x: ["0%", "-100%"] });
  };

  const pauseScrolling = () => {
    controls.stop();
  };

  return (
    <div id="projects" className="projects">
      <h2>Projects</h2>
      <motion.div 
        className="project-scroll"
        animate={controls}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        onMouseEnter={() => { setIsHovered(true); pauseScrolling(); }}
        onMouseLeave={() => { setIsHovered(false); startScrolling(); }}
      >
        {projects.concat(projects).map((project, index) => (
          <motion.div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
