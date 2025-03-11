import React, { useState } from "react";
import "./Certifications.css";

const certificates = [
  {
    title: "Competitive Programming Summer Camp",
    image: "https://i.postimg.cc/kgz7j1kJ/Screenshot-2025-03-11-201827.png",
    link: "https://drive.google.com/file/d/1CzxXb5gCsIsP6KPlMTJW_EIeAJLwiftt/view?usp=sharing",
  },
  {
    title: "NPTEL - Programming in Modern C++",
    image: "https://i.postimg.cc/CKknd8hL/Screenshot-2025-03-11-202805.png",
    link: "https://drive.google.com/file/d/1wMta3PBnUh-QhS-j3WKDBI_FLdyaylW8/view?usp=sharing",
  },
  {
    title: "Cyber Suraksha Course",
    image: "https://i.postimg.cc/mrg6s77J/Screenshot-2025-03-11-202909.png",
    link: "https://drive.google.com/file/d/1qy3MJ3AlqTLKQ0NvhClFK03_e8U4od2P/view?usp=sharing",
  },
];

const Certifications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <div id="certifications" className="certifications">
      <h2>Certifications</h2>
      <div className="certificates-container">
        {certificates.map((cert, index) => (
          <div 
            key={index} 
            className="certificate-card"
            onClick={() => setSelectedCertificate(cert.link)}
          >
            <img src={cert.image} alt={cert.title} />
            <h3>{cert.title}</h3>
          </div>
        ))}
      </div>
      {selectedCertificate && (
        <div className="certificate-popup">
          <button onClick={() => setSelectedCertificate(null)}>Close</button>
          <iframe src={selectedCertificate} title="Certificate" width="100%" height="500px"></iframe>
        </div>
      )}
    </div>
  );
};

export default Certifications;
