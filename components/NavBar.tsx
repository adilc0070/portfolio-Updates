'use client';
import React, { useState } from 'react';
import { FaHome } from '@react-icons/all-files/fa/FaHome';
import { FaUser } from '@react-icons/all-files/fa/FaUser';
import { FaProjectDiagram } from '@react-icons/all-files/fa/FaProjectDiagram';
import { FaCode } from '@react-icons/all-files/fa/FaCode';
import { FaBriefcase } from '@react-icons/all-files/fa/FaBriefcase';
import { FaBlog } from '@react-icons/all-files/fa/FaBlog';
import { FaCertificate } from '@react-icons/all-files/fa/FaCertificate';
import { FaFileAlt } from '@react-icons/all-files/fa/FaFileAlt';
import { FaComments } from '@react-icons/all-files/fa/FaComments';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#06121B] text-white py-4 shadow-lg sticky top-0 z-50 mt-2 rounded-md">
            <div className="container mx-auto flex justify-between items-center px-4 max-w-5xl">
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
                <ul className={`md:flex md:items-center space-x-2 absolute md:static left-0 w-full md:w-auto  transition-all duration-300 ease-in-out overflow-x-auto custom-scrollbar ${isOpen ? 'top-16 opacity-100' : 'top-[-490px] opacity-0 md:opacity-100'}`}>
                    {[
                        { name: 'Home', icon: FaHome },
                        { name: 'About Me', icon: FaUser },
                        { name: 'Projects', icon: FaProjectDiagram },
                        { name: 'Skills', icon: FaCode },
                        { name: 'Experience', icon: FaBriefcase },
                        { name: 'Blogs', icon: FaBlog },
                        { name: 'Certifications', icon: FaCertificate },
                        { name: 'Resume', icon: FaFileAlt },
                        { name: 'Testimonials', icon: FaComments },
                        { name: 'Contact', icon: FaEnvelope }
                    ].map(({ name, icon: Icon }) => (
                        <li key={name} className="inline-block">
                            <a href={`#${name.toLowerCase().replace(' ', '')}`} className=" text-lg px-4 py-2 flex items-center space-x-2 hover:text-orange-400 transition-colors duration-200">
                                <Icon className="w-5 h-5" /> {/* Render Icon */}
                                <span>{name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
