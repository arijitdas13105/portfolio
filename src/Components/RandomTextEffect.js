// RandomTextEffect.js

import React, { useState, useEffect } from "react";
import "./Hero.css";

const RandomTextEffect = ({ initialText }) => {

    const [displayText, setDisplayText] = useState(initialText);
  let interval;

  const handleMouseOver = () => {
    let index = 0;

    interval = setInterval(() => {
      setDisplayText((prevText) =>
        prevText
          .split("")
          .map((char, i) =>
            i < index
              ? initialText[i]
              : String.fromCharCode(Math.floor(Math.random() * 26) + 65)
          )
          .join("")
      );

      if (index >= initialText.length) {
        clearInterval(interval);
      }

      index += 1 / 3;
    }, 30);
  };

  const handleMouseOut = () => {
    clearInterval(interval);
    setDisplayText(initialText);
  };

  useEffect(() => {
    return () => {
      clearInterval(interval);
    };
  }, [initialText]);

  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div className="name-text" data-value={initialText}>
        {displayText}
      </div>
    </div>
  );
};

export default RandomTextEffect;
