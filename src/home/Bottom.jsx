const Bottom = () => {
  return (
    <div className="w-full flex justify-center pb-15 lg:pb-10">
      <div className="relative flex justify-between w-full px-5 items-center">
        
        {/* Left text */}
        <p className="text-[1vw] w-[20vw] leading-tight opacity-80 uppercase">
         I explore a vibrant world of creativity,
where every brushstroke tells a story.

        </p>

        {/* Center text (true center of page) */}
        <p className=" uppercase absolute m-2 lg:m-0 text-center left-1/2 leading-4.5 -translate-x-1/2 text-[3vw] lg:text-[1.5vw]">
          Hello, I’m Zaid — a visual artist based in Kolkata.

        </p>

        {/* Right text */}
        <p className=" text-[4vw] lg:text-[1.5vw]">© 2025
</p>

      </div>
    </div>
  );
};

export default Bottom;
