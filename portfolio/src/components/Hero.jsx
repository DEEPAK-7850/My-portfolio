import React, { Suspense } from 'react';
import { FlipWords } from './UI/flipword';
import { motion } from 'motion/react';
import ParallaxBackground from './Parallaxbackground';
import { Astranaut } from './Astranaut';
import { Canvas, useFrame } from '@react-three/fiber';
import {OrbitControls } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { easing } from 'maath';
import { Float } from '@react-three/drei';
import Loader from './Loader';
const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <>
      <div className="mt-[50px] z-10">
        <div className="mt-[70px] flex  z-1 flex-col md:items-start ml-[130px] items-center md:text-left relative">
          <motion.div
            className="text-2xl md:text-4xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm Deepak
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            A Developer
          </motion.h2>

          <motion.h1
            className="text-3xl md:text-5xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            Dedicated to Crafting
          </motion.h1>

          <FlipWords
            className="text-4xl md:text-4xl font-bold"
            words={["Scalable", "Secure", "Mounted"]}
          />

          <motion.div
            className="text-3xl md:text-5xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.7 }}
          >
            Web Solutions
          </motion.div>
          

        </div>
        <ParallaxBackground/>

        
        <figure className="absolute inset-0 z-0" style={{ width: "100vw", height: "100vh" }}>
          <Canvas camera={{ position: [0, 1, 3] }}>
            <Suspense fallback={<Loader/>}>
              <Float>
               <Astranaut
                scale={isMobile ? 0.38 : 0.57}
                position={isMobile ? [0, -1.2, 0] : [1.2, -1, 0]}
               />
              </Float>
            </Suspense>
            <Rig />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </figure>
      </div>
      
    </>
  );
};

function Rig() {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });

  return null;
}

export default Hero;
