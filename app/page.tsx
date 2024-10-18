import ContentCard from "@/components/ContentCard";
import UserProfile from "@/components/ProfileComponent";
import { aboutSideData, introSideData } from "@/constatnds/data";

export default function Home() {
  return (
    <div className="w-full h-full grid gap-4 items-center justify-center">
      <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1">
        {/* First Row */}
        <div className="col-span-1">
          <ContentCard {...introSideData} />
          
        </div>
        <div className="col-span-2 grid gap-2">
          <div className="row-span-1">
            <ContentCard {...aboutSideData} />
          </div>
          <div className="row-span-2">
            <ContentCard {...aboutSideData} />
            <ContentCard {...aboutSideData} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1">
        {/* Second Row */}
        <div className="col-span-1">
        <UserProfile/>
        </div>
        <div className="col-span-1">
          <ContentCard {...introSideData} />
        </div>
      </div>
    </div>
  );
}
