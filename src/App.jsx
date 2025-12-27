import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./Pages/Main";
import Other from "./Pages/Other";
import Tnav from "./nav/Tnav";

const App = () => {
  return (
    <div className="text-white">
      <div className="w-screen h-screen">
        <Tnav />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/other" element={<Other />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
