'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { navItems } from '@/constants/data';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-SecBG text-LightBG py-4 shadow-lg sticky top-0 z-50 mt-2 rounded-xl">
            <div className="container mx-auto flex justify-between items-center px-4 max-w-7xl">
                <div className="md:hidden">
                    <button onClick={toggleMenu} aria-expanded={isOpen} className="focus:outline-none">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
                <ul className={`md:flex md:items-center space-x-2 absolute md:static left-0 w-full md:w-auto transition-all duration-300 ease-in-out overflow-x-auto custom-scrollbar ${isOpen ? 'top-16 opacity-100' : 'top-[-490px] opacity-0 md:opacity-100'}`}>
                    {navItems.map(({ name, icon: Icon }) => (
                        <li key={name} className="inline-block">
                            <Link href={`/${name.toLowerCase().replace(' ', '-')}`} className="text-lg px-4 py-2 flex items-center space-x-2 hover:text-Text transition-colors duration-200">
                                <Icon className="w-5 h-5 text-Accent1" /> 
                                <span>{name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
