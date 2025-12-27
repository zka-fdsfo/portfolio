import React from "react";
import Home from "./Home";
import Other from "./Other";
import SocialPage from "./SocialPage"; // 👈 import here
import Explm from "./Explm";
import ProjectPage from "./Project";
const Main = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Home />
      <Other />
      <SocialPage /> 
      <Explm />
      <ProjectPage />
    </div>
  );
};

export default Main;
