const Footer = () => {
  return (
    <div className=" min-h-[90px] flex  justify-around items-center bg-black text-white ">
      <div className="  flex justify-center items-center  ">
        <img
          className="h-[2rem] sm:h-[3rem] mx-4  rounded-[100%] "
          src="images/club-logo.jpg"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-[15px] sm:text-[1rem] text-center pt-2">
          Made With ❤️ by AI & NLP NITT
        </p>
      </div>
      <div className="  flex justify-center items-center  ">
        <img
          className="h-[2rem] sm:h-[3rem]  rounded-[100%] "
          src="images/clg-logo.jpeg"
        />
      </div>
    </div>
  );
};

export default Footer;
