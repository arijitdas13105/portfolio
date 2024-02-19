import React, { useState } from "react";
import SkillSection from "./SkillSection";
import "./Skills.css";
import Skillsimg from "../images/icons9.png";
import { images } from "./images";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronUp,
  faCircleChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const skills = {
    language: [
      { name: "html", images: images.html },
      { name: "css", images: images.css },
      { name: "JS", images: images.js },
      { name: "C++", images: images.cpp },
      { name: "C", images: images.c },
    ],
    framerwork: [
      { name: "ReactJS", images: images.react },
      { name: "NextJS", images: images.nextjs },
      { name: "NodeJS", images: images.nodejs },
      { name: "ExpressJS", images: images.expressjs },
      { name: "MongoDB", images: images.mongodb },
      { name: "Bootstrap", images: images.bootstrap },
      { name: "TailwindCSS", images: images.tailwindCSS },
    ],
    tools: [
      { name: "Firebase", images: images.firebase },
      { name: "Git", images: images.git },
      { name: "GitHub", images: images.github },
      { name: "Docker", images: images.docker },
      { name: "Postman", images: images.postman },
    ],
  };

  const [languageOpen, setLanguageOpen] = useState(true);
  const [framerworkOpen, setFramerworkOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguageOpen(!languageOpen);
  };

  const toggleFramerwork = () => {
    setFramerworkOpen(!framerworkOpen);
  };

  const toggleTools = () => {
    setToolsOpen(!toolsOpen);
  };
  return (
    <div className="Skillss">
      <h1>Skills</h1>
      <div className="Skills-container">
        {/* //language */}
        <div className={`skills-headline ${framerworkOpen ? "open" : ""}  `}>
          <span className="heading" onClick={toggleFramerwork}>
            framework
            <FontAwesomeIcon
              icon={framerworkOpen ? faCircleChevronDown : faCircleChevronUp}
              // beatFade
              className="updown-icon"
            />
          </span>

          

          {framerworkOpen && (
            <div  className={`skill-list ${framerworkOpen?"open2":""}`}>
              {skills.framerwork.map((skill, index) => (
                <SkillSection
                  key={index}
                  name={skill.name}
                  images={skill.images}
                />
              ))}
            </div>
          )}
        </div>
        <div className={`skills-headline ${languageOpen ? "open" : ""}`}>
          <span className="heading" onClick={toggleLanguage}>
            language
            <FontAwesomeIcon
              icon={languageOpen ? faCircleChevronDown : faCircleChevronUp}
              // beatFade
              className="updown-icon"
            />
          </span>

          {languageOpen && (
            <div  className={`skill-list ${languageOpen?"open2":""}`}>
              {skills.language.map((skill, index) => (
                <SkillSection
                  key={index}
                  name={skill.name}
                  images={skill.images}
                />
              ))}
            </div>
          )}
        </div>
        <div className={`skills-headline ${toolsOpen ? "open" : ""}`}>
          <span className="heading" onClick={toggleTools}>
            Tools
            <FontAwesomeIcon
              icon={toolsOpen ? faCircleChevronDown : faCircleChevronUp}
              className="updown-icon"
            />
          </span>

         

          {toolsOpen && (
            <div className={`skill-list ${toolsOpen?"open2":""}`}>
              {skills.tools.map((skill, i) => (
                <SkillSection key={i} name={skill.name} images={skill.images} />
              ))}
            </div>
          )}
        </div>
        {/* //framework */}
       

        {/* // tools */}

        
      </div>
    </div>
  );
};

export default Skills;
