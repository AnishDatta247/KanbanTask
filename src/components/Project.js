import React from "react";

const Project = (props) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className={`w-[8px] h-[8px] bg-[${props.color}] rounded-full`}></div>
        <span className="text-base font-medium text-[#787486]">{props.name}</span>
      </div>
      <div className="extra-bold tracking-tighter">...</div>
    </div>
  );
};

export default Project;
