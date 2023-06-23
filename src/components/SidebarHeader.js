import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="flex justify-between w-full px-6 py-8 border-b border-[#DBDBDB]">
      <div className="flex gap-2">
        <img src="images/sidebar-logo.svg" />
        <span className="text-[#0D062D] text-xl font-semibold">Project M.</span>
      </div>
    </div>
  );
};

export default Header;
