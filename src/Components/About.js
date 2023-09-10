import React from "react";
import { Link } from "react-scroll";

import "./About.css";
import { images } from "./images";

const About = () => {
  return (
    <div className="about-container">
      <div className="image-about">
        <img src={images.me} className="my-photo" />
        {/* <img src={images.mee} className="my-photo" /> */}
      </div>

      <div className="decription-about">
        <p className="BBB">
          I am Arijit Das, a final year student pursuing a combined degree in
          Information Technology and MBA from IIIT Gwalior. <br />
        </p>

        <p className="RRR">
          <h1>Hello, I am Arijit <br /></h1>
          <span>Full stack Developer || student @IIIT Gwalior</span>
          
        </p>
      </div>
    </div>
  );
};

export default About;
