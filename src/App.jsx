import React from 'react'
import Main from './pages/main';
import Tnav from './nav/Tnav'
import { Routes, Route } from "react-router-dom";
import Other from './pages/Other';

const App = () => {
  return (
    <div className='text-white text-6x '>
      <div className=' w-screen h-screen'>
      <Tnav></Tnav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/other" element={<Other />} />
      </Routes>
      </div>
     
    </div>
  )
}

export default App