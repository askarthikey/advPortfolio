import React from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <div className="contact-item">
          <FaPhone size={30} />
          <p>+91 9121423809</p>
        </div>
        <div className="contact-item">
          <FaEnvelope size={30} />
          <a href="mailto:kadvaith142005@gmail.com" className="email-link">
            kadvaith142005@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <FaLinkedin size={30} />
          <a href="https://www.linkedin.com/in/advaith-kannayyagari-532001292/" 
             target="_blank" 
             rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        <div className="contact-item">
          <FaGithub size={30} />
          <a href="https://github.com/advaith1408" 
             target="_blank" 
             rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
