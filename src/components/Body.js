import React from "react";
import Kanban from "./Kanban";

const Body = () => {
  return (
    <div className="body p-12 mt-[92px]">
      <div className="flex justify-between mt-[-20px] mb-[40px]">
        <div className="flex gap-4 items-center">
          <span className="text-[#0D062D] text-[2.875rem] font-semibold ">
            Mobile App
          </span>
          <img src="images/arrow-square-up.svg" />
          <img
            src="images/link.svg"
            className="bg-[#dcd6fa] h-6 rounded-lg p-1"
          />
        </div>

        {window.innerWidth >= 640 && (
          <div className="flex items-center gap-2">
            <img src="images/add-square-2.svg" className="h-7" />
            <span className="text-[#5030E5] font-medium">Invite</span>
            <div class="flex -space-x-4">
              <img src="images/profile1.png" />
              <img src="images/profile2.png" />
              <img src="images/profile3.png" />
              <img src="images/profile4.png" />
              <span className="w-[2.375rem] h-[2.375rem] text-[#D25B68] bg-[#F4D7DA] flex justify-center items-center rounded-full border border-white">
                +2
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-between mb-8">
        <div className="flex gap-4">
          <button>
            <img src="images/filter.svg" />
          </button>{" "}
          <button>
            <img src="images/today.svg" />
          </button>
        </div>
        {window.innerWidth >= 1024 && (
          <div className="flex gap-4 items-center">
            <img src="images/share.svg" />
            <span className="text-slate-400 text-2xl font-light">|</span>
            <img src="images/tabs.svg" />
            <img src="images/bullets.svg" />
          </div>
        )}
      </div>
      <Kanban />
    </div>
  );
};

export default Body;
