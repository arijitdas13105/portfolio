import React from "react";
import "./SkillSection.css";
import icon8 from "../images/icons8.png";
const SkillSection = ({ name, images }) => {
  return (
    <div className="skillContainer">
      <div className="skill-item">
        <span className="skill-logo">
          <img src={images} alt="img-name" />
        </span>
        <span className="skill-name">{name}</span>
      </div>
    </div>
  );
};

export default SkillSection;
