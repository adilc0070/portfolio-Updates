// components/UserProfile.js

'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaCodepen } from '@react-icons/all-files/fa/FaCodepen';
import { FaHackerrank } from '@react-icons/all-files/fa/FaHackerrank';
import { FaStackOverflow } from '@react-icons/all-files/fa/FaStackOverflow';
import { FaBitbucket } from '@react-icons/all-files/fa/FaBitbucket';
import { FaGitlab } from '@react-icons/all-files/fa/FaGitlab';
import { FaDev } from '@react-icons/all-files/fa/FaDev';
import {  SiLeetcode} from '@react-icons/all-files/si/SiLeetcode';
import { FaMedium } from '@react-icons/all-files/fa/FaMedium';

const UserProfile = () => {
  const accounts = [
    { platform: 'GitHub', link: 'https://github.com/adilc0070', icon: <FaGithub /> },
    { platform: 'LinkedIn', link: 'https://linkedin.com/in/adilc0070', icon: <FaLinkedin /> },
    { platform: 'Twitter', link: 'https://twitter.com/adilc0070', icon: <FaTwitter /> },
    { platform: 'CodePen', link: 'https://codepen.io/adilc0070', icon: <FaCodepen /> },
    { platform: 'HackerRank', link: 'https://www.hackerrank.com/adilc0070', icon: <FaHackerrank /> },
    { platform: 'Stack Overflow', link: 'https://stackoverflow.com/users/21955122/adil-c', icon: <FaStackOverflow /> },
    { platform: 'GitLab', link: 'https://gitlab.com/adilc0070', icon: <FaGitlab /> },
    { platform: 'Dev.to', link: 'https://dev.to/adilc0070', icon: <FaDev /> },
    { platform: 'LeetCode', link: 'https://leetcode.com/adilc0070/', icon: <SiLeetcode /> },
    { platform: 'Medium', link: 'https://medium.com/@adilc0070', icon: <FaMedium /> },
    { platform: 'Bitbucket', link: 'https://bitbucket.org/adilc0070', icon: <FaBitbucket /> },
  ];

  return (
    <motion.div
      className="relative w-full text-Accent1 rounded-xl overflow-hidden transition-shadow duration-300"
      whileHover={{ scale: 1.05, rotate: 2 }}
    >
      <div className="p-4 bg-SecBG rounded-xl">
        <h3 className="mt-4 text-lg font-semibold text-Accent1">Connect with me:</h3>
        <div className="flex flex-col mt-2">
          {accounts.map((account) => (
            <a
              key={account.platform}
              href={account.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center py-2 px-4 rounded-md text-LightBG bg-Accent1 hover:bg-Accent1/80 transition-colors mt-2"
            >
              {account.icon}
              <p className="ml-2">{account.platform}</p>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default UserProfile;
