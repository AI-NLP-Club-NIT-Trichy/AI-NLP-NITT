import ProfileCard from "./ProfileCard";

const Teams = () => {
  const details = {
    name: "Vivek Kumar",
    position: "Member",
    linkedin: "https://www.linkedin.com/in/vivekkumaryadaav/",
    imagePath: "./images/members/Tanmoy_20.jpg",
  };

  return (
    <div>
      <ProfileCard details={details} />
    </div>
  );
};

export default Teams;
