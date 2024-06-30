import React from "react";

const SocialMedia = () => {
  return (
    <>
      <div className="flex justify-end items-center gap-3 text-gray-600 pr-2">
        <a
          className="h-16 w-16 p-2 border border-gray-600 rounded-lg bg-orange-100 transition-all ease-in-out delay-150 duration-500 hover:bg-transparent hover:scale-110 hover:bg-github hover:border-none hover:text-transparent flex justify-center items-end"
          href="https://github.com/SonuKushwaha-hub"
          target="_blank"
        >
          github
        </a>
        <a
          className="h-16 w-16 p-2 border border-gray-600 rounded-lg bg-orange-100 transition-all ease-in-out delay-150 duration-500 hover:bg-transparent hover:scale-110 hover:bg-linkedin hover:border-none hover:text-transparent flex justify-center items-end "
          href="https://www.linkedin.com/in/im-sonu/"
          target="_blank"
        >
          linkedin
        </a>
        <a
          className="h-16 w-16 p-2 border border-gray-600 rounded-lg bg-orange-100 transition-all ease-in-out delay-150 duration-500 hover:bg-transparent hover:scale-110 hover:bg-instagram hover:border-none hover:text-transparent flex justify-center items-end "
          href="https://www.instagram.com/imsonu_11/"
          target="_blank"
        >
          Insta
        </a>
        <a
          className="h-16 w-16 p-2 border border-gray-600 rounded-lg bg-orange-100 transition-all ease-in-out delay-150 duration-500 hover:bg-transparent hover:scale-110 hover:bg-gmail hover:border-none hover:text-transparent flex justify-center items-end "
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sonukumarkushwaha267@gmail.com"
          target="_blank"
        >
          Gmail
        </a>
      </div>
    </>
  );
};

export default SocialMedia;
