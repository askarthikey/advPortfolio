import React from "react";
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#home">HOME</a>
      <a href="#about">ABOUT</a>
      <a href="#education">EDUCATION</a>
      <a href="#projects">PROJECTS</a>
      <a href="#certifications">CERTIFICATIONS</a>
      <a href="#contact">CONTACT</a>
    </div>
  );
};

export default Navbar;
