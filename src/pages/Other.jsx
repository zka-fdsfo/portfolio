import React, { useRef, useState, useEffect } from "react";
import bg from "../assets/bg.png";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const profiles = [
  { id: 1, name: "Profile 1", img: "/path/to/profile1.png" },
  { id: 2, name: "Profile 2", img: "/path/to/profile2.png" },
  { id: 3, name: "Profile 3", img: "/path/to/profile3.png" },
  { id: 4, name: "Profile 4", img: "/path/to/profile4.png" },
];

const Other = () => {
  const container = useRef(null);
  const sectionRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);
  const [startX, setStartX] = useState(null);

  const isMobile = window.innerWidth < 768;

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
    <section
      ref={container}
      className="relative h-screen w-screen text-white overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover grayscale"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 lg:bg-black/50" />

      {/* Content */}
      <div
        ref={sectionRef}
        className={`relative z-10 min-h-screen px-4 sm:px-6 lg:px-24 py-16 lg:py-20 flex flex-col gap-16 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          <div>
            <p className="text-[10vw] font-medium sm:text-sm tracking-widest text-red-500 mb-3">
              ABOUT ME
            </p>
            <h1 className="text-[14vw] sm:text-[10vw] lg:text-[5.5vw] font-bold leading-none  uppercase">
              Creative <br /> Developer
            </h1>
          </div>

          <div className="self-end lg:self-start">
            <div className="flex items-center gap-3 text-sm sm:text-lg uppercase tracking-wider cursor-pointer">
              <span>Portfolio</span>
              <span className="text-red-500 text-2xl sm:text-3xl">↗</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/30 pt-6 flex flex-col lg:flex-row gap-8 lg:gap-10">
          <p className="max-w-xl text-sm sm:text-base leading-relaxed text-white/80">
            I’m a creative developer and designer focused on building modern,
            high-impact digital experiences. I combine strong UI/UX principles,
            clean visual design, and efficient programming to create products
            that feel intuitive and powerful.
          </p>

          <ul className="text-sm space-y-2 uppercase tracking-wide">
            <li>01. Web Development</li>
            <li>02. Graphic Design</li>
            <li>03. UI / UX Design</li>
            <li>04. Programming</li>
          </ul>
        </div>

        {/* Profile Carousel */}
        <div className="mt-10 sm:mt-14 relative flex items-center justify-center">
          <button
            onClick={prev}
            className="absolute left-0 text-3xl text-white/50 hover:text-white"
          >
            ‹
          </button>

          <div className="w-64 h-64 flex items-center justify-center">
            <img
              src={profiles[active].img}
              alt={profiles[active].name}
              className="w-full h-full object-cover rounded-xl shadow-xl transition-all duration-500"
            />
          </div>

          <button
            onClick={next}
            className="absolute right-0 text-3xl text-white/50 hover:text-white"
          >
            ›
          </button>
        </div>

        {/* Tech Strip (desktop only) */}
        {!isMobile && (
          <div className="mt-10 sm:mt-14 border-t border-white/20 pt-6 overflow-hidden">
            <div className="relative w-full overflow-hidden">
              <div className="animate-scroll flex gap-12 text-white/70 text-xl sm:text-2xl md:text-4xl w-max">
                <SiReact />
                <SiNextdotjs />
                <SiTypescript />
                <SiTailwindcss />
                {/* duplicate for seamless loop */}
                <SiReact />
                <SiNextdotjs />
                <SiTypescript />
                <SiTailwindcss />
              </div>
            </div>
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Other;
