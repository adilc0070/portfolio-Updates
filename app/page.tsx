import ContentCard from "@/components/ContentCard";
import { aboutSideData, introSideData,  } from "@/constatnds/data";
export default function Home() {


  return (
    <div className="w-full h-full grid grid-row gap-4 items-center justify-center">

      <div className="w-full grid gap-4 grid-cols-3 max-sm:grid-cols-1 " >
        <div className="w-full col-span-1">
          <ContentCard {...introSideData} />
        </div>
        <div className="w-full col-span-2">
          <ContentCard {...aboutSideData} />
        </div>
      </div>
      <div className="w-full grid gap-4 grid-cols-3 max-sm:grid-cols-1 " >
        <div className="w-full col-span-1">
          <ContentCard {...introSideData} />
        </div>
        <div className="w-full col-span-1">
          <ContentCard {...introSideData} />
        </div>
      </div>
    </div>
  );
}
