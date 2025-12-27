import { useState, useEffect, useRef } from "react";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";
import profile4 from "../assets/profile4.png";

const profiles = [
  {
    id: 1,
    name: "Web & UI/UX Designer",
    desc: "Crafting modern web experiences with intuitive UI & seamless UX.",
    img: profile1,
  },
  {
    id: 2,
    name: "UI / UX Specialist",
    desc: "Designing user-focused interfaces that feel simple and powerful.",
    img: profile2,
  },
  {
    id: 3,
    name: "Frontend Developer",
    desc: "Building responsive, fast, and interactive web applications.",
    img: profile3,
  },
  {
    id: 4,
    name: "Visual Artist",
    desc: "Creating visually striking designs with strong creative identity.",
    img: profile4,
  },
];

export default function SocialPage() {
  const [active, setActive] = useState(0);
  const [startX, setStartX] = useState(null);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Scroll appear animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const next = () => {
    setActive((prev) => (prev + 1) % profiles.length);
  };

  const prev = () => {
    setActive((prev) => (prev === 0 ? profiles.length - 1 : prev - 1));
  };

  // Swipe handlers
  const onPointerDown = (e) => setStartX(e.clientX);

  const onPointerUp = (e) => {
    if (startX === null) return;
    const diff = e.clientX - startX;

    if (diff > 50) prev();
    else if (diff < -50) next();

    setStartX(null);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between overflow-hidden mt-10">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-4">
        <span className="text-sm text-white/70">07 · Elements</span>
        <button className="border border-white/30 px-4 py-1 rounded-full text-sm hover:border-red-500 transition">
          Contact
        </button>
      </div>

      {/* Center Section */}
      <div
        ref={sectionRef}
        className={`flex flex-col items-center gap-6 transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
        `}
      >
       <div className="flex flex-col lg:flex-row justify-between w-full h-full px-10 gap-10">

          {/* 🔥 Top Heading */}
          <div className="text-left space-y-2 -ml-5 leading-[12vw] pt-10">
            <h1 className="text-[12vw]  sm:text-[10vw] lg:text-[5.5vw] font-medium lg:leading-[6vw] uppercase">
              Web & UI/UX <br /> <div className="text-red-700  ">Design</div>
            </h1>
            <p className="text-sm text-white/60 max-w-md">
              Designing clean interfaces and meaningful digital experiences that
              connect users with ideas.
            </p>

          </div>
   <div className=" flex flex-col justify-center py-5 items-center lg:px-10 px-0  ">
          {/* Tabs */}
          <div className="flex gap-4 text-[2.3vw] lg:text-[1.5vw] py-2 mt-2">
            {["UI/UX Design", "Web Design", "Web Development"].map((tab) => (
              <span
                key={tab}
                className="px-4 py-1 rounded-full border border-white/20 hover:border-red-200 cursor-pointer transition"
              >
                {tab}
              </span>
            ))}
          </div>
         
                 {/* Card Stack */}
          <div
            className="relative w-[300px] aspect-[3/4] touch-pan-y cursor-grab active:cursor-grabbing"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
          >
            <div className="relative w-full h-full">
              {profiles.map((item, i) => {
                const pos = (i - active + profiles.length) % profiles.length;

                return (
                  <div
                    key={item.id}
                    className={`absolute inset-0 rounded-2xl overflow-hidden transition-all duration-500 ease-out
                    ${
                      pos === 0 &&
                      "z-30 scale-100 translate-x-0 shadow-[0_30px_80px_rgba(255,0,0,0.25)]"
                    }
                    ${pos === 1 && "z-20 scale-95 translate-x-8 opacity-80"}
                    ${pos === 2 && "z-10 scale-90 translate-x-16 opacity-60"}
                    ${pos > 2 && "opacity-0"}
                  `}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-contain bg-black"
                    />

              <div className="absolute bottom-0 w-full p-4  pt-12 space-y-1 
  bg-[linear-gradient(180deg,rgba(42,123,155,0)_0%,rgba(0,0,0,1)_63%,rgba(0,0,0,1)_100%)]">
                      <p className="text-sm font-semibold">{item.name}</p>
                      <p className="text-xs text-white/70 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Controls */}
          <div className="flex gap-6 mt-4">
            <button
              onClick={prev}
              className="w-11 h-11 border border-white rounded-full text-white hover:bg-red-500 hover:text-white transition"
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-11 h-11 border border-white rounded-full text-white hover:bg-red-500 hover:text-white transition"
            >
              →
            </button>
          </div>
            </div>
       
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-center px-6 py-4 text-xs text-white/40">
        <span>Personal portfolio © 2025</span>
        <span className="hover:text-red-500 cursor-pointer">About me</span>
        <span className="hover:text-red-500 cursor-pointer">Playground</span>
      </div>
    </div>
  );
}
