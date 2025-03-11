import React from "react";
import { FaHome, FaUser, FaGraduationCap, FaFolderOpen, FaCertificate, FaEnvelope } from "react-icons/fa";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <img src="https://www.w3schools.com/w3images/avatar_smoke.jpg" alt="Avatar" />
      <a href="#home"><FaHome size={30} /><p>HOME</p></a>
      <a href="#about"><FaUser size={30} /><p>ABOUT</p></a>
      <a href="#education"><FaGraduationCap size={30} /><p>EDUCATION</p></a>
      <a href="#projects"><FaFolderOpen size={30} /><p>PROJECTS</p></a>
      <a href="#certifications"><FaCertificate size={30} /><p>CERTIFICATIONS</p></a>
      <a href="#contact"><FaEnvelope size={30} /><p>CONTACT</p></a>
    </nav>
  );
};

export default Sidebar;
