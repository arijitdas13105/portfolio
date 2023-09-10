// // Hero.js

// import React, { useState } from 'react';
// import './HeroCopy.css';

// const Hero = () => {
//   const [activeTab, setActiveTab] = useState('About');

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="hero">
//       <div className="hero-left">
//         <h1>YOUR NAME</h1>
//         <p>A brief description about yourself</p>
//         <nav className="navigation">
//           <ul>
//             <li
//               className={activeTab === 'About' ? 'active' : ''}
//               onClick={() => handleTabClick('About')}
//             >
//               About
//             </li>
//             <li
//               className={activeTab === 'Experience' ? 'active' : ''}
//               onClick={() => handleTabClick('Experience')}
//             >
//               Experience
//             </li>
//             <li
//               className={activeTab === 'Academics' ? 'active' : ''}
//               onClick={() => handleTabClick('Academics')}
//             >
//               Academics
//             </li>
//             <li
//               className={activeTab === 'Projects' ? 'active' : ''}
//               onClick={() => handleTabClick('Projects')}
//             >
//               Projects
//             </li>
//           </ul>
//         </nav>
//       </div>
//       <div className="hero-right">
//         {/* Render the respective page based on the activeTab state */}
//         {activeTab === 'About' && <About />}
//         {activeTab === 'Experience' && <Experience />}
//         {activeTab === 'Academics' && <Academics />}
//         {activeTab === 'Projects' && <Projects />}
//       </div>
//     </div>
//   );
// };

// const About = () => {
//   return <h2>About Page</h2>;
// };

// const Experience = () => {
//   return <h2>Experience Page</h2>;
// };

// const Academics = () => {
//   return <h2>Academics Page</h2>;
// };

// const Projects = () => {
//   return <h2>Projects Page</h2>;
// };

// export default Hero;

























import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import About from "./About";
import Experience from "./Experience";
import Academics from "./Academics";
import Projects from "./Projects";
import "./Hero.css";
import Main from "./Main";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("About");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="Hero-container">
      {/* left side  */}

      <div className="Hero-left">
        <div className="hero-left-details">
          <h1>Arijit Das</h1>
          <p style={{ color: "#8796AB", marginLeft: "15px" }}>
            Student of @IIITM Gwalior
          </p>
        </div>

        <nav className="navigation">
          <ul>
            <li className={activeTab === "About" ? "active" : ""}>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => handleTabClick("About")}
              >
                About
              </Link>
            </li>
            <li
              className={activeTab === "Experience" ? "active" : ""}
              // onClick={() => handleTabClick("Experience")}
            >
              <Link to="experience" spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => handleTabClick("Experience")}>Experience</Link>
            </li>
            {/* <li className={activeTab==='Academics'?'active':''} onClick={()=>handleTabClick('Academics')}>Academics</li> */}
            <li className={activeTab === "Projects" ? "active" : ""}>
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => handleTabClick("Projects")}
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* //right side  */}
      <div className="Hero-right">
        {activeTab === "About" && <About />}
        {activeTab === "Experience" && <Experience />}
        {activeTab === "Academics" && <Academics />}
        {activeTab === "Projects" && <Projects />}
        
      </div>
    </div>
  );
};

export default Hero;





