//ProjectContainer.js
import React from "react";
import "./Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";

const ProjectContainer = ({
  imageSrc,
  projectUrl,
  projectName,
  description,
  technologies,
}) => {
  return (
    //project-holder =card
    <div className="project-holder">
      <div className="card-inner">
        {/* //front */}
        <div className="card-front">
          <div className="front-project-image">
            <img src={imageSrc} alt="image-project" />

          </div>
          {/* <div className="project-name-overlay">{projectName}</div> */}

        </div>
        {/* //back */}
        {/* //project-container= card back */}
        <div className="project-container">
          <div className="project-image">
            <img src={imageSrc} alt="image-project" />
          </div>
          <div className="project-details">
            <div
              className="project-description"
              onClick={() => {
                window.open(projectUrl, "_blank");
              }}
            >
              <a
                className="linkClass"
                href="https://eggsquare.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {projectName}
                <FontAwesomeIcon
                  className=" fa-solid fa-wifi fa-spin project-icon "
                  icon={faWifi}
                />
              </a>

              {/* <p>
              "For a valued client, I designed and deployed a MERN-based egg
              delivery platform, optimizing user registration, secure payments,
              real-time notifications, and responsive design, resulting in
              increased customer satisfaction. Utilized Node.js, Express.js,
              MongoDB, Razorpay, React, Redux, Axios, and CSS for full-stack
              development
            </p> */}
              <p>{description} </p>
            </div>
            <div className="work-technologies">
              <ul>
                {technologies.map((tech, index) => (
                  <li key={index}> {tech} </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
