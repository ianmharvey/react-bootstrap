import React from "react";

import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="https://via.placeholder.com/1600x400.png/aaa/fff?text=iPhone 11 Pro" alt="iPhone 11 Pro"/>
        <Carousel.Caption>
          <p>Welcome to the first iPhone powerful enough to be called Pro.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://via.placeholder.com/1600x400.png/aaa/fff?text=Samsung Galaxy Z Flip" alt="Galaxy Z Flip"/>
        <Carousel.Caption>
          <p>A whole new kind of foldable phone with the first folding glass screen and advanced freestop hinge.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://via.placeholder.com/1600x400.png/aaa/fff?text=Samsung Galaxy Fold" alt="Galaxy Fold"/>
        <Carousel.Caption>
          <p>A device like no other. Galaxy Fold doesn't just define a new category, it defies category.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
