import React from 'react';
import { FlipWords } from './UI/flipword';

const Hero = () => {
  return (
    <div className="mt-[70px] ml-[50px] flex flex-col md:items-start ml-[40vh] md:text-left">
      <div className="text-2xl md:text-4xl">Hi, I'm Deepak</div>
      <h2 className="text-3xl md:text-5xl">A Developer</h2>
      <h1 className="text-3xl md:text-5xl">Dedicated to Crafting</h1>
      <FlipWords className="text-4xl md:text-4xl font-bold" words={["Scalable", "Secure", "Mounted"]} />
      <div className="text-3xl md:text-5xl">Web Solutions</div>
    </div>
  );
};

export default Hero;
