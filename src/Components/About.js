import React from "react";
import { Link } from "react-scroll";

import "./About.css";
import { images } from "./images";
import AutoType from "./AutoType";
import "./AutoType.css";

import GraphemeSplitterComponent from "./GraphemeSplitterComponent";

const About = () => {
  return (
    <div className="about-container">
      <div className="image-about">
        <img src={images.me} className="my-photo" />
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
              "https://drive.google.com/file/d/1FnjfhPU9Ay75JVuZwdcZc63hkceWpDBE/view?usp=sharing"
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
