import Image from 'next/image';

const ProfileHeader = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow-lg">
      {/* Background Image */}
      <div className="relative h-[330px] ">
        <Image
          src="/images/26.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Profile Picture and Info */}
      <div className="relative flex flex-col items-center -mt-36">
        <div className="w-rounded-full border-4 border-white overflow-hidden">
          <Image
            src="/path-to-profile-image.jpg"
            alt="Profile"
            width={96}
            height={96}
            className="object-cover"
          />
        </div>
        <h2 className="mt-3 text-lg font-bold">Mathew Anderson</h2>
        <p className="text-gray-500">D</p>
      </div>

      {/* Statistics Section */}
      <div className="flex justify-around text-center mt-4">
        <div>
          <p className="text-lg font-bold">938</p>
          <p className="text-sm text-gray-500">Posts</p>
        </div>
        <div>
          <p className="text-lg font-bold">3,586</p>
          <p className="text-sm text-gray-500">Followers</p>
        </div>
        <div>
          <p className="text-lg font-bold">2,659</p>
          <p className="text-sm text-gray-500">Following</p>
        </div>
      </div>

      {/* Social Icons & Add Story Button */}
      <div className="flex justify-center mt-4 space-x-4">
        <a href="#" className="text-blue-600">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-blue-400">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-pink-600">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-red-600">
          <i className="fab fa-youtube"></i>
        </a>
        <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
          Add to Story
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-around border-t mt-6 pt-2">
        <button className="text-blue-600 font-semibold">Profile</button>
        <button className="text-gray-600">Followers</button>
        <button className="text-gray-600">Friends</button>
        <button className="text-gray-600">Gallery</button>
      </div>
    </div>
  );
};

export default ProfileHeader;
