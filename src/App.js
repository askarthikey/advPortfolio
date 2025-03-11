import React from "react";
//import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import './styles.css';

function App() {
  return (
    <div className="App">
      {/* <Sidebar /> */}
      <Navbar />
      <main>
        <Home />
        <About />
        <Education />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;
