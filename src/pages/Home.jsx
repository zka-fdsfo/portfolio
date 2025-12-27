import React, { useRef } from "react";
import Center from "../home/Center";
import Bottom from "../home/Bottom";
import TextType from "../component/TextType";


const Home = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <Center></Center>

      <Bottom></Bottom>
    </div>
  );
};

export default Home;
