//Hero.js

import React, { useState, useEffect } from "react";
import { Link, Element } from "react-scroll";

import About from "./About";
import Experience from "./Experience";
import Academics from "./Academics";
import Projects from "./Projects";

import "./Hero.css";
import Main from "./Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import RandomTextEffect from "./RandomTextEffect";

const Hero = () => {
  // const initialText="Arijit das"
  const [activeTab, setActiveTab] = useState("About");
  

  return (
    <div className="Hero-container">
      {/* left side  */}

      <div className="Hero-left">
        <div className="hero-left-details">
        
          <RandomTextEffect initialText="ARIJIT DAS" />
          <p className="SSS" style={{ color: "#8796AB", marginLeft: "15px" }}>
            Student @IIIT Gwalior
          </p>
        </div>

        <nav className="navigation">
          <ul>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={1000}
                spy={true}
                activeClass="active"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                smooth={true}
                duration={1500}
                spy={true}
                activeClass="active"
              >
                Experience
              </Link>
            </li>

            <li>
              <Link
                to="skills"
                smooth={true}
                duration={1500}
                spy={true}
                activeClass="active"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={1500}
                spy={true}
                activeClass="active"
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hero-icon">
          <a
            href="https://github.com/arijitdas13105?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon-details" />
          </a>
          <a
            href="https://www.linkedin.com/in/arijitdas1310/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon-details" />
          </a>
          <a
            href="https://twitter.com/immortal_ari_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className="icon-details" />
          </a>
          <a
            href="https://www.instagram.com/im_a_r_i/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="fa-solid faInstagram icon-details"
              icon={faInstagram}
            />
          </a>
        </div>
      </div>

      {/* //right side  */}
      <div className="Hero-right">
        <div className="section-container">
          <Element name="about">
            <About />
          </Element>
          <Element name="experience">
            <Experience />
          </Element>
          <Element name="skills">
            <Skills />
          </Element>

          <Element name="projects">
            <Projects />
          </Element>

          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Hero;
