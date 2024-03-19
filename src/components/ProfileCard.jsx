/* eslint-disable react/prop-types */
import { FaLinkedin } from "react-icons/fa";

const ProfileCard = ({ details }) => {
  const { name, position, batch, linkedin, imagePath } = details;

  return (
    <div className="group relative w-60 rounded-xl  hover:scale-105 overflow-hidden hover:duration-300 shadow-lg group:">
      <img className="w-full" src={imagePath} alt={`${name}'s profile`} />

      <div className="absolute  collapse group-hover:visible group-hover:duration-500 group-hover:transition-all  p-4 inset-0 flex flex-col justify-end gap-5 items-center bg-black bg-opacity-50 text-white">
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-3xl text-gray-300"
        >
          <FaLinkedin />
        </a>
        <h2 className="text-2xl text-center bold font-semibold">{name}</h2>
        {/* <p className="text-sm">{position}</p> */}
      </div>
    </div>
  );
};

export default ProfileCard;
