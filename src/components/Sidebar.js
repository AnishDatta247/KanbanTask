import React, { useEffect } from "react";
import { useState } from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarLinks from "./SidebarLinks";
import MyProjects from "./MyProjects";
import Thoughts from "./Thoughts";
import { motion } from "framer-motion";

const Sidebar = (props) => {
  return (
    <motion.div
      initial={{
        x: props.sidebar === 1 ? 0 : -250,
        width: props.sidebar === 1 ? 250 : 0,
        opacity: props.sidebar === 1 ? 1 : 0,
      }}
      animate={{
        x: props.sidebar === 1 ? 0 : -250,
        width: props.sidebar === 1 ? 250 : 0,
        opacity: props.sidebar === 1 ? 1 : 0,
      }}
      transition={{ duration: 0.5 }}
      className={`${
        window.innerWidth < 1024 ? "fixed" : "sticky top-0"
      } z-30 fixed bg-white h-screen flex flex-col items-center w-[250px] border-r border-[#DBDBDB]`}
    >
      <SidebarHeader />
      <SidebarLinks />
      <div className="h-0 w-[226px] border-t border-[#DBDBDB]"></div>
      <MyProjects />
      {window.innerHeight >= 875 && <Thoughts />}
    </motion.div>
  );
};

export default Sidebar;
