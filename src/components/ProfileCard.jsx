/* eslint-disable react/prop-types */
import { FaLinkedin } from "react-icons/fa";

const ProfileCard = ({ details }) => {
  const { name, position,batch, linkedin, imagePath } = details;

  return (
    <div className="group relative w-60 rounded-xl border hover:scale-105 overflow-hidden hover:duration-300 shadow-lg group:">
      <img className="w-full" src={imagePath} alt={`${name}'s profile`} />
      <div className="absolute  collapse group-hover:visible group-hover:duration-500 group-hover:transition-all  p-4 inset-0 flex flex-col justify-center gap-5 items-center bg-black bg-opacity-50 text-white">
        <h2 className="text-3xl bold font-semibold">{name}</h2>
        {/* <p className="text-sm">{position}</p> */}
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
            className="mt-2 text-4xl text-gray-300"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;