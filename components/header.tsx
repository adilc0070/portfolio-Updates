const ProfileHeader = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center relative">
      {/* Background Image */}
      <div className="relative w-full h-[250px] md:h-[394px] rounded-3xl bg-black  overflow-hidden">
        <img
          src="/images/26.png"
          alt="banner image"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute bottom-0 text-white bg-transparent text-center mt-4 px-4 flex flex-col items-center">
        <img
          src="/images/26.png"
          alt="profile image"
          className="w-32 h-32 rounded-full border-4 border-white"
        />
        <h1 className="text-lg md:text-2xl lg:text-4xl">Profile Name</h1>
        <p className="text-sm md:text-base lg:text-lg">Profile Description</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
