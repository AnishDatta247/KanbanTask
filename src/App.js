import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { motion } from "framer-motion";
import Kanban from "./components/Body";
import SwitchButton from "./components/SwitchButton";

function App() {
  const [sidebar, setSidebar] = useState(window.innerWidth < 1024 ? 0 : 1);
  return (
    <div className="flex w-screen">
      <Sidebar sidebar={sidebar} set={setSidebar} />
      <SwitchButton sidebar={sidebar} setSidebar={setSidebar} />
      <motion.div
        // initial={{ x: 0 }}
        // animate={{ x: window.innerWidth < 1024 && sidebar === 1 ? 250 : 0 }}
        className="flex flex-col w-full"
      >
        <Navbar sidebar={sidebar} setSidebar={setSidebar} />
        <Kanban />
      </motion.div>
    </div>
  );
}

export default App;
