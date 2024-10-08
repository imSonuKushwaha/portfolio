import React from "react";

const CryptoWorld = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-start gap-3 border-4 border-gray-600 rounded-3xl p-3 transition duration-500 ease-in-out hover:scale-110 hover:shadow-lg shadow-gray-800 hover:z-10 bg-[#44494F] blur-sm hover:blur-0">
        <a
          href="https://crypto-worldapp.netlify.app/"
          target="_blank"
          className="flex items-center px-4 py-2 border-2 border-indigo-500 rounded-md shadow-sm"
        >
          Crypto World
        </a>
        <p className="w-full border-b-2 border-gray-800 border-dashed"></p>
        <p className="text-pretty">
          Crypto-World is a comprehensive platform providing detailed
          information on the top 100 cryptocurrencies. Users can search for
          specific cryptocurrencies and explore in-depth details about each,
          including real-time value graphs, historical data, and other relevant
          information.
        </p>
      </div>
    </>
  );
};

export default CryptoWorld;
