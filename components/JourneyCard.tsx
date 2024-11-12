'use client';
import React, { useState } from 'react';

interface JourneyItem {
  title: string;
  description: string;
  date: string;
  subItems?: JourneyItem[];  // Optional sub-items for a nested listing
}

interface JourneyCardProps {
  careerJourney: JourneyItem[];
  education: JourneyItem[];
}

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
          <p className="text-sm sm:text-base text-Text">Explore your career or education timeline.</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex sm:flex-col md:flex-row space-x-8 sm:space-x-0 sm:space-y-4 mb-6 border-b-2 border-Accent2">
          <button
            onClick={() => handleTabChange('career')}
            className={`relative py-2 text-lg sm:text-xl font-medium text-Accent1 ${activeTab === 'career' ? 'border-b-4 border-Accent1 text-Accent1' : 'hover:text-Accent1'}`}
          >
            Career Journey
            {activeTab === 'career' && <div className="absolute inset-x-0 bottom-0 h-1 bg-Accent1" />}
          </button>
          <button
            onClick={() => handleTabChange('education')}
            className={`relative py-2 text-lg sm:text-xl font-medium text-Accent1 ${activeTab === 'education' ? 'border-b-4 border-Accent1 text-Accent1' : 'hover:text-Accent1'}`}
          >
            Education
            {activeTab === 'education' && <div className="absolute inset-x-0 bottom-0 h-1 bg-Accent1" />}
          </button>
        </div>

        {/* Vertical Timeline with Multi-level Cards */}
        <div className="relative max-h-[600px] overflow-y-auto custom-scrollbar">
          {itemsToDisplay.length > 0 ? (
            itemsToDisplay.map((item, index) => (
              <div key={index} className="relative mb-8">
                {/* Line Connector */}
                {index > 0 && (
                  <div className="absolute left-3 top-0 bottom-0 w-1 bg-Accent2 rounded-full" />
                )}

                {/* Timeline Card */}
                <div className="flex sm:flex-col md:flex-row items-start space-x-6 sm:space-x-0 sm:space-y-4">
                  <div className="w-8 h-8 bg-Accent1 text-white rounded-full flex items-center justify-center border-2 border-white shadow-md">
                    <span className="text-sm font-semibold">{index + 1}</span>
                  </div>
 
                  {/* Card Content */}
                  <div className="bg-SecBG p-6 rounded-lg shadow-md border border-Accent2 w-full">
                    <h2 className="font-semibold text-Accent1">{item.title}</h2>
                    <p className="text-sm sm:text-base text-Text mt-2">{item.description}</p>
                    <p className="text-xs sm:text-sm text-Text italic mt-4">{item.date}</p>
                    
                    {/* Sub-items if available */}
                    {item.subItems && item.subItems.length > 0 && (
                      <div className="mt-4 pl-6 border-l-2 border-Accent2">
                        {item.subItems.map((subItem, subIndex) => (
                          <div key={subIndex} className="mb-4">
                            <h3 className="font-semibold text-Accent1">{subItem.title}</h3>
                            <p className="text-sm text-Text mt-2">{subItem.description}</p>
                            <p className="text-xs text-Text italic mt-2">{subItem.date}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-Text">No information available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default JourneyCard;
