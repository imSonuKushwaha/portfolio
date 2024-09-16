import React from "react";

const DSA = () => {
  const linkIcon = (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="External_Link">
        <path
          id="Vector"
          d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
          stroke="gray"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );

  return (
    <>
      <div className="flex flex-col justify-center items-start text-base font-light">
        <strong className="text-orange-300 text-xl">
          <a
            href="https://www.hackerrank.com/imsonukushwaha"
            target="_blank"
            className="flex flex-row gap-1"
          >
            HackerRank
            <p className="flex justify-center items-center">{linkIcon}</p>
          </a>
        </strong>
        <ul className="list-disc font-medium pl-6 pb-1">
          <li className="text-orange-100">
            certificates :- Problem Solving (Basic, Intermediate), SQL (Basic)
          </li>
          <li className="text-orange-100 ">
            Badges :- Problem Solving (6 star), C++ (5 star), SQL (5 star) & 3
            more
          </li>
        </ul>
        <strong className="text-orange-300 text-xl">
          <a
            href="https://leetcode.com/u/imsonukushwaha/"
            target="_blank"
            className="flex flex-row gap-1"
          >
            LeetCode
            <p className="flex justify-center items-center">{linkIcon}</p>
          </a>
        </strong>
        <ul className="list-disc font-medium pl-6 pb-1">
          <li className="text-orange-100 ">
            500+ problems solved, 5 Batches, 200+ active days
          </li>
        </ul>
        <strong className="text-orange-300 text-xl">
          <a
            href="https://www.codechef.com/users/sonu_11"
            target="_blank"
            className="flex flex-row gap-1"
          >
            CodeChet
            <p className="flex justify-center items-center">{linkIcon}</p>
          </a>
        </strong>
        <ul className="list-disc font-medium pl-6">
          <li className="text-orange-100 ">
            Participated in 20+ Coding Challenges, 3-star coder (1670 Rating)
          </li>
        </ul>
      </div>
    </>
  );
};

export default DSA;
