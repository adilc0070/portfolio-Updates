import React from 'react';
import Image from 'next/image';
import { ContentCardProps } from '@/constatnds/interfaces';
import { FaRegEnvelope } from '@react-icons/all-files/fa/FaRegEnvelope';
import { FaPhoneAlt } from '@react-icons/all-files/fa/FaPhoneAlt';
import { FaBirthdayCake } from '@react-icons/all-files/fa/FaBirthdayCake';
import { FaHome } from '@react-icons/all-files/fa/FaHome';

const ContentCard: React.FC<ContentCardProps> = ({ title, description, image, address }) => {
    return (
        <div className="w-full text-black rounded-lg overflow-hidden shadow-md relative bg-white hover:shadow-lg transition-shadow duration-200">
            <div className="p-4 flex flex-col text-start">
                <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold">{title}</h1>
                <p className="text-sm md:text-base lg:text-lg mt-2">{description}</p>
                <hr className="mt-2 border border-red-700" />
                {address && (
                    <div className="mt-2 font-semibold">
                        {address.contact.Email && (
                            <div className="flex items-center mt-2">
                                <FaRegEnvelope className="text-gray-600 mr-2" aria-label="Email" />
                                <p className="text-sm md:text-base lg:text-lg break-words">{address.contact.Email}</p>
                            </div>
                        )}
                        {address.contact.Phone && (
                            <div className="flex items-center mt-2">
                                <FaPhoneAlt className="text-gray-600 mr-2" aria-label="Phone number" />
                                <p className="text-sm md:text-base lg:text-lg break-words">{address.contact.Phone}</p>
                            </div>
                        )}
                        {address.contact.DOB && (
                            <div className="flex items-center mt-2">
                                <FaBirthdayCake className="text-gray-600 mr-2" aria-label="Date of Birth" />
                                <p className="text-sm md:text-base lg:text-lg break-words">{address.contact.DOB}</p>
                            </div>
                        )}
                        {address.contact.Address && (
                            <div className="flex items-center mt-2">
                                <FaHome className="text-gray-600 mr-2" aria-label="Address" />
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
        </div>
    );
};

export default ContentCard;
