import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const carouselItems = props.images.map((image,index) => {
    return (
      <Carousel.Item key={index}>
        <img
          className="d-block w-100"
          src={image}
          alt="First slide"
        />
      </Carousel.Item>
    )
  })

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {carouselItems}
    </Carousel>
  );
}
