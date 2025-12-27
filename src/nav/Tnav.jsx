import React, { useRef } from 'react'
import Logo from "../assets/logo.svg";
const Tnav = () => {
   const nav1 =useRef(null); 
  return (
  
        <div className="z-30 flex fixed top-0 w-full items-start justify-between">
      <div className="p-3">
        <div className="w-40 h-30">
           <div className="p-3">
        <img
          src={Logo}
          alt="Logo"
          className="h-12 w-auto"
        />
      </div>
        </div>
      </div>

      <div 
       
        onMouseEnter={() => {
          
          nav1.current.style.height = "100%";
        }}
        onMouseLeave={() => {
          
          nav1.current.style.height = "0%";
        }}
        className="h-16 w-[50vw] lg:h-16 lg:w-[20vw] relative" 
        
      >
        <div
          ref={nav1}
          className="absolute top-0 transition-all w-full bg-red-600 "
          style={{ height: "0%" }} // Controlled by ref for animation speed
        ></div>

        <div className="h-full w-full relative flex flex-col items-end justify-center px-8 gap-2 bg-white ">
          {/* Removed bg-white and refs for color, using barColor state instead */}
          <div className="w-20 h-0.5 transition-colors duration-300 bg-black z-30" ></div>
          <div className="w-16 h-0.5 transition-colors duration-300 bg-black z-30" ></div>
        </div>
      </div>
    </div>
   
  )
}

export default Tnav