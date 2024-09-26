import React from "react";

const Academic = () => {
  return (
    <>
      <div className=" w-4/12 flex flex-col justify-center items-start gap-3 border-8 border-gray-600 rounded-3xl p-3 2xl:mt-2 md:mt-12 transition duration-500 ease-in-out hover:translate-y-[-20px] hover:shadow-2xl shadow-gray-800">
        <strong className="text-blue-300 text-xl">
          B.Tech in Computer Engineering
        </strong>
        <strong className="text-2xl text-orange-200 text-pretty ">
          Delhi Technological University (DTU), formally Delhi College of
          Engineering (DCE), India
        </strong>
        <div className="w-full flex flex-row justify-between  items-center">
          <strong className="text-xl">8.43 GPA</strong>
          <p className="text-sm text-orange-400 pr-16"> 2019 -- 2023 </p>
        </div>
        <p className="w-full border-b-2 border-gray-800 border-dashed"></p>
        <p className="p-3 text-pretty">
          Awarded with General Scholarship Scheme (GSS), funded by Indian
          Council for Cultural Relations (ICCR).
        </p>
      </div>
    </>
  );
};

export default Academic;
