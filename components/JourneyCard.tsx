'use client';
import { JourneyCardProps } from '@/constants/interfaces';
import React, { useState } from 'react';

const JourneyCard: React.FC<JourneyCardProps> = ({ careerJourney, education }) => {
  const [activeTab, setActiveTab] = useState<'career' | 'education'>('career');

  const handleTabChange = (tab: 'career' | 'education') => {
    setActiveTab(tab);
  };

  const itemsToDisplay = activeTab === 'education' ? education : careerJourney;

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden bg-SecBG shadow-lg">
      {/* Background Blur */}
      <div className="absolute inset-0 bg-SecBG bg-opacity-30 backdrop-blur-md" style={{ zIndex: 1 }} />

      <div className="relative p-8 z-10">
        {/* Title */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-Accent1">
            {activeTab === 'education' ? 'Your Educational Journey' : 'Career Milestones'}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-Text">My {activeTab === 'education' ? 'Education' : 'Career'} Experience Overview</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap space-x-4 sm:space-x-8 mb-6 border-b-2 border-Accent2">
          <button
            onClick={() => handleTabChange('career')}
            className={`relative py-2 text-lg sm:text-xl font-medium text-Accent1 transition-all duration-300 ease-in-out ${activeTab === 'career'
              ? 'border-b-4 border-Accent1 text-Accent1 transform scale-105 shadow-lg'
              : 'hover:text-Accent1 hover:bg-Accent2/20 rounded-lg py-2 px-4 transition-all duration-300 ease-in-out'
              }`}
          >
            Career Journey
            {activeTab === 'career' && <div className="absolute inset-x-0 bottom-0 h-1 bg-Accent1" />}
          </button>
          <button
            onClick={() => handleTabChange('education')}
            className={`relative py-2 text-lg sm:text-xl font-medium text-Accent1 transition-all duration-300 ease-in-out ${activeTab === 'education'
              ? 'border-b-4 border-Accent1 text-Accent1 transform scale-105 shadow-lg'
              : 'hover:text-Accent1 hover:bg-Accent2/20 rounded-lg py-2 px-4 transition-all duration-300 ease-in-out'
              }`}
          >
            Education
            {activeTab === 'education' && <div className="absolute inset-x-0 bottom-0 h-1 bg-Accent1" />}
          </button>
        </div>

        {/* Vertical Timeline with Multi-level Cards */}
        <div className="relative max-h-[600px] overflow-y-auto custom-scrollbar px-6 py-8 sm:px-4 sm:py-6" style={{ backgroundColor: 'hsl(var(--mainBG))' }}>
          <div className="flex flex-col space-y-12">
            {itemsToDisplay.length > 0 ? (
              itemsToDisplay.map((item, index) => (
                <div key={index} className="relative">

                  {/* Timeline Card */}
                  <div className="flex flex-col sm:flex-row items-start space-x-6 sm:space-x-0 sm:space-y-4">
                    {/* Card Content */}
                    <div className="bg-[hsl(var(--LightBG))] p-6 rounded-lg shadow-md border border-[hsl(var(--foreground))] w-full max-w-lg">
                      <h2 className="font-semibold text-[hsl(var(--Accent1))] text-2xl sm:text-xl mb-4">{item.title}</h2>
                      <p className="text-base sm:text-sm text-LightBG mb-4">{item.description}</p>
                      <p className="text-xs sm:text-xs text-LightBG italic">{item.date}</p>

                      {/* Sub-items if available */}
                      {item.subItems && item.subItems.length > 0 && (
                        <div className="mt-6 space-y-4">
                          {item.subItems.map((subItem, subIndex) => (
                            <div key={subIndex} className="p-4 rounded-lg bg-[hsl(var(--SecBG))] shadow-sm">
                              <h3 className="font-semibold text-[hsl(var(--Accent1))] text-lg sm:text-md">{subItem.title}</h3>
                              <p className="text-sm sm:text-xs text-LightBG mt-2">{subItem.description}</p>
                              <p className="text-xs sm:text-xs text-LightBG italic mt-2">{subItem.date}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div> 
                  </div>
                </div>
              )) 
            ) : (
              <p className="text-sm text-LightBG">No information available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyCard;