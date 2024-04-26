import { Carousel } from "antd";

const elements = [
  {
    src: "/images/gallery/ai_lang_pro_2024/16.jpeg",
    descripton: "Snap of AI Lang Pro Event 2024: Financial Relation Prediction",
  },
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

      <img src={element.src} className="h-[99%] w-full object-cover" />
      <p className="text-white mt-2">{element.descripton}</p>

    </div>
  );
});

const CarouselElement = () => {
  return (
    <div>
      <Carousel
        autoplay

        className="flex flex-col h-[34vh]   sm:h-[75vh] sm:max-h-[60vhpx] w-[90vw] sm:max-w-[70vw] border-4 p-2 rounded-xl border-white"

      >
        {carouselElements}
      </Carousel>
    </div>
  );
};
export default CarouselElement;
