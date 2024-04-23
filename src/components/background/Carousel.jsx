import { Carousel } from "antd";
import "./Background.css";

const elements = [
  {
    src: "/images/gallery/ai_lang_pro_2024/15.jpeg",
    descripton: "AI Lang Pro 24 1st Prize",
  },
  {
    src: "/images/gallery/ai_lang_pro_2024/13.jpeg",
    descripton: "AI Lang Pro 24 2nd Prize",
  },
  {
    src: "/images/gallery/ai_lang_pro_2024/14.jpeg",
    descripton: "AI Lang Pro 24 3rd Prize",
  },
];

const carouselElements = elements.map((element) => {
  return (
    <div>
      <img src={element.src} className="h-[200px] w-[400px] object-cover" />
      <p className="text-white mt-2">{element.descripton}</p>
    </div>
  );
});

const CarouselElement = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className="bg-black text-white">
      <Carousel
        afterChange={onChange}
        className="h-[300px] w-[400px] border-4 p-2 rounded-xl border-white"
      >
        {carouselElements}
      </Carousel>
    </div>
  );
};
export default CarouselElement;
