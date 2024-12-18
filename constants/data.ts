// Social Media Accounts Data
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

import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaCodepen } from '@react-icons/all-files/fa/FaCodepen';
import { FaHackerrank } from '@react-icons/all-files/fa/FaHackerrank';
import { FaStackOverflow } from '@react-icons/all-files/fa/FaStackOverflow';
import { FaBitbucket } from '@react-icons/all-files/fa/FaBitbucket';
import { FaGitlab } from '@react-icons/all-files/fa/FaGitlab';
import { FaDev } from '@react-icons/all-files/fa/FaDev';
import { SiLeetcode } from '@react-icons/all-files/si/SiLeetcode';
import { FaMedium } from '@react-icons/all-files/fa/FaMedium';

import { AboutMe, Blog } from './interfaces';

export const navItems = [
  { name: '', icon: FaHome },
  { name: 'About Me', icon: FaUser },
  { name: 'Projects', icon: FaProjectDiagram },
  { name: 'Skills', icon: FaCode },
  { name: 'Experiences', icon: FaBriefcase },
  { name: 'Blogs', icon: FaBlog },
  { name: 'Certifications', icon: FaCertificate },
  { name: 'Resume', icon: FaFileAlt },
  { name: 'Testimonials', icon: FaComments },
  { name: 'Contact', icon: FaEnvelope }
];

export const accounts = [
  { platform: 'GitHub', link: 'https://github.com/adilc0070', icon: FaGithub },
  { platform: 'LinkedIn', link: 'https://linkedin.com/in/adilc0070', icon: FaLinkedin },
  { platform: 'Twitter', link: 'https://twitter.com/adilc0070', icon: FaTwitter },
  { platform: 'CodePen', link: 'https://codepen.io/adilc0070', icon: FaCodepen },
  { platform: 'HackerRank', link: 'https://www.hackerrank.com/adilc0070', icon: FaHackerrank },
  { platform: 'Stack Overflow', link: 'https://stackoverflow.com/users/21955122/adil-c', icon: FaStackOverflow },
  { platform: 'GitLab', link: 'https://gitlab.com/adilc0070', icon: FaGitlab },
  { platform: 'Dev.to', link: 'https://dev.to/adilc0070', icon: FaDev },
  { platform: 'LeetCode', link: 'https://leetcode.com/adilc0070/', icon: SiLeetcode },
  { platform: 'Medium', link: 'https://medium.com/@adilc0070', icon: FaMedium },
  { platform: 'Bitbucket', link: 'https://bitbucket.org/adilc0070', icon: FaBitbucket },
];




export const profileSideData = {
  contact: {
    Email: 'adilc0070@gmail.com',
    Phone: '+91 8111 934 845',
    DOB: '09/06/2003',
    Address: 'Malappuram, Kerala',
  }
};

export const introSideData = {
  title: 'Introduction',
  description: `Passionate MERN Stack Developer with hands-on experience in designing, developing, and deploying web applications.
    Proficient in React, Node.js, Express, and MongoDB with a strong foundation in front-end and back-end technologies. 
    Adept at collaborating with cross-functional teams to deliver robust software solutions.`,
  // image: '/images/adilc.png',
  address: { ...profileSideData },
};

export const aboutSideData = {
  title: 'About Me',
  description: `Hello! I’m Adil C, a dedicated MERN Stack Developer from Kerala, India. With a strong foundation in both frontend and backend technologies, I specialize in designing, developing, and deploying web applications that are both functional and user-friendly. My expertise includes React, Node.js, Express, and MongoDB, which I leverage to create dynamic and scalable solutions.

I am passionate about transforming complex problems into elegant, intuitive code. My approach to web development focuses on delivering solutions that are not only attractive but also align perfectly with your brand’s identity. Whether working on an e-learning platform, an e-commerce site, or interactive web applications, I strive to ensure that each project is visually engaging and highly effective.

My background in Computer Applications and practical experience with a variety of projects enable me to bring a unique, personal touch to every endeavor. I am committed to capturing your message creatively and delivering results that exceed expectations. Having worked with renowned brands, I am well-versed in creating impactful web designs that enhance user experience and functionality.`,
};

