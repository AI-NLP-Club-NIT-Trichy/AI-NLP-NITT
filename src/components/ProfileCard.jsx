import { useState } from "react";

const ProfileCard = ({ details }) => {
  const { name, position, linkedin, imagePath } = details;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative w-64 rounded-xl overflow-hidden shadow-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="w-full" src={imagePath} alt={`${name}'s profile`} />
      {isHovered && (
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-sm">{position}</p>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 underline"
          >
            LinkedIn Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
