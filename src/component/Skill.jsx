import React from "react";

const Skill = () => {
  const func = (name) => {
    return (
      <div className="border border-gray-400 px-2 rounded-lg ">{name}</div>
    );
  };
  return (
    <>
      <div className="flex flex-row flex-wrap gap-2 text-lg mt-3">
        {func("C++")}
        {func("JavaScript")}
        {func("Dart")}
        {func("Python")}
        {func("SQL")}
        {func("HTML")}
        {func("CSS")}
        <div className="w-11/12 border-t-2 border-gray-500"></div>
        {func("Git")}
        {func("GitLab")}
        {func("ReactJS")}
        {func("NextJS")}
        {func("Node.js")}
        {func("Tailwind CSS")}
        {func("BootStrap")}
        {func("Ant Design")}
        {func("Redux")}
        {func("Zustand")}
        {func("Material UI")}
        {func("OpenAPI")}
        {func("Postman")}
        {func("Firebase")}
        {func("MySQL")}
        {func("MongoDB")}
        {func("Figma")}
        {func("Flutter")}
      </div>
    </>
  );
};

export default Skill;
