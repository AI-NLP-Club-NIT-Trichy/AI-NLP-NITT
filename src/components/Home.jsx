import GlyphButton from "./glyph_button/GlyphButton";

const Home = () => {
  return (
    <div className="w-full h-[80vh] flex justify-center items-center ">
      <div className="w-[350px] text-center text-5xl">
        <GlyphButton text={"AI & NLP"} speed={0.3} />
      </div>
    </div>
  );
};

export default Home;
