//Project.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";

import "./Project.css";
import ProjectContainer from "./ProjectContainer";
import { images } from "./images";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      imageSrc:'https://ucarecdn.com/8d3c059f-6033-4e2f-a16d-9bbbe3cba0f6/-/preview/1000x747/',
      // imageSrc:images.eggSquare,
      // imageSrc:
      //   "https://www.freevector.com/uploads/vector/preview/282/FreeVector-Cracked-Egg-Vector.jpg",
      projectUrl: "https://eggsquare.vercel.app/",
      projectName: "Egg Square",
      description:
      "I designed and deployed a MERN-based egg delivery platform, optimizing user registration, secure payments, real-time notifications, and responsive design, resulting in increased customer satisfaction. Utilized Node.js, Express.js, MongoDB, Razorpay, React, Redux, Axios, and CSS for full-stack development" ,
       technologies: [
        "MongoDB",
        "React",
        "Express",
        "Nodejs",
        "Redux",
        "CSS",
        "Responsive Design",
      ],
    },
    // {
    //   id: 2,
    //   imageSrc:
    //     "https://www.fleetroot.com/wp-content/uploads/2020/08/how-to-create-a-powerful-car-rental-business-website-1.jpg",
    //   projectUrl: "https://rapidcar.vercel.app/",
    //   projectName: "Rapid - Car Rental Platform",
    //   description:
    //     "Developed responsive platform with MongoDB, Express.js, React.js, Node.js. Features: vehicle inventory, user authentication, booking system, payment integration, admin dashboard. Showcased MERN stack expertise, delivering user-friendly car rentals.",
    //   technologies: ["MongoDB", "React", "Express", "Nodejs", "Redux", "Ant Design"],
    // },
    // ,
    {
      id: 3,
      imageSrc:'https://ucarecdn.com/b1be8083-a5ed-46fc-b5fd-ead6a10bea75/-/preview/1000x747/',
      // imageSrc:
      //   "https://www.fleetroot.com/wp-content/uploads/2020/08/how-to-create-a-powerful-car-rental-business-website-1.jpg",
      projectUrl: "https://netflix-gpts-o6dp.vercel.app/",
      projectName: "Netflix-GPT",
      description:
      "Developed NetflixGPT with precision, leveraging React, Firebase, Redux Toolkit, and Tailwind CSS. Seamlessly integrated GPT for personalized movie recommendations, prioritizing meticulous code structure, reusability, and maintainability.Elevating user experience through cutting-edge technology and meticulous development",
      technologies:
       [ "React",
       "Firebase",
       "Redux Toolkit",
       "Tailwind CSS",
       "Responsive Design",],
    },
  ];
  return (
    <>
   
      <h1 className="heading-project">projects</h1>
      {/* <ProjectContainer description="sdds" technologies="d" /> */}
      {
        projectsData.map((project)=>(
         <ProjectContainer 
         key={project.id}
         imageSrc={project.imageSrc}
         projectUrl={project.projectUrl}
         projectName={project.projectName}
         description={project.description}
         technologies={project.technologies}
          />


        ))
      }

    
</>

    
  );
};

export default Projects;
