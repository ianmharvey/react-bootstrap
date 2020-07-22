import React from "react";

import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="https://via.placeholder.com/1600x400.png/aaa/fff?text=iPhone 11 Pro" alt="iPhone 11 Pro"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://via.placeholder.com/1600x400.png/aaa/fff?text=Samsung Galaxy Z Flip" alt="Galaxy Z Flip"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://via.placeholder.com/1600x400.png/aaa/fff?text=Samsung Galaxy Fold" alt="Galaxy Fold"/>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
