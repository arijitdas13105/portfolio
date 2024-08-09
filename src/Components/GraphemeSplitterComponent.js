import React from 'react';
import { TypeAnimation } from "react-type-animation";
import GraphemeSplitter from 'grapheme-splitter'; // make sure to run 'npm i grapheme-splitter' to install this package

const GraphemeSplitterComponent = () => {
  const splitter = new GraphemeSplitter();

  return (
    <TypeAnimation
      splitter={(str) => splitter.splitGraphemes(str)}
      sequence={[
        'ARIJIT DAS',
        3000,
        'অরিজিৎ দাস',
        3000,
        'अरिजीत दास',
        3000,
        
      ]}
      style={{ fontSize: '2em',color:'white' }}
      repeat={Infinity}
    />
  );
};

export default GraphemeSplitterComponent;
