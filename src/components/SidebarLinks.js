import React from "react";

const SidebarLinks = () => {
  return (
    <div className="flex justify-between w-full px-6 py-8 flex-col gap-[25px]">
      <button className="flex gap-3">
        <img src="images/category.svg" className="w-6" />
        <span className="text-[#787486] text-base font-medium">Home</span>
      </button>
      <button className="flex gap-3">
        <img src="images/message.svg" className="w-6" />
        <span className="text-[#787486] text-base font-medium">Messages</span>
      </button>
      <button className="flex gap-3">
        <img src="images/task-square.svg" className="w-6" />
        <span className="text-[#787486] text-base font-medium">Tasks</span>
      </button>
      <button className="flex gap-3">
        <img src="images/profile-2user.svg" className="w-6" />
        <span className="text-[#787486] text-base font-medium">Members</span>
      </button>
      <button className="flex gap-3">
        <img src="images/setting-2.svg" className="w-6" />
        <span className="text-[#787486] text-base font-medium">Settings</span>
      </button>
    </div>
  );
};

export default SidebarLinks;
