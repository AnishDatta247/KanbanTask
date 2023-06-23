import React from "react";
import { motion } from "framer-motion";
import SwitchButton from "./SwitchButton";

const Navbar = (props) => {
  return (
    <motion.div
      initial={{
        width: window.innerWidth - ((window.innerWidth < 1024 || props.sidebar === 0) ? 0 : 226),
      }}
      animate={{
        width: window.innerWidth - ((window.innerWidth < 1024 || props.sidebar === 0) ? 0 : 226),
      }}
      transition={{ duration: 0.5 }}
      className="z-20 fixed top-0 bg-white flex justify-between justify-between h-[93px] px-6 py-6 border-b border-[#DBDBDB]"
    >
      <div className="flex">
        {/* <SwitchButton sidebar={props.sidebar} setSidebar={props.setSidebar} /> */}

        <div className="flex gap-4 ml-4 items-center bg-[#F5F5F5] px-6 py-2 rounded-lg w-[250px] lg:w-[400px] ml-[40px]">
          <img src="images/search-normal.svg" />
          <input
            className="bg-transparent w-150px focus:border-transparent "
            placeholder="Search for anything..."
          />
        </div>
      </div>

      <div className="flex gap-4 items-center">
        {window.innerWidth >= 1024 && (
          <div className="flex mr-12">
            <div className="flex gap-6">
              <img src="images/calendar-2.svg" />
              <img src="images/message-question.svg" />
              <img src="images/notification.svg" />
            </div>
          </div>
        )}

        {window.innerWidth >= 1024 && (
          <div className="flex flex-col items-end">
            <span>Anima Agarwal</span>
            <span>U.P, India</span>
          </div>
        )}

        <img src="images/image1.png" className="rounded-full w-12 h-12" />

        <img src="images/arrow-down.svg" className="w-4 h-4" />
      </div>
    </motion.div>
  );
};

export default Navbar;
