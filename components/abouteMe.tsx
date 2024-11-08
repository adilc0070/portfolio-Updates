'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AboutMeCardProps } from '@/constants/interfaces';

const AboutMeCard: React.FC<AboutMeCardProps> = ({ aboutMe }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative w-full  mx-auto text-Accent1 rounded-xl overflow-hidden transition-shadow duration-300 bg-mainBG shadow-lg`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }} // Scale up slightly on hover
    >
      {/* Glass effect with unique animation */}
      <motion.div
        className={`absolute inset-0 bg-SecBG bg-opacity-40 backdrop-blur-md transition-opacity duration-300`}   
        style={{ zIndex: 1 }}
        animate={{ opacity: isHovered ? 1 : 0 }} // Fade effect
        transition={{ duration: 0.3 }} // Smooth transition
      />
      <motion.div
        className="cursor-none p-6 flex flex-col text-start relative z-20"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: isHovered ? 1 : 0.8 }} // Change opacity on hover
        transition={{ duration: 0.3 }} // Smooth transition
      >
        {aboutMe.length > 0 ? (
          aboutMe.map((item, index) => (
            <p key={index} className="text-sm md:text-base lg:text-lg mt-2 text-LightBG">
              {item}
            </p>
          ))
        ) : (
          <p className="text-sm md:text-base lg:text-lg mt-2 text-LightBG">
            No information available.
          </p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default AboutMeCard;
