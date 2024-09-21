import React from "react";

const Animations = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-start gap-3 border-4 border-gray-600 rounded-3xl p-3 transition duration-500 ease-in-out hover:scale-110 hover:shadow-lg shadow-gray-800 hover:z-10 bg-[#44494F] hover:blur-0">
        <a
          href="https://imsonukushwaha.github.io/Animations/"
          target="_blank"
          className="flex items-center px-4 py-2 border-2 border-indigo-500 rounded-md shadow-sm"
        >
          Animations
        </a>
        <p className="w-full border-b-2 border-gray-800 border-dashed"></p>
        <p className="text-pretty">
          Animation Showcase is a collection of various CSS-based animations.
          The project features interactive elements like accordions, preloaders,
          hover effects, micro interactions, dropping menus, and animated logos.
          It demonstrates the capabilities of CSS for creating visually
          appealing and dynamic web page elements.
        </p>
      </div>
    </>
  );
};

export default Animations;
