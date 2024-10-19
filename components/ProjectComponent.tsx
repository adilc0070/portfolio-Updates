/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { LatestProjectsProps } from '@/constants/interfaces';

const ProjectComponent: React.FC<LatestProjectsProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  // Automatic transition
  useEffect(() => {
    const id = setInterval(handleNext, 5000); // Change every 5 seconds
    setIntervalId(id);

    return () => {
      clearInterval(id);
    };
  }, []);

  const handleMouseEnter = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  };

  const handleMouseLeave = () => {
    const id = setInterval(handleNext, 5000);
    setIntervalId(id);
  };

  return (
    <motion.div
      className="relative w-full text-Accent1 rounded-xl overflow-hidden transition-shadow duration-300"
      whileHover={{ scale: 1.05, rotate: 1 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glass effect with backdrop blur */}
      <motion.div
        className="absolute inset-0 bg-SecBG bg-opacity-30 backdrop-blur-md transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="p-4 relative z-20 rounded-xl"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="mt-4 text-lg md:text-2xl lg:text-3xl font-semibold text-Accent1">
          Latest Projects
        </h3>
        <div className="mt-2 flex flex-col items-center">
          {/* Project Item */}
          {projects.length > 0 && (
            <div className="mb-4 w-full">
              <img src={projects[currentIndex].image} alt={projects[currentIndex].title} className="rounded-lg w-full h-48 object-cover" />
              <h4 className="mt-2 text-lg font-semibold text-LightBG">{projects[currentIndex].title}</h4>
              <p className="text-sm text-LightBG">{projects[currentIndex].description}</p>
              <Link href={projects[currentIndex].link} passHref>
                <span className="mt-2 inline-block text-Accent1 bg-LightBG py-2 px-4 rounded-md hover:bg-Accent1/80 transition-colors">
                  View Project
                </span>
              </Link>
            </div>
          )}
        </div>
        {/* Dots Navigation */}
        <div className="absolute right-4 bottom-4 flex flex-col space-y-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-Accent1' : 'bg-LightBG'} transition-colors`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectComponent;
