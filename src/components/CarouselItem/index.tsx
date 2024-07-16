import React from "react";
import "../../utils/styles/Sass/Carousel.scss";

interface PropsItem {
  title: string;
  item: string;
  isVisible: boolean;
}

const CarouselItem: React.FC<PropsItem> = ({ title, item, isVisible }) => {
  return (
    <div
      className={`carousel-item${isVisible ? "carousel-item--visible" : ""}`}
      // className="carousel__slide"
    >
      <img src={item} alt={title} />
    </div>
  );
};

export default CarouselItem;
