'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface JourneyItem {
  title: string;
  description: string;
  date: string;
}

interface JourneyCardProps {
  careerJourney: JourneyItem[];
  education: JourneyItem[];
}

const JourneyCard: React.FC<JourneyCardProps> = ({ careerJourney, education }) => {
  const [isEducationView, setIsEducationView] = useState(false);

  const toggleView = () => {
    setIsEducationView(!isEducationView);
  };

  const itemsToDisplay = isEducationView ? education : careerJourney;

  return (
    <motion.div className="relative w-full max-w-lg mx-auto rounded-xl overflow-hidden transition-shadow duration-300 bg-mainBG shadow-lg">
      {/* Background blur effect */}
      <motion.div
        className={`absolute inset-0 bg-SecBG bg-opacity-30 backdrop-blur-md`}
        style={{ zIndex: 1 }}
      />
      <motion.div
        className="relative p-6 z-10"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold text-Accent1 mb-4">
          {isEducationView ? 'Education' : 'Career Journey'}
        </h1>
        <button
          onClick={toggleView}
          className="mt-2 mb-4 px-4 py-2 text-white bg-Accent1 rounded-md hover:bg-Accent2 transition duration-300"
        >
          {isEducationView ? 'Show Career Journey' : 'Show Education'}
        </button>
        <div className="relative">
          {itemsToDisplay.length > 0 ? (
            <div className="relative">
              <div className="absolute left-3 top-0 bottom-0 w-1 bg-Accent2 rounded-full" />
              {itemsToDisplay.map((item, index) => (
                <div key={index} className="mb-8 relative">
                  <div className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-Accent1 border-2 border-white shadow-md absolute -left-3 mt-1" />
                    <div className="ml-8 bg-SecBG p-4 rounded-lg shadow-md border border-Accent2 transition-transform duration-300 hover:scale-105">
                      <h2 className="font-semibold text-Accent1">{item.title}</h2>
                      <p className="text-sm text-Text">{item.description}</p>
                      <p className="text-xs text-Text italic">{item.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-Text">No information available.</p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default JourneyCard;
