import React from "react";
import "./Experience.css";
import { Element } from "react-scroll";

const Experience = () => {
  return (
    <>
     <h1 className="text">Experience</h1>
    <div className="experience-container">
     
      <div className="time-frame">
        <p>Aug, 2022 - Oct, 2022</p>
      </div>
      <div className="work-details">
        <div className="work-description">
          <h1>Sehr Technologies</h1>
          <p className="role" style={{textDecoration:"underline",marginBottom:"10px"}}>Full Stack Developer</p>
          <p>
            <ul className="job-desc">
              <li >
                Created custom REST API (Node.js, MongoDB) integrated with
                frontend to meet business needs.
              </li>
              <li>
                Developed responsive dashboard and dynamic pages using React.js
                and Core UI for an intuitive user experience.
              </li>
            </ul>
          </p>
        </div>
        <div className="work-technologies"></div>
      </div>
    </div>
    </>
  );
};

export default Experience;
