import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });

  // Transform values for different layers
  const Mountain3Y = useTransform(x, [0, 0.4], ['0%', '70%']);
  const Planets = useTransform(x, [0, 0.4], ['0%', '-20%']);
  const Mountain2Y = useTransform(x, [0, 0.4], ['0%', '30%']);
  const Mountain1Y = useTransform(x, [0, 0.4], ['0%', '0%']);

  // Layer data with corresponding Y transforms
  const layers = [
    { src: 'sky.jpg', z: '-z-50', y: '0%' },
    { src: 'mountain-3.png', z: '-z-40', y: Mountain3Y },
    { src: 'planets.png', z: '-z-30', y: Planets },
    { src: 'mountain-2.png', z: '-z-20', y: Mountain2Y },
    { src: 'mountain-1.png', z: '-z-10', y: Mountain1Y },
  ];

  return (
    <section className="absolute bottom-0 left-0 right-0 bg-black/40 h-full min-h-screen">
      <div className="relative h-full min-h-screen overflow-hidden">
        {layers.map(({ src, z, y }, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 w-full h-full min-h-screen ${z}`}
            style={{
              backgroundImage: `url(${src})`,
              backgroundPosition: 'bottom',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              y,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ParallaxBackground;