export const blogs: Blog[] = [
  {
    id: 1,
    title: 'Blog One',
    link: '/blogs/1',
    image: '/images/adilc.png',
    description: 'This is a brief description of blog one.',
  },
  {
    id: 2,
    title: 'Blog Two',
    link: '/blogs/2',
    image: '/images/adilc.png',
    description: `This is a brief description of blog two.brief description of
     blog two.brief description of blog two.brief description of blog two.brief description
      of blog two.brief description of blog two.brief description of blog two.brief d
      escription of blog two. escription of blog two escription of blog twoescription of blog twoescription of blog twoescription of blog twoescription of blog twoescription of blog twoescription of blog twoescription of blog twoescription of blog twoescription of blog two`,
  },
  // Add more blog objects as needed
];

// constansts/data.ts
export const projects = [
  {
    title: 'Academicases - E-Learning Platform',
    description: 'A full-featured A full-featured e-learning platform built with React, Node.js, and MongoDB.A full-featured e-learning platform built with React, Node.js, and MongoDB. e-learning platform built with React, Node.js, eatured A full-featured e-learning platform built with React, Node.js, and MongoDB.A full-featured e-learning platform built with React, Node.js, and MongoDB. e-learning platform built with React, Node.js, and MongoDB.',
    image: '/images/projects/academicases.png', // Update with your actual image paths
    link: '/projects/academicases', // Update with your actual project links
  },
  {
    title: 'PageFusion - PDF Processing Web Application',
    description: 'A dynamic web application focusing on PDF uploading and processing.',
    image: '/images/projects/pageFusion.png',
    link: '/projects/pagefusion',
  },
  {
    title: 'Rustic Lens - E-Commerce Platform',
    description: 'An e-commerce platform dedicated to cameras and gadgets.',
    image: '/images/projects/rusticlens.png',
    link: '/projects/rusticlens',
  },
  // {
  //   title: 'User Management System',
  //   description: 'A hands-on project for managing users with secure authentication.',
  //   image: '/images/projects/user-management.jpg',
  //   link: '/projects/user-management',
  // },
];

export const aboutMe: AboutMe = [
  `Hello! I'm Adil C, a dedicated and innovative MERN Stack Developer with a passion for creating 
  and dynamic and user-friendly web applications. My journey into technology began during my undergraduate 
  studies at Calicut University, where I earned a Bachelor of Computer Applications. This academic 
  experience was pivotal in shaping my understanding of computer science principles and provided me 
  with a solid foundation in programming and software development.`
  ,
  `During my time at university, I was introduced to various programming languages and frameworks, 
  but it was web development that truly captured my interest. I found myself drawn to the process 
  of building applications that could solve real-world problems and enhance user experiences. This 
  curiosity led me to delve deeper into technologies that empower modern web development, 
  particularly the MERN stack—comprising MongoDB, Express.js, React, and Node.js.`
  ,
  `With each project I undertook, my enthusiasm for web development only grew stronger. I immersed 
  myself in learning the intricacies of each technology within the MERN stack. MongoDB offered me a 
  powerful, flexible database solution; Express.js simplified the server-side logic; React provided 
  a robust framework for building dynamic user interfaces; and Node.js allowed me to create scalable 
  network applications. This combination has enabled me to develop robust applications that are not 
  only functional but also efficient and maintainable.`
  ,
  `As I progressed through my studies, I actively sought out opportunities to apply my knowledge in
  practical settings. I participated in internships, collaborated on group projects, and engaged in
  coding challenges that pushed my boundaries. Each experience reinforced my commitment to
  continuous learning and adaptation, essential traits in the ever-evolving field of technology. I have
  come to appreciate the importance of collaboration and feedback, as they are crucial for personal
  and professional growth.`
  ,
  `Now, with a strong foundation in the MERN stack, I am excited to tackle real-world challenges
  through technology. My goal is to create impactful applications that not only meet user needs but
  also enhance their overall experience. I am continually looking for ways to expand my skill set and
  contribute to innovative projects that make a difference.`
]