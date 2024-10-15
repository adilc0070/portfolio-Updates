'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { ContentCardProps } from '@/constatnds/interfaces';
import { FaRegEnvelope } from '@react-icons/all-files/fa/FaRegEnvelope';
import { FaPhoneAlt } from '@react-icons/all-files/fa/FaPhoneAlt';
import { FaBirthdayCake } from '@react-icons/all-files/fa/FaBirthdayCake';
import { FaHome } from '@react-icons/all-files/fa/FaHome';
import { motion } from 'framer-motion'; // Import Framer Motion

const ContentCard: React.FC<ContentCardProps> = ({ title, description, image, address }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className={`relative w-full text-Accent1 rounded-xl overflow-hidden transition-shadow duration-300 ${isHovered ? 'shadow-lg' : 'shadow-md'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.03 }} // Slight scale effect on hover
        >
            {/* Glass effect */}
            <motion.div
                className={`absolute inset-0 bg-LightBG bg-opacity-30 backdrop-blur-md transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                style={{ zIndex: 1 }}
                animate={{ opacity: isHovered ? 1 : 0 }} // Fade effect
            />
            <div className="cursor-none p-4 flex flex-col text-start relative z-20 rounded-xl">
                <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold text-Accent1">{title}</h1>
                <p className="text-sm md:text-base lg:text-lg mt-2 text-Text">{description}</p>
                <hr className="mt-2 border border-LightBG" />
                {address && (
                    <div className="mt-2 font-semibold text-Text">
                        {address.contact.Email && (
                            <div className="flex items-center mt-2">
                                <FaRegEnvelope className="text-Accent1 mr-2" aria-label="Email" />
                                <p className="text-sm md:text-base lg:text-lg break-words">{address.contact.Email}</p>
                            </div>
                        )}
                        {address.contact.Phone && (
                            <div className="flex items-center mt-2">
                                <FaPhoneAlt className="text-Accent1 mr-2" aria-label="Phone number" />
                                <p className="text-sm md:text-base lg:text-lg break-words">{address.contact.Phone}</p>
                            </div>
                        )}
                        {address.contact.DOB && (
                            <div className="flex items-center mt-2">
                                <FaBirthdayCake className="text-Accent1 mr-2" aria-label="Date of Birth" />
                                <p className="text-sm md:text-base lg:text-lg break-words">{address.contact.DOB}</p>
                            </div>
                        )}
                        {address.contact.Address && (
                            <div className="flex items-center mt-2">
                                <FaHome className="text-Accent1 mr-2" aria-label="Address" />
                                <p className="text-sm md:text-base lg:text-lg break-words">{address.contact.Address}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
            {image && (
                <div className="h-48 w-full relative">
                    <Image
                        src={image}
                        alt={`Profile background image for ${title}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                    />
                </div>
            )}
        </motion.div>
    );
};

export default ContentCard;
