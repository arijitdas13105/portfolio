import React from "react";
import "./Experience.css";
import { Element } from "react-scroll";




const Experience = () => {
  return (
    <>
      <div style={{ marginTop: '-10px' }} >
        <h1 className="text">Experience</h1>
        <div className="expeience-flex">

        <div className="experience-container">

<div className="time-frame">
  <p>Jun, 2024 - Present</p>
</div>
<div className="work-details">
  <div className="work-description">
    <h1>The Investor Diwan</h1>
    <p className="role" style={{ textDecoration: "underline", marginBottom: "10px" }}>Full Stack Developer</p>
    <p>
      <ul className="job-desc">
        <li >
          Designed and implemented a dynamic UI for the student panel across 15+
          web pages using React, Redux, and Tailwind CSS, ensuring a seamless user
          experience.
        </li>
        <li>
          Developed and integrated scalable backend APIs with Node.js to optimize
          data handling.
        </li>
        <li>
          Drove the project’s success by collaborating with a diverse team,
          consistently delivering milestones 20% ahead of schedule.
        </li>



      </ul>
    </p>
  </div>
  <div className="work-technologies"></div>
</div>
</div>


          <div className="experience-container">

            <div className="time-frame">
              <p>Aug, 2022 - Oct, 2022</p>
            </div>
            <div className="work-details">
              <div className="work-description">
                <h1>Sehr Technologies</h1>
                <p className="role" style={{ textDecoration: "underline", marginBottom: "10px" }}>Full Stack Developer</p>
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


                    {/* <li>
          Streamlined web performance with React.js and Node.js,
          improving load times by 25% and extending user sessions by
          20%.
        </li>
        <li>
          Revitalized client UIs with React.js and Tailwind CSS,
          achieving a 30% boost in customer satisfaction.
        </li>
        <li>
          Proactively participated in the agile development lifecycle,
          from design to deployment, resulting in a fast acceleration
          of product time-to-market.
        </li> */}
                  </ul>
                </p>
              </div>
              <div className="work-technologies"></div>
            </div>
          </div>
         

        </div>

      </div>

    </>
  );
};

export default Experience;
