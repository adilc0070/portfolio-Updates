import ContentCard from "@/components/ContentCard"
import { introSideData } from "@/constants/data"

const AboutMePage = () => {
  return (
    <div className="w-full h-full grid gap-4 items-center justify-center">
      <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1">
        {/* First Row */}
        <div className="col-span-2">
          <ContentCard {...introSideData} />
        </div>

      </div>
    </div>
  )
}

export default AboutMePage