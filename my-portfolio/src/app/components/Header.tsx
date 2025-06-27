'use client';
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md">
      <nav className="flex justify-between p-4">
        <motion.div whileHover={{ scale: 1.05 }}>YourLogo</motion.div>
        <div className="flex gap-8">
          {['Home', 'Projects', 'Contact'].map((item) => (
            <Link 
              href={`#${item.toLowerCase()}`} 
              key={item}
              className="hover:text-purple-500 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}