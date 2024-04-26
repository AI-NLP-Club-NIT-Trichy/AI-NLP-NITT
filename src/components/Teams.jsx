import ProfileCard from "./ProfileCard";
import {
  membersData2021,
  membersData2022,
  membersData2023,
  membersData2024,
  membersData2025,
  membersData2026,
} from "../../public/members_data";
import Batch from "./Batch";


const Teams = () => {
  return (
    <div className=" ">
      <div className="w-[min(1200px,100%)] text-white  m-auto p-10 flex flex-col justify-center items-center">
        
        <Batch year="BATCH 2026" membersData={membersData2026} />

        <Batch year="BATCH 2025" membersData={membersData2025} />

        <Batch year="BATCH 2024" membersData={membersData2024} />

        <Batch year="BATCH 2023" membersData={membersData2023} />

        <Batch year="BATCH 2022" membersData={membersData2022} />

        <Batch year="BATCH 2021" membersData={membersData2021} />

       
      </div>
    </div>
  );
};

export default Teams;
