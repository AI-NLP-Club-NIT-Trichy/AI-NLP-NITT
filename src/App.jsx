import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Teams from "./components/Teams";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import ParticlesBG from "./components/ParticlesBG/ParticlesBG";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/teams" element={<Teams />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
