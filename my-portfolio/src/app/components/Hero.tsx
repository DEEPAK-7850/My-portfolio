'use client'; // Required for animations
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex justify-center items-center ">
      <section className="w-1/2 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold">Hi, I'm <span className="text-purple-500">Deepak Lakhara</span></h1>
          <p className="text-xl mt-4">I build blazing-fast web experiences</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-3 bg-purple-600 rounded-lg text-white"
          >
            View My Work
          </motion.button>
        </motion.div>
      </section>
      <div className="w-1/2 flex justify-center">
        <Image 
          src="/next.svg" 
          alt="hero" 
          width={350} 
          height={250}
          className="h-[250px] w-[350px]"
        />
      </div>
    </div>
  );
}