import React, { useState } from "react";
import Skill from "./Skill";
import DSA from "./DSA";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(true);

  return (
    <>
      <div className=" h-96 w-3/12 flex flex-col items-center">
        <div className="w-3/4 flex flex-row ">
          <button
            className={`${
              activeTab ? "" : "rounded-2xl hover:bg-gray-700"
            }  w-1/3 text-center text-xl p-1`}
            onClick={() => {
              setActiveTab(true);
            }}
          >
            Skills
          </button>
          <button
            className={`${
              !activeTab ? "" : "rounded-2xl hover:bg-gray-700"
            }  w-1/3 text-center text-xl p-1`}
            onClick={() => {
              setActiveTab(false);
            }}
          >
            DSA
          </button>
        </div>
        <div
          className={`w-1/4 border-2 rounded-full border-orange-300 transition-all delay-0 duration-500 ${
            activeTab ? "-translate-x-24" : "translate-x-0"
          }`}
        ></div>
        {activeTab === true ? <Skill /> : <DSA />}
      </div>
    </>
  );
};

export default Tab;
