import AboutMeCard from "@/components/AbouteMe"
import JourneyCard from "@/components/JourneyCard";
import { aboutMe } from "@/constants/data"

const AboutMePage = () => {
  const careerJourney = [
    { title: "Software Developer", description: "Developed web applications", date: "2020 - Present" },
    { title: "Intern", description: "Assisted in software development", date: "2019" },
  ];

  const education = [
    { title: "Bachelor's Degree in Computer Science", description: "XYZ University", date: "2016 - 2020" },
    { title: "High School Diploma", description: "ABC High School", date: "2012 - 2016" },
  ];
  return (
    <div className="w-full h-full grid gap-4 items-center justify-center">
      <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1">
        {/* First Row */}
        <div className="col-span-2">
          <AboutMeCard aboutMe={aboutMe} />
        </div>
        <div className="col-span-1 bg-SecBG w-full h-full">
          <JourneyCard careerJourney={careerJourney} education={education} />

        </div>

      </div>
    </div>
  )
}

export default AboutMePage