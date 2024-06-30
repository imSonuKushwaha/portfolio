import React, { useState } from "react";
import Skill from "./Skill";
import DSA from "./DSA";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(true);

  return (
    <>
      <div className="absolute h-[340px] w-3/12 flex flex-col items-center pl-8">
        <div className="w-3/4 flex flex-row justify-between">
          <button
            className={`${
              activeTab ? "" : "rounded-2xl hover:bg-gray-700"
            }  w-1/2 text-center text-xl p-1`}
            onClick={() => {
              setActiveTab(true);
            }}
          >
            Skills
          </button>
          <button
            className={`${
              !activeTab ? "" : "rounded-2xl hover:bg-gray-700"
            }  w-1/2 text-center text-xl p-1`}
            onClick={() => {
              setActiveTab(false);
            }}
          >
            DSA
          </button>
        </div>
        <div
          className={`w-1/3 border-2 rounded-full border-orange-300 transition-all delay-0 duration-500 ${
            activeTab ? "-translate-x-16" : "translate-x-16"
          }`}
        ></div>
        {activeTab ? <Skill /> : <DSA />}
      </div>
      {/* <div className="relative h-[340px] w-full flex justify-center items-center text-7xl font-bold text-orange-100 bg-[#44494F] tracking-widest transition-all ease-in-out delay-150 duration-500 hover:bg-transparent hover:tracking-extreme hover:opacity-0 ">
        Skills/DSA
      </div> */}
    </>
  );
};

export default Tab;
