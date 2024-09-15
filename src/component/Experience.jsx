import React from "react";

const Experience = () => {
  return (
    <>
      <div className="w-8/12 flex flex-col justify-start items-start text-lg font-medium">
        <strong className="w-full text-3xl text-orange-300 text-center mb-4">
          RECENT WORK
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
      </div>
      <div className="absolute z-10 top-24 w-[80vw] 2xl:h-[510px] lg:h-[520px] md:h-[620px] flex flex-col justify-center items-center gap-2 bg-[#44494F] transition-all ease-in-out delay-150 duration-700 hover:bg-transparent hover:tracking-extreme hover:opacity-0">
        <strong className="text-3xl font-semibold">FRONTEND DEVELOPER</strong>
        <strong className="text-3xl font-semibold">PROBLEM SOLVER</strong>
        <strong className="text-3xl font-semibold">Academic Scorer</strong>
        <strong className="text-3xl font-semibold">Fitness Enthusiast</strong>
      </div>
    </>
  );
};

export default Experience;
