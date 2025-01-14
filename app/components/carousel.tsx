import React, { useState } from "react";
import "app/styles/carousel.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="carousel-item"
          />
        ))}
      </div>
      <button className="carousel-button prev" onClick={handlePrev}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className="carousel-button next" onClick={handleNext}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Carousel;
