import ProfileCard from "./ProfileCard";
import {
  membersData2021,
  membersData2022,
  membersData2023,
  membersData2025,
  membersData2026,
} from "../../public/members_data";

const Teams = () => {
  return (
    <div className="w-[min(1200px,100%)] m-auto p-10 flex flex-col justify-center items-center">
      <div className="text-4xl  w-full font-bold text-start p-5">
        BATCH 2026
      </div>
      <div className="flex flex-wrap justify-center items-center gap-5">
        {membersData2026.map((details, index) => {
          return <ProfileCard details={details} key={index} />;
        })}
      </div>

      <div className="text-4xl mt-10 w-full font-bold text-start p-5">
        BATCH 2025
      </div>
      <div className="flex flex-wrap justify-center items-center gap-5">
        {membersData2025.map((details, index) => {
          return <ProfileCard details={details} key={index} />;
        })}
      </div>

      <div className="text-4xl mt-10 p-4 w-full font-bold text-start p-5">
        BATCH 2023
      </div>
      <div className="flex flex-wrap justify-center items-center gap-5">
        {membersData2023.map((details, index) => {
          return <ProfileCard details={details} key={index} />;
        })}
      </div>

      <div className="text-4xl mt-10 w-full font-bold text-start p-5">
        BATCH 2022
      </div>
      <div className="flex flex-wrap justify-center items-center gap-5">
        {membersData2022.map((details, index) => {
          return <ProfileCard details={details} key={index} />;
        })}
      </div>

      <div className="text-4xl mt-10 w-full font-bold text-start p-5">
        BATCH 2021
      </div>
      <div className="flex flex-wrap justify-center items-center gap-5">
        {membersData2021.map((details, index) => {
          return <ProfileCard details={details} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Teams;
