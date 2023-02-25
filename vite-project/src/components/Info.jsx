import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Info() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="C:\Users\Carson\Bootcamp\challenges\react-portfolio\vite-project\src\assets\Portfolio photos\IMG_2117.JPG"
          alt="Image"
        />
        <Carousel.Caption>
          <h3>Projects</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="C:\Users\Carson\Bootcamp\challenges\react-portfolio\vite-project\src\assets\Portfolio photos\IMG_2117.JPG"
          alt="IMage"
        />

        <Carousel.Caption>
          <h3>About</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="C:\Users\Carson\Bootcamp\challenges\react-portfolio\vite-project\src\assets\Portfolio photos\IMG_2117.JPG"
          alt="IMAGE"
        />

        <Carousel.Caption>
          <h3>Contact</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Info;