import BlogComponent from "@/components/BlogComponent";
import ContentCard from "@/components/ContentCard";
import UserProfile from "@/components/ProfileComponent";
import ProjectComponent from "@/components/ProjectComponent";
import { aboutSideData, introSideData, blogs, projects } from "@/constants/data";

export default function Home() {
  return (
    <div className="w-full h-full grid gap-4 items-center justify-center">
      <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1">
        {/* First Row */}
        <div className="col-span-1">
          <ContentCard {...introSideData} />
        </div>
        <div className="col-span-2 grid gap-2">
          <ContentCard {...aboutSideData} />
          {/* <div className="grid grid-cols-2 gap-2">
            <div>
              <BlogComponent blogs={blogs} />
            </div>
            <div>
              <ProjectComponent projects={projects} />
            </div>
          </div> */}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1">
        {/* Second Row */}
        <div className="col-span-1">
          <UserProfile />
        </div>
        <div className="col-span-1">
          <BlogComponent blogs={blogs} />
        </div>
        <div className="col-span-1">
          <ProjectComponent projects={projects} />
        </div>
      </div>
    </div>
  );
}
