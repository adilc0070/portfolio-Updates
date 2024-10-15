import Image from 'next/image';

const ProfileHeader = ({
  name = "Profile Name",
  description = "Profile Description",
  bannerImage = "/images/Banner.png",
  profileImage = "/images/adilc.png"
}) => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center relative">
      {/* Background Image */}
      <div className="relative w-full h-[250px] md:h-[394px] rounded-3xl bg-SecBG overflow-hidden">
        <Image
          src={bannerImage}
          alt="Profile background image"
          layout="fill"
          objectFit="cover"
          className="rounded-3xl"
        />
      </div>
      <div className="absolute bottom-0 text-LightBG text-center mt-4 px-4 flex flex-col items-center">
        <Image
          src={profileImage}
          alt={name}
          width={150} // Set width for better optimization
          height={150} // Set height for better optimization
          className="rounded-full border-4 border-Accent1"
        />
        <h1 className="text-lg md:text-2xl lg:text-4xl text-Accent1">{name}</h1>
        <p className="text-sm md:text-base lg:text-lg text-Text">{description}</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
