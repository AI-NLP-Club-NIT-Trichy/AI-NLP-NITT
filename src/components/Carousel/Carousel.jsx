import { Carousel } from "antd";

const elements = [
  {
    src: "/images/gallery/ai_lang_pro_2024/16.jpeg",
    description: "Snap of AI Lang Pro Event 2024: Financial Relation Prediction",
  },
  {
    src: "/images/gallery/ai_lang_pro_2024/15.jpeg",
    description: "AI Lang Pro 24 1st Prize",
  },
  {
    src: "/images/gallery/ai_lang_pro_2024/13.jpeg",
    description: "AI Lang Pro 24 2nd Prize",
  },
  {
    src: "/images/gallery/ai_lang_pro_2024/14.jpeg",
    description: "AI Lang Pro 24 3rd Prize",
  },
];

const carouselElements = elements.map((element, index) => (
  <div key={index} className="w-full h-full flex flex-col justify-center items-center  rounded-xl">
    <img src={element.src} className="max-h-[70vh] w-full object-contain rounded-xl" alt={element.description} />
    <p className="text-white font-bold sm:text-xl mt-2">{element.description}</p>
  </div>
));

const CarouselElement = () => {
  return (
    <div className="mx-auto max-w-[90vw] sm:max-w-[70vw]">
      <Carousel autoplay className="h-[70vh] sm:h-[50vh] lg:h-[70vh]">
        {carouselElements}
      </Carousel>
    </div>
  );
};

export default CarouselElement;
