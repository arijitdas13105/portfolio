// import React from "react";
// import Hero from "./Hero";
// import { Element } from "react-scroll";

// const Main = () => {
//   return (
//     <div>
//       <Hero />
//     </div>
//   );
// };

// export default Main;





// Main.js
import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import { Element } from "react-scroll";
import Loading from "./Loading";

const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="main-container">
          <Hero />
          {/* <Loading /> */}
          {/* Other components and content */}
        </div>
      )}
    </>
  );
};

export default Main;
