import React, { Fragment, useState } from "react";
import CarouselItem from "../CarouselItem";
import "../../utils/styles/Sass/Carousel.scss";
import ArrowNext from "../Svg/ArrowNext";
import ArrowPrev from "../Svg/ArrowPrev";
import useMediaquery from "../../utils/hooks/useMediaquery";

export interface Item {
  items: string[];
  title: string;
}

const Carousel: React.FC<Item> = ({ items, title }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const match = useMediaquery("(max-width:600px)");

  const prevSlide = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel__items">
        {items?.map((item, index) => (
          <Fragment key={index}>
            <CarouselItem
              item={item}
              isVisible={index === currentIndex}
              title={title}
            />
          </Fragment>
        ))}
      </div>
      <caption className="carousel-item__caption">
        {currentIndex + 1}/{items.length}
      </caption>
      <button
        onClick={nextSlide}
        className="carousel__button carousel__button--left"
      >
        <ArrowPrev
          width={match ? "11.67px" : "46.68px"}
          height={match ? "19.8px" : "79.2px"}
        />
      </button>
      <button
        onClick={prevSlide}
        className="carousel__button carousel__button--right"
      >
        <ArrowNext
          width={match ? "11.67px" : "46.68px"}
          height={match ? "19.8px" : "79.2px"}
        />
      </button>
    </div>
  );
};

export default Carousel;
