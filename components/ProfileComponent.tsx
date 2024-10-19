'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { accounts } from '@/constants/data';

const UserProfile = () => {
  return (
    <motion.div
      className="relative w-full text-Accent1 rounded-xl overflow-hidden transition-shadow duration-300"
      whileHover={{ scale: 1.05, rotate: 1 }}
    >
      {/* Glass effect with backdrop blur */}
      <motion.div
        className="absolute inset-0 bg-SecBG bg-opacity-30 backdrop-blur-md transition-opacity duration-300"
        initial={{ opacity: 0 }} // Start invisible
        whileHover={{ opacity: 1 }} // Fade in on hover
        transition={{ duration: 0.3 }} // Smooth transition
      />
      <motion.div
        className="p-4 relative z-20 rounded-xl"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }} // Change opacity on hover
        transition={{ duration: 0.3 }} // Smooth transition
      >
        <h3 className="mt-4 text-lg md:text-2xl lg:text-3xl font-semibold text-Accent1">
          Connect with me:
        </h3>
        <div className="flex flex-col mt-2">
          {accounts.map((account) => (
            <a
              key={account.platform}
              href={account.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center py-2 px-4 rounded-md text-LightBG bg-Text hover:bg-Accent1/80 transition-colors mt-2"
            >
              <account.icon className="text-Accent1" />
              <p className="ml-2">{account.platform}</p>
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default UserProfile;
