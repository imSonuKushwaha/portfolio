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
          <p className="text-xs text-orange-400 pr-10">
            April 2024 -- August 2024
          </p>
        </div>
        <strong className="text-blue-300 font-serif">
          Nagarik Solution Pvt. Ltd.
        </strong>
        <ul className="list-disc pl-2">
          <li className="mt-3">
            Worked with an enthusiastic team to design a responsive UI,
            optimized for user experience, resulting in a 25% reduction in task
            completion time. Successfully integrated 20+ RESTful APIs, enhancing
            data exchange efficiency and reducing system response time by 20%.
          </li>
          <li className="mt-3">
            Implemented a real-time data update process as per NHMIS
            requirements, resulting in a 50% reduction in report generation time
            and a 95% increase in data accuracy.
          </li>
          <li className="mt-3">
            Collaborated with back-end teams to identify, report, and resolve
            bugs, reducing bug recurrence by 40%, leading to a 50% increase in
            user satisfaction.
          </li>
          <li className="mt-3">
            Teamed with healthcare professionals to understand user needs and
            requirements, translating them into intuitive and accessible
            responsive UI designs (Central Hospital System).
          </li>
        </ul>
        <p className="mt-3"></p>
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
        <ul className="list-disc pl-2">
          <li className="mt-3">
            Built a responsive website with 17 key features using ReactJS,
            Express with NodeJS, Tailwind CSS, Material UI, and MongoDB,
            achieving an average page load time of less than 2 seconds.
          </li>
          <li className="mt-3">
            Worked to optimize the responsiveness of web pages for all screen
            sizes, especially to mobile screens to assist Mobile Web App.
          </li>
          <li className="my-3">
            Created product product-ready mobile application using Flutter,
            named ePasal.
          </li>
        </ul>
      </div>
      <div className="relative 2xl:h-[720px] lg:h-[820px] md:h-[920px] w-full flex flex-col justify-center items-center gap-2 bg-[#44494F] transition-all ease-in-out delay-150 duration-700 hover:bg-transparent hover:tracking-extreme hover:opacity-0">
        <strong className="text-3xl font-semibold">FRONTEND DEVELOPER</strong>
        <strong className="text-3xl font-semibold">PROBLEM SOLVER</strong>
        <strong className="text-3xl font-semibold">Academic Scorer</strong>
        <strong className="text-3xl font-semibold">Beginner in Fitness</strong>
      </div>
    </>
  );
};

export default Experience;
