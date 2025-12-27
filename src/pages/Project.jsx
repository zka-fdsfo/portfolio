import React, { useRef, useState, useEffect } from "react";
const cardimg = [
  {
    id: "poster-design",
    title: "Poster Design",
    category: "Graphic Design",
    year: "2024",
    description:
      "A bold poster design exploring strong typography, color contrast, and visual hierarchy. Designed to grab attention instantly.",
    tools: ["Photoshop", "Illustrator"],
    img1: "https://i.pinimg.com/736x/c9/85/dd/c985dda6a2e6ba4f060206456494d882.jpg",
    img2: "https://i.pinimg.com/1200x/68/03/d5/6803d5dc06b1bdfa31b3dd2f837e97d4.jpg",
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    category: "Branding",
    year: "2023",
    description:
      "A minimal brand identity concept focusing on clean layouts, modern aesthetics, and consistent visual language.",
    tools: ["Illustrator", "Figma"],
    img1: "https://i.pinimg.com/1200x/55/ca/27/55ca27d07776728ae037ebdad7d6c0e9.jpg",
    img2: "https://i.pinimg.com/736x/f7/9d/23/f79d23e76c43f0b3d15ecf66339ca1c4.jpg",
  },
  {
    id: "creative-layout",
    title: "Creative Layout",
    category: "Visual Design",
    year: "2024",
    description:
      "An experimental layout combining imagery and typography to create a visually engaging composition.",
    tools: ["Photoshop"],
    img1: "https://i.pinimg.com/736x/44/4a/7a/444a7a01399fc1cd140f4975ed9587c9.jpg",
    img2: "https://i.pinimg.com/736x/53/83/d4/5383d4dd98bd9439d458969b81af0a6e.jpg",
  },
  {
    id: "social-media-design",
    title: "Social Media Creatives",
    category: "Digital Design",
    year: "2023",
    description:
      "High-impact social media creatives designed for engagement and brand recall across platforms.",
    tools: ["Photoshop", "Canva"],
    img1: "https://i.pinimg.com/1200x/99/15/f8/9915f833d5a8ac590c10da940a486f4d.jpg",
    img2: "https://i.pinimg.com/1200x/0c/fe/44/0cfe44921f1b996aa4ae7b73225f255f.jpg",
  },
  {
    id: "linkedin-campaign-1",
    title: "LinkedIn Campaign",
    category: "Marketing Design",
    year: "2024",
    description:
      "Professional LinkedIn campaign visuals crafted to improve reach, engagement, and brand authority.",
    tools: ["Photoshop"],
    img1: "https://media.licdn.com/dms/image/v2/D5622AQGWQEplFbu5UA/feedshare-shrink_800/B56ZiJgae6H0As-/0/1754653634292?e=1767830400&v=beta&t=YMRb3rwuV9AixtOQFmTFilioe4cr7lYzYsxOZFsHOQM",
    img2: "https://media.licdn.com/dms/image/v2/D5622AQEpWMto1KNecg/feedshare-shrink_800/B56ZiJgQDvHUAg-/0/1754653591842?e=1767830400&v=beta&t=zCcAZngmr-tykijIs9iiNyAjsh3-Gyeg_sPl3h0pq78",
  },
  {
    id: "linkedin-campaign-2",
    title: "Corporate Visuals",
    category: "Corporate Design",
    year: "2024",
    description:
      "Clean and professional corporate visuals designed for brand storytelling and trust building.",
    tools: ["Photoshop", "Illustrator"],
    img1: "https://media.licdn.com/dms/image/v2/D5622AQGmB6qQ-2uz7g/feedshare-shrink_800/B56ZlxebrOH8Ag-/0/1758545434217?e=1767830400&v=beta&t=r0m-RF0223vOhWwBY4kJ8Efsd-GCG8luwrgQG0TLAYc",
    img2: "https://media.licdn.com/dms/image/v2/D5622AQFlJs5DnaN-ZQ/feedshare-shrink_800/B56ZiJgmFAG4Ak-/0/1754653681663?e=1767830400&v=beta&t=_ZCCULPxCfTa-KedjfUxbxfMDE6EmhwbRcCyN_G6DNM",
  },
  
];
// const cardimg = [
//   {
//     id: "poster-design",
//     title: "Poster Design",
//     category: "Graphic Design",
//     year: "2024",
//     description:
//       "A bold poster design exploring strong typography, color contrast, and visual hierarchy. Designed to grab attention instantly.",
//     tools: ["Photoshop", "Illustrator"],
//     img1: "https://i.pinimg.com/736x/c9/85/dd/c985dda6a2e6ba4f060206456494d882.jpg",
//     img2: "https://i.pinimg.com/1200x/68/03/d5/6803d5dc06b1bdfa31b3dd2f837e97d4.jpg",
//   },
//   {
//     id: "brand-identity",
//     title: "Brand Identity",
//     category: "Branding",
//     year: "2023",
//     description:
//       "A minimal brand identity concept focusing on clean layouts, modern aesthetics, and consistent visual language.",
//     tools: ["Illustrator", "Figma"],
//     img1: "https://i.pinimg.com/1200x/55/ca/27/55ca27d07776728ae037ebdad7d6c0e9.jpg",
//     img2: "https://i.pinimg.com/736x/f7/9d/23/f79d23e76c43f0b3d15ecf66339ca1c4.jpg",
//   },
//   // Add more projects here
// ];

const ProjectPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const projectRefs = useRef([]);

  useEffect(() => {
    projectRefs.current = projectRefs.current.slice(0, cardimg.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5 } // triggers when 50% of the project is visible
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
     <div>
         <div className="text-left space-y-2 m-5 leading-[12vw] pt-10">
  <h1 className="text-[12vw] sm:text-[10vw] lg:text-[5.5vw] font-medium lg:leading-[6vw] uppercase">
    My <br /> <div className="text-red-700">Projects</div>
  </h1>
  <p className="text-sm text-white/60 max-w-md">
    A showcase of my creative work, including web development, UI/UX design,
    and interactive projects demonstrating modern design principles and
    efficient coding.
  </p>
</div>

    <div className="relative w-screen text-white bg-black">
       
      {/* Sticky Left Number + Title */}
      <div className="sticky top-0 left-0 w-full h-screen  bg-[linear-gradient(180deg,rgba(42,123,155,0)_0%,rgba(0,0,0,1)_93%,rgba(0,0,0,1)_100%)] flex items-center justify-start px-12 lg:px-24">
        <div className="flex pt-82 flex-col gap-4">
          <span className="text-6xl text-white/40 font-bold">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold">
            {cardimg[activeIndex].title}
          </h2>
          <p className="text-white/60 max-w-md mt-2">
            {cardimg[activeIndex].description}
          </p>
        </div>
      </div>

      {/* Projects */}
      <div className="flex flex-col pb-30">
        {cardimg.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (projectRefs.current[index] = el)}
            data-index={index}
            className="min-h-screen flex items-center justify-center py-10"
          >
            <div className="grid lg:grid-cols-2 gap-6 px-6 lg:px-24">
              <img
                src={project.img1}
                alt={project.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <img
                src={project.img2}
                alt={project.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
     </div>
  );
};

export default ProjectPage;
