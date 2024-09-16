import React from "react";

const TextEditor = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-start gap-3 border-4 border-gray-600 rounded-3xl p-3 transition duration-500 ease-in-out hover:scale-110 hover:shadow-lg shadow-gray-800 hover:z-10 bg-[#44494F]">
        <a
          href="https://imsonukushwaha.github.io/textEditor/"
          target="_blank"
          className="flex items-center px-4 py-2 border-2 border-indigo-500 rounded-md shadow-sm"
        >
          Text Editor
        </a>
        <p className="w-full border-b-2 border-gray-800 border-dashed"></p>
        <p className="text-pretty">
          TextEditor is a functional text editing tool that allows users to
          perform various text manipulations. The editor also offers
          customizable color themes, with corresponding background color and
          text color changes when switching between themes.
        </p>
      </div>
    </>
  );
};

export default TextEditor;
