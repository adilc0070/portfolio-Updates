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

          <div className="grid grid-rows-2 gap-4 mt-6">
            {/* Services Section (with simple horizontal scroll) */}
            <div className="shadow-2xl shadow-slate-400 rounded-2xl flex flex-col  w-full h-50 bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 overflow-x-auto">
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <div className="flex space-x-4 overflow-x-auto">
                <div className="flex-shrink-0 bg-gray-800 text-white w-40 h-40 rounded-xl flex items-center justify-center">Service 1</div>
                <div className="flex-shrink-0 bg-gray-800 text-white w-40 h-40 rounded-xl flex items-center justify-center">Service 2</div>
                <div className="flex-shrink-0 bg-gray-800 text-white w-40 h-40 rounded-xl flex items-center justify-center">Service 3</div>
                <div className="flex-shrink-0 bg-gray-800 text-white w-40 h-40 rounded-xl flex items-center justify-center">Service 4</div>
                <div className="flex-shrink-0 bg-gray-800 text-white w-40 h-40 rounded-xl flex items-center justify-center">Service 5</div>
              </div>
            </div>

            {/* Goals Section */}
            <div className="grid grid-cols-2 gap-6 justify-items-center items-center">
              <div className="shadow-2xl shadow-slate-400 flex flex-col items-center justify-center w-40 h-40 rounded-xl bg-gray-100">
                <h4 className="font-semibold">Goal 1</h4>
                <p className="text-sm">Description for Goal 1</p>
              </div>
              <div className="shadow-2xl shadow-slate-400 flex flex-col items-center justify-center w-40 h-40 rounded-xl bg-gray-100">
                <h4 className="font-semibold">Goal 2</h4>
                <p className="text-sm">Description for Goal 2</p>
              </div>
            </div>

            {/* Projects Section */}
            <div className="grid grid-cols-2 gap-2 justify-items-center items-center">
              <div className="shadow-2xl shadow-slate-400 flex flex-col items-center justify-center w-40 h-40 rounded-xl bg-gray-200">
                <h4 className="font-semibold">Project 1</h4>
                <p className="text-sm">Description for Project 1</p>
              </div>
              <div className="shadow-2xl shadow-slate-400 flex flex-col items-center justify-center w-40 h-40 rounded-xl bg-gray-200">
                <h4 className="font-semibold">Project 2</h4>
                <p className="text-sm">Description for Project 2</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default AboutMePage