import React from "react";
import Project from "./Project";

const MyProjects = () => {
  return (
    <div className="flex justify-between w-full h-[92px] px-6 py-8 flex-col gap-6">
      <div className="flex justify-between">
        <span className="text-[0.75rem] font-bold text-[#787486]">
          MY PROJECTS
        </span>
        <button>
          <img src="images/add-square.svg" />
        </button>
      </div>
      <Project name={"Mobile App"} color="#7AC555" />
      <Project name={"Website Redesign"} color="#FFA500" />
      <Project name={"Design System"} color="#E4CCFD" />
      <Project name={"Wireframes"} color="#76A5EA" />
      <div className="absolute bg-red h-[2rem] w-[90rem] top-[0]"></div>
    </div>
  );
};

export default MyProjects;
