import React from "react";

const Onlineshop = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-start gap-3 border-8 border-gray-600 rounded-3xl p-3 transition duration-500 ease-in-out hover:scale-110 hover:shadow-lg shadow-gray-800 hover:z-10 ">
        <a
          href="https://imsonukushwaha.github.io/onlineShop-I/index.html"
          target="_blank"
          className="flex items-center px-4 py-2 border-2 border-indigo-500 rounded-md shadow-sm"
        >
          Online Shop
        </a>
        <p className="w-full border-b-2 border-gray-800 border-dashed"></p>
        <p className="text-pretty">
          OnlineShop is a visually appealing and interactive e-commerce website
          designed to showcases a well-crafted user interface. The project
          primarily focuses on creating a visually engaging and user-friendly
          online shopping experience.
        </p>
      </div>
    </>
  );
};

export default Onlineshop;
