import React, { Fragment, useState } from "react";
import CarouselItem from "../CarouselItem";
import "../../utils/styles/Sass/Carousel.scss";
import ArrowNext from "../Svg/ArrowNext";
import ArrowPrev from "../Svg/ArrowPrev";

export interface Item {
  items: string[];
  title: string;
}

const Carousel: React.FC<Item> = ({ items, title }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = () => {
    // setCurrentIndex((prevIndex) =>
    //   prevIndex === items.length - 1 ? 0 : prevIndex + 1
    // );
    const newIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
    // const newIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    // setCurrentIndex(newIndex);
  };

  const width: string = "48";
  const height: string = "80";
  return (
    <div className="carousel">
      <div className="carousel__items">
        {/* <div
        className="carousel__container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      > */}
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
      <div className="carousel-item__caption">
        {currentIndex + 1}/{items.length}
      </div>
      <button
        // className="carousel__control carousel__control--prev"
        onClick={nextSlide}
        className="carousel__button carousel__button--left"
      >
        <ArrowPrev width={width} height={height} />
      </button>
      <button
        // className="carousel__control carousel__control--next"
        onClick={prevSlide}
        className="carousel__button carousel__button--right"
      >
        <ArrowNext width={width} height={height} />
      </button>
    </div>
  );
};

export default Carousel;
