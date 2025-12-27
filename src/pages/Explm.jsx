import React, { useState } from "react";
import FallingText from "../component/FallingText";

const Explm = () => {
  const [start, setStart] = useState(false);

  const handleDoubleTap = () => {
    setStart(true);
  };

  return (
    <div
      className="h-[100vw] lg:h-[20vw] w-screen flex flex-col items-center justify-center cursor-pointer"
      onClick={handleDoubleTap} // animation starts on double-tap / double-click
    >
      <div className="h-[100vw] lg:h-[50vw] w-full flex flex-col items-center justify-center px-4 text-center">
        <h1 className="uppercase text-3xl mb-6 font-medium">Tap to Start</h1>

        {start && (
          <FallingText
            text={`Welcome to my portfolio! I'm a passionate developer creating interactive, modern, and user-friendly web experiences. Explore my projects and see how I combine design, creativity, and technology to bring ideas to life.`}
            highlightWords={["portfolio", "developer", "interactive", "projects", "technology"]}
            highlightClass="highlighted"
            trigger="hover"
            backgroundColor="transparent"
            wireframes={false}
            gravity={0.56}
            fontSize="2rem"
            mouseConstraintStiffness={0.9}
            className="text-left text-2xl"
          />
        )}
      </div>

      {!start && (
        <p className="text-white/60 mt-4 text-sm">
         tap anywhere to reveal
        </p>
      )}
    </div>
  );
};

export default Explm;
