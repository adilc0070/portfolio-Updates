'use client';
import React from 'react';
import { accounts } from '@/constants/data'; // Import accounts from your data file

const Footer = () => {
    return (
        <footer className="bg-SecBG text-LightBG py-6 mt-10 shadow-lg">
            <div className="container mx-auto flex flex-col items-center px-4 max-w-7xl">
                <div className="text-center mb-4">
                    <h2 className="text-xl font-semibold">Let’s Connect</h2>
                    <p className="text-sm mt-1">Feel free to reach out through any of these platforms.</p>
                </div>
                <div className="flex justify-center space-x-4 mb-4">
                    {accounts.map((account) => (
                        <a
                            key={account.platform}
                            href={account.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-Accent1 text-LightBG hover:bg-Accent1/80 transition-colors"
                        >
                            <account.icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>
                <div className="text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
