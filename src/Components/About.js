import React from "react";
import { Link } from "react-scroll";

import "./About.css";
import { images } from "./images";
import AutoType from "./AutoType";
import "./AutoType.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faUniregistry,
} from "@fortawesome/free-brands-svg-icons";
import GraphemeSplitterComponent from "./GraphemeSplitterComponent";

const About = () => {
  return (
    <div className="about-container">
      <div className="image-about">
        {/* <img src={images.me} className="my-photo" /> */}
        <img src='https://ucarecdn.com/ea2bf220-ab12-4d8b-91e6-27b075338453/-/preview/816x1000/' className="my-photo" />
        {/* <img src={images.mee} className="my-photo" /> */}
      
       

      </div>

      <div className="decription-about">
        {/* <p className="BBB">
          Hi,I am Arijit Das, Full Stack Developer & final year student pursuing a combined degree in
          Information Technology and MBA from IIIT Gwalior. <br />
        </p> */}
        <button
          className="btn"
          type="button"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1DihdNwjYC4bKW2e1g9Bk9VPNzxVFt8yd/view?usp=drive_link"
            );
          }}
        >
          <strong>Resume</strong>
          <div id="container-stars">
            <div id="stars"></div>
          </div>

          <div id="glow">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </button>
        <AutoType />

        {/* <p className="RRR">
          <h1>Hello, I am Arijit <br /></h1>
          <span>Full stack Developer || student @IIIT Gwalior</span>
          
        </p> */}
      </div>
    </div>
  );
};

export default About;
