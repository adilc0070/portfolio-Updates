import AboutMeCard from "@/components/AbouteMe"
import JourneyCard from "@/components/JourneyCard";
import { aboutMe } from "@/constants/data"

const AboutMePage = () => {
  const careerJourney = [
    { 
      title: "Software Developer", 
      description: "Developed web applications and implemented features using React, Node.js, and MongoDB.",
      date: "2020 - Present",
      subItems: [
        { 
          title: "Frontend Development", 
          description: "Worked on the UI for various projects, including e-commerce and SaaS platforms.",
          date: "2020 - 2021"
        },
        { 
          title: "Backend Development", 
          description: "Built RESTful APIs, integrated third-party services, and managed databases.",
          date: "2021 - Present"
        },
      ]
    },
    { 
      title: "Junior Software Developer", 
      description: "Contributed to the development of internal tools and worked on bug fixes and small features.",
      date: "2018 - 2020",
      subItems: [
        {
          title: "Bug Fixes & Feature Enhancements",
          description: "Improved user experience by fixing bugs and adding minor features to the platform.",
          date: "2019 - 2020"
        },
      ]
    },
    {
      title: "Intern",
      description: "Assisted senior developers with coding tasks, testing, and documentation.",
      date: "2017 - 2018"
    },
  ];
  
  const education = [
    { 
      title: "Bachelor's Degree in Computer Science", 
      description: "XYZ University - Specialization in Software Engineering and Data Science.",
      date: "2016 - 2020",
      subItems: [
        {
          title: "Coursework: Data Structures and Algorithms",
          description: "Covered fundamental algorithms, data structures, and problem-solving techniques.",
          date: "2016 - 2017"
        },
        {
          title: "Coursework: Web Development",
          description: "Learned full-stack development, including HTML, CSS, JavaScript, React, and Node.js.",
          date: "2018 - 2019"
        },
        {
          title: "Coursework: Machine Learning",
          description: "Studied machine learning algorithms and built predictive models using Python.",
          date: "2019 - 2020"
        }
      ]
    },
    { 
      title: "High School Diploma", 
      description: "ABC High School - Focused on STEM subjects, excelling in mathematics and computer science.",
      date: "2012 - 2016",
      subItems: [
        {
          title: "Advanced Math",
          description: "Studied calculus, linear algebra, and discrete mathematics.",
          date: "2014 - 2016"
        },
        {
          title: "Computer Science Club",
          description: "Participated in programming competitions and led a small team to build an app.",
          date: "2014 - 2016"
        }
      ]
    }
  ];  
  return (
    <div className="w-full h-full grid gap-4 items-center justify-center">
      <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1">
        {/* First Row */}
        <div className="col-span-2">
          <AboutMeCard aboutMe={aboutMe} />
        </div>
        <div className="col-span-1">
          <JourneyCard careerJourney={careerJourney} education={education} />

        </div>

      </div>
    </div>
  )
}

export default AboutMePage