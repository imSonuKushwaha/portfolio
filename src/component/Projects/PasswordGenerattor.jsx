import React from "react";

const PasswordGenerattor = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-start gap-3 border-8 border-gray-600 rounded-3xl p-3">
        <a
          href="https://imsonukushwaha.github.io/passwordGenerator/"
          target="_blank"
          className="flex items-center px-4 py-2 border-2 border-indigo-500 rounded-md shadow-sm"
        >
          Password Generator
        </a>
        <p className="w-full border-b-2 border-gray-800 border-dashed"></p>
        <p className="text-pretty">
          Awarded with General Scholarship Scheme (GSS), funded by Indian
          Council for Cultural Relations (ICCR).
        </p>
      </div>
    </>
  );
};

export default PasswordGenerattor;
