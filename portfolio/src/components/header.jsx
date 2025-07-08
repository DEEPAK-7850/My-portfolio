import React, { useState } from 'react';
import { TiThMenuOutline } from "react-icons/ti";
import { RiMenuFoldFill } from "react-icons/ri"; 
import {motion} from "motion/react"

function Navigation() {
  return (
    <ul className="items-center gap-[10px] text-gray-400 text-sm font-medium flex flex-col sm:flex-row sm:gap-[30px] sm:items-center">
      <li><a className='hover:text-white text-white/70' href="#home">Home</a></li>
      <li><a className='hover:text-white text-white/70' href="#about">About</a></li>
      <li><a className='hover:text-white text-white/70' href="#projects">Projects</a></li>
      <li><a className='hover:text-white text-white/70' href="#contact">Contact</a></li>
    </ul>
  );
}

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-between w-full h-[40px] bg-primary/40 backdrop-blur-lg px-6">
      <div className="text-xl font-bold text-white/70 hover:text-white ml-[25px]">
        Deepak
      </div>
      <div className="sm:hidden">
        <button
          className="text-white text-2xl"
          onClick={() => setOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <RiMenuFoldFill /> : <TiThMenuOutline />}
        </button>
      </div>

      <div className="hidden sm:flex mr-[25px]">
        <Navigation />
      </div>

      {isOpen && (
        <motion.div className="sm:hidden flex flex-col fixed top-[53px] right-[12px] w-[100px] bg-blue-400 h-[30vh] rounded-lg p-4 z-40"
        initial = {{opacity: 0 , x :-50}}
        animate ={{opacity:1, x : 0}}
        >
          <Navigation /> 
        </motion.div>
      )}
    </div>
  );
};

export default Header;
