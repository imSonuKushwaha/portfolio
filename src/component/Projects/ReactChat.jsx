import React from "react";

const ReactChat = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-start gap-3 border-8 border-gray-600 rounded-3xl p-3 transition duration-500 ease-in-out hover:scale-110 hover:shadow-lg shadow-gray-800 hover:z-10 ">
        <a
          href="https://imsonukushwaha.github.io/reactChat/"
          target="_blank"
          className="flex items-center px-4 py-2 border-2 border-indigo-500 rounded-md shadow-sm"
        >
          React Chat
        </a>
        <p className="w-full border-b-2 border-gray-800 border-dashed"></p>
        <p className="text-pretty">
          ReactChat is a real-time chat application built that allows users to
          chat with friends, share images, search for and add new friends, and
          block or unblock users. The app leverages Firebase's real-time
          database and authentication features to provide a seamless and
          interactive chatting experience.
        </p>
      </div>
    </>
  );
};

export default ReactChat;
