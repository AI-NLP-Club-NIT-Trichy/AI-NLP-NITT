import GlyphButton from './glyph_button/GlyphButton'
import ParticlesBG from './ParticlesBG/ParticlesBG'
const Home = () => {
  return (
    <div className="relative w-full h-[calc(100vh-80px-67.2px)]  sm:h-[calc(100vh-80px-90px)] ">
      <ParticlesBG />
      <div className="text-center w-full h-full text-7xl absolute top-0 left-0 z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4">
          <GlyphButton text={'AI & NLP'} speed={0.4} />
        </div>
      </div>
    </div>
  )
}

export default Home
