import React from "react";
import { motion } from "framer-motion";

const SwitchButton = (props) => {
  return (
    <motion.div
      initial={{
        x: props.sidebar===1?0:-160,
        rotate: props.sidebar === 1 ? 0 : 180,
      }}
      animate={{
        x: props.sidebar===1?0:-160,
        rotate: props.sidebar === 1 ? 0 : 180,
      }}
      transition={{ duration: 0.5 }}
      className="z-50 fixed top-[36px] left-[184px] flex items-center justify-center"
    >
      <button onClick={() => props.setSidebar((prev) => 1 - prev)}>
        <img src="images/sidebar-switch.svg" />
      </button>
    </motion.div>
  );
};

export default SwitchButton;
