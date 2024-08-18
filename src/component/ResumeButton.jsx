import React, { useEffect, useState } from "react";

const ResumeButton = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div
        className={`w-32 h-12 flex justify-center items-center rounded-full transition-colors duration-700 ease-out ${
          clicked ? "bg-green-500" : "bg-red-500"
        }`}
      >
        <div
          className={`w-28 h-10 flex justify-center items-center rounded-full transition-colors duration-500 ease-out ${
            clicked ? "bg-green-400" : "bg-red-400"
          }`}
        >
          <div
            className={`w-24 h-8 flex justify-center items-center rounded-full transition-colors duration-300 ease-out ${
              clicked ? "bg-green-300" : "bg-red-300"
            }`}
          >
            <div
              className={`w-20 h-6 flex justify-center items-center rounded-full transition-colors duration-100 ease-out ${
                clicked ? "bg-green-200" : "bg-red-200  "
              }`}
            >
              <button
                className="text-gray-700"
                onClick={() => {
                  setClicked(true);
                  setTimeout(() => {
                    setClicked(false);
                  }, 300);
                  setTimeout(() => {
                    window.open(
                      "https://drive.google.com/file/d/1hklI6IDFKxrpJsKeKnjVceon5Ni8o3vt/view?usp=sharing",
                      "_blank"
                    );
                  }, 500);
                }}
              >
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeButton;
