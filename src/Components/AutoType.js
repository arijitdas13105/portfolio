import { TypeAnimation } from "react-type-animation";
import './AutoType.css'
const AutoType = () => {
  return (
    <>
    
   
    <TypeAnimation   style={{ whiteSpace: 'pre-line', height: '195px',fontSize:'20px' ,display: 'block' }}

    //   splitter={(str) => str.split(/(?= )/)} // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
      sequence={[
        // `Hi,I am Arijit Das\nLine Two\nLine Three\nLine Four\nLine Five`
        "Hi,I am Arijit Das, Full Stack Developer & final year student pursuing a combined degree in Information Technology and MBA from IIIT Gwalior...",
      ]}
    //   speed={{ type: "keyStrokeDelayInMs", value: 150 }}
    speed={150}
    cursor={false} // omit the default css typing animation class

      omitDeletionAnimation={true} // Disable deletion animation
      // style={{ fontSize: "1em", display: "block", minHeight: "200px" }}
      
    />

</>
  );
};

export default AutoType;




// import { TypeAnimation } from "react-type-animation";
// import React from "react";

// const AutoType = () => {
//   const sequences = [
//     { text: "Hi, I am Arijit Das", fontSize: "24px" },
//     { text: "Line Two", fontSize: "18px" },
//     { text: "Line Three", fontSize: "16px" },
//     { text: "Line Four", fontSize: "14px" },
//     { text: "Line Five", fontSize: "12px" },
//   ];

//   return (
//     <div>
//       {sequences.map((seq, index) => (
//         <TypeAnimation
//           key={index}
//           style={{ whiteSpace: 'pre-line', fontSize: seq.fontSize, display: 'block' }}
//           sequence={[seq.text]}
//           speed={150}
//           omitDeletionAnimation={true}
//           repeat={false}
//         />
//       ))}
//     </div>
//   );
// };

// export default AutoType;

