/* eslint-disable react/prop-types */
import { FaLinkedin } from "react-icons/fa";
import clsx from "classnames";

const ProfileCard = ({ details }) => {
  const { name, position, batch, linkedin, imagePath } = details;

  return (
    <div className="flex  flex-col  bg-gray-800 rounded-xl">
      <div className="group relative w-60 rounded-xl  hover:scale-105 overflow-hidden hover:duration-300 shadow-lg group:">
        <img className="w-full" src={imagePath} alt={`${name}'s profile`} />

        <div className="absolute  collapse group-hover:visible group-hover:duration-500 group-hover:transition-all  p-4 inset-0 flex flex-col justify-end gap-2 items-center bg-black bg-opacity-50 text-white">
          {linkedin !== "unavailable" && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx("mt-2 text-4xl text-gray-300", {
                [linkedin !== "unavailable" ? "block" : "hidden"]: true,
              })}
            >
              <FaLinkedin />
            </a>
          )}
          <h2 className="text-2xl text-center bold font-semibold">{name}</h2>
        </div>
      </div>
      {position != "Member" && (
        <h2 className="text-xl  p-1 text-white  text-center">{position}</h2>
      )}
    </div>
  );
};

export default ProfileCard;
