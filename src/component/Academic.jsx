import React from "react";

const Academic = () => {
  return (
    <>
      <div className="absolute h-80 w-4/12 flex flex-col justify-center items-start 2xl:mt-2 md:mt-12">
        <strong className="text-blue-300 text-xl">
          B.Tech in Computer Engineering
        </strong>
        <p></p>
        <strong className="text-2xl text-orange-200">
          Delhi Technological University, India
        </strong>
        <div className="w-full flex flex-row justify-between  items-center">
          <strong className="text-xl">8.43 GPA</strong>
          <p className="text-sm text-orange-400 pr-16"> 2019 -- 2023 </p>
        </div>
        <div className="py-3"></div>
        <strong className="text-blue-300 text-lg">Higher School (+2)</strong>
        <strong className="text-xl text-orange-200">
          National Infotech Higher School, Nepal
        </strong>
        <div className="w-full flex flex-row justify-between  items-center">
          <strong className="text-lg">89.25 %</strong>
          <p className="text-sm text-orange-400 pr-16"> 2016 - 2018 </p>
        </div>
        <div className="py-3"></div>
        <strong className="text-blue-300 text-lg">High School</strong>
        <strong className="text-xl text-orange-200">
          ST. Xavier’s Higher Sec. School, Nepal
        </strong>
        <div className="w-full flex flex-row justify-between  items-center">
          <strong className="text-lg">90 %</strong>
          <p className="text-sm text-orange-400 pr-16"> 2016 </p>
        </div>
      </div>
      <div className="relative 2xl:h-96 lg:h-[460px] md:h-[600px] w-full flex justify-center items-center text-5xl font-bold text-orange-100 bg-[#44494F] tracking-widest transition-all ease-in-out delay-150 duration-700 hover:bg-transparent hover:-translate-y-40 hover:opacity-0 ">
        ACADEMICS
      </div>
    </>
  );
};

export default Academic;
