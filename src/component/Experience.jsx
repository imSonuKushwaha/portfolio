import React from "react";

const Experience = () => {
  return (
    <>
      <div className="absolute w-8/12 flex flex-col justify-start items-start text-lg font-medium p-4">
        <strong className="w-full text-3xl text-orange-300 text-center mb-4">
          EXPERIENCES
        </strong>
        <div className="w-full flex flex-row justify-between items-center">
          <strong className="text-2xl text-orange-200 font-serif">
            Frontend Developer
          </strong>
          <p className="text-xs text-orange-400 pr-10">April 2024 -- Current</p>
        </div>
        <strong className="text-blue-300 font-serif">
          Nagarik Solution Pvt. Ltd.
        </strong>
        <p className="mb-1">
          Worked with enthusiastic team to designed a responsive UI focused on
          user experience optimization and integrated RESTful APIs for efficient
          data exchange between systems. (NHMIS - Health Post)
        </p>
        <p className="mb-1">
          Enabled realtime data updates to maintain an up-to-date database of
          reports as per NHMIS requirementsand collaborated with backend teams
          to identify, report, and resolve bugs and errors, enhancing overall
          user experience.
        </p>
        <p className="mb-1">
          Contributed in creating and maintaining dynamic and efficient web
          applications (Central Hospital System), conspire with healthcare
          professionals to understand user needs and requirements, translating
          them into intuitive and accessible UI designs.
        </p>
        <p className="mb-1">
          Participated in code reviews, maintained code quality standards, and
          performed testing to identify and resolve bugs and issues, ensuring
          compatibility across various devices and screen sizes.
        </p>
        <p className="mb-1"></p>
        <div className="w-full flex flex-row justify-between items-center border-t-2 border-gray-600 mt-2">
          <strong className="text-2xl text-orange-200 font-serif">
            Software Engineer
          </strong>
          <p className="text-xs text-orange-400 pr-10">
            July 2023 -- March 2024
          </p>
        </div>
        <strong className="text-blue-300 font-serif">
          Maroon Engineering solution
        </strong>
        <p className="mb-1">
          Developed a responsive website using ReactJS, Express with NodeJS,
          Tailwind CSS, Material UI, and MongoDB. Optimized web pages for all
          screen sizes, particularly mobile, to support a Mobile Web App.
        </p>
        <p className="mb-1">
          Created a product-ready mobile application using Flutter.
        </p>
      </div>
      <div className="relative 2xl:h-[600px] lg:h-[730px] md:h-[900px] w-full flex flex-col justify-center items-center gap-2 bg-[#44494F] transition-all ease-in-out delay-150 duration-700 hover:bg-transparent hover:tracking-extreme hover:opacity-0">
        <strong className="text-3xl font-semibold">FRONTEND DEVELOPER</strong>
        <strong className="text-3xl font-semibold">PROBLEM SOLVER</strong>
        <strong className="text-3xl font-semibold">Academic Scorer</strong>
        <strong className="text-3xl font-semibold">Beginner in Fitness</strong>
      </div>
    </>
  );
};

export default Experience;
