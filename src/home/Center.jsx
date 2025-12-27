import React, { useRef } from "react";

const Center = () => {
  const tiltRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = tiltRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    el.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  };

  const handleMouseLeave = () => {
    if (!tiltRef.current) return;
    tiltRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div
        ref={tiltRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative flex justify-center items-center w-[90%] transition-transform duration-200 ease-out"
      >
        {/* Images */}
        <div className="relative lg:h-[30vw] lg:w-[20vw] h-[55vw] w-[45vw]">
          <img
            className="h-full w-full object-cover rotate-11 origin-bottom-right"
            src="https://i.pinimg.com/736x/48/f5/76/48f576bc45dcba7b04e81eacb88beb1f.jpg"
            alt=""
          />
          <img
            className="h-full w-full object-cover absolute top-0 left-0"
            src="https://i.pinimg.com/736x/f9/ff/c9/f9ffc9bf79c6aaf467821d88f2c2a594.jpg"
            alt=""
          />
        </div>

        {/* Text */}
        <div className="absolute pointer-events-none text-center flex flex-col items-start mt-50  ">
          <h1 className="font-medium text-[11vw] lg:text-[9vw] leading-[10vw] lg:leading-[7vw]">HELLO & 
</h1>
          <h1 className="font-medium text-[11vw] lg:text-[9vw] leading-[10vw] lg:leading-[7vw] relative left-[7vw]">
            WELCOME,I'M
          </h1>
          <h1 className="font-medium text-[11vw] lg:text-[9vw] leading-[10vw] lg:leading-[7vw] relative left-[34vw]">
            ZAID
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Center;
