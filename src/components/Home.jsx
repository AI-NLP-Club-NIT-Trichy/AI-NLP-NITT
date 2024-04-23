import Carousel from "./Carousel/Carousel";
import GlyphButton from "./glyph_button/GlyphButton";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://www.marcoguglie.it/Codepen/AnimatedHeaderBg/demo-1/img/demo-1-bg.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="relative w-full h-[calc(100vh-80px-67.2px)]  sm:h-[calc(100vh-80px-90px)] overflow-hidden bg-black"
    >
      <div className="text-center w-full h-full text-7xl absolute top-0 left-0 z-10 flex flex-col items-center justify-evenly">
        <div>
          <GlyphButton text={"AI & NLP"} speed={0.4} />
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default Home;
