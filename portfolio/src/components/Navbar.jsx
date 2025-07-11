import { useState } from "react";
import { motion } from "motion/react";
import { TiThMenuOutline } from "react-icons/ti";
import { RiMenuFold2Line } from "react-icons/ri";

function Navigation() {
  return (
    <ul className="flex flex-col sm:flex-row items-center gap-6 text-sm font-medium text-neutral-400">
      <li>
        <a
          className="hover:text-white transition-colors duration-200"
          href="#home"
        >
          Home
        </a>
      </li>
      <li>
        <a
          className="hover:text-white transition-colors duration-200"
          href="#about"
        >
          About
        </a>
      </li>
      <li>
        <a
          className="hover:text-white transition-colors duration-200"
          href="#work"
        >
          Work
        </a>
      </li>
      <li>
        <a
          className="hover:text-white transition-colors duration-200"
          href="#contact"
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white sm:ml-[75px]"
          >
            Deepak
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="flex sm:hidden text-neutral-400 hover:text-white focus:outline-none text-2xl"
          >
            {isOpen ? <RiMenuFold2Line /> : <TiThMenuOutline />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex mr-[75px]">
            <Navigation />
          </nav>
        </div>
      </div>

      {/* Mobile Navigation (Animated) */}
      {isOpen && (
        <motion.div
          className="sm:hidden text-center overflow-hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
  
  
};


export default Navbar;
