import { Link } from "react-router-dom";

const Navbar = () => {
  const links = ["about", "teams", "events", "gallery"];

  return (
    <nav className="flex p-4 lg:justify-end md:justify-end justify-center  items-center [&>*]:mx-2">
      <Link to={"/"}>HOME</Link>
      {links.map((link) => {
        // console.log(link);
        return <Link key={link} to={`/${link}`}>{link.toUpperCase()}</Link>;
      })}
    </nav>
  );
};

export default Navbar;
