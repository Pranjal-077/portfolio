import React from "react";

const TiltText = (props) => {
  return (
    <div id="tiltDiv" ref={props.abc} className="mt-40">
      <h1 className="text-white text-[4.2vw] font-bold leading-[4vw] uppercase font-[anzo1]">
        I am <span className="text-black">DARK MODE</span>™
      </h1>
      <h1 className="text-white text-[8vw] font-bold leading-[7vw] font-[anzo1]">
        Designer
      </h1>
      <h1 className="text-white text-[4.2vw] font-bold leading-[4vw] uppercase font-[anzo1]">
        To Hire
      </h1>
    </div>
  );
};

export default TiltText;
