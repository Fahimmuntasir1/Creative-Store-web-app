import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
// import slider1 from "../../../Images/sliding (1).jpg";
// import slider2 from "../../../Images/sliding (2).jpg";
// import slider3 from "../../../Images/sliding (3).jpg";
// import slider4 from "../../../Images/sliding (4).jpg";

const Banner = () => {
    const [index, setIndex] = useState(0);
  const handleSelect = (selectIndex, e) => {
    setIndex(selectIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={'https://i.ibb.co/CPWGYLS/jimmy-chang-e-Xg-ah-ebc4-unsplash-1.jpg'}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={'https://i.ibb.co/S3rhptn/james-adams-x0r-J-rz-X7-S8-unsplash.jpg'}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={'https://i.ibb.co/0KHgJ9h/alexander-dummer-a-S4-Duj2j7r4-unsplash.jpg'}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Banner;
