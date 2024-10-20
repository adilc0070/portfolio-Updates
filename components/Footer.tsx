'use client';
import React from 'react';
import { accounts } from '@/constants/data'; // Import accounts from your data file

const Footer = () => {
    return (
        <footer className="bg-SecBG text-LightBG py-8 mt-10 shadow-lg">
            <div className="container mx-auto flex flex-col items-center px-6 max-w-7xl">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold mb-2">Let’s Connect</h2>
                    <p className="text-sm">Feel free to reach out through any of these platforms.</p>
                </div>
                <div className="flex flex-wrap justify-center space-x-4 mb-6">
                    {accounts.map((account) => (
                        <a
                            key={account.platform}
                            href={account.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center p-3 rounded-full bg-Accent1 text-LightBG hover:bg-Accent1/80 transition-all duration-200 ease-in-out transform hover:scale-110 shadow-md m-2"
                        >
                            <account.icon className="w-6 h-6" />
                        </a>
                    ))}
                </div>
                <div className="text-center text-sm mt-4">
                    <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
    
