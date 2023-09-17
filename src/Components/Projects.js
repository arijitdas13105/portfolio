//Project.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";

import "./Project.css";

const Projects = () => {
  return (
    <div className="project-holder">
      <h1 className="heading-project">projects</h1>
      
      <div className="project-container">
        <div className="project-image">
          <img
            src="https://www.freevector.com/uploads/vector/preview/282/FreeVector-Cracked-Egg-Vector.jpg"
            alt="image-project"
          />
        </div>
        <div className="project-details">
          <div className="project-description">
            <a className="linkClass" href="https://eggsquare.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">
              Egg Square 
              <FontAwesomeIcon
                className=" fa-solid fa-wifi fa-spin project-icon "
                icon={faWifi}
              />
            </a>
            <p>
              "For a valued client, I designed and deployed a MERN-based egg
              delivery platform, optimizing user registration, secure payments,
              real-time notifications, and responsive design, resulting in
              increased customer satisfaction. Utilized Node.js, Express.js,
              MongoDB, Razorpay, React, Redux, Axios, and CSS for full-stack
              development
            </p>
          </div>
          <div className="work-technologies">
            <ul>
              <li>MongoDB</li>
              <li>React</li>
              <li>Express</li>
              <li>Nodejs</li>
              <li>Redux</li>
              <li>Redux</li>
              <li>CSS</li>
              <li>Responsive Design</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="project-container">
        <div className="project-image">
          <img
            src="https://www.fleetroot.com/wp-content/uploads/2020/08/how-to-create-a-powerful-car-rental-business-website-1.jpg"
            alt="image-project"
          />
        </div>
        <div className="project-details">
          <div className="project-description">
        

<a className="linkClass" href="https://rapidcar.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">
              Rapid - Car Rental Platform
              <FontAwesomeIcon
                className=" fa-solid fa-wifi fa-spin project-icon "
                icon={faWifi}
              />
            </a>
            {/* <span>Senior enginner</span> */}
            <p>
              Developed responsive platform with MongoDB, Express.js, React.js,
              Node.js. Features: vehicle inventory, user authentication, booking
              system, payment integration, admin dashboard. Showcased MERN stack
              expertise, delivering user-friendly car rentals.
            </p>
          </div>
          <div className="work-technologies">
            <ul>
              <li>MongoDB</li>
              <li>React</li>
              <li>Express</li>
              <li>Nodejs</li>
              <li>Redux</li>
              <li>Ant Design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
