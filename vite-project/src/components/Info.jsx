import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Info() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className='carousel' activeIndex={index} onSelect={handleSelect}>


      <Carousel.Item>
        <img
          className="d-inline w-75"
          src="https://via.placeholder.com/150"
          alt="Projects"
        />
        <Carousel.Caption>
          <h3>Projects</h3>
          <p>Click to see Projects that I've completed!</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-inline w-75"
          src="C:\Users\Carson\Bootcamp\challenges\react-portfolio\vite-project\src\assets\img3.png"
          alt="About"
        />
        <Carousel.Caption>
          <h3>About</h3>
          <p>Click to learn more about me!</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-inline w-75"
          src="https://via.placeholder.com/150"
          alt="Resume"
        />
        <Carousel.Caption>
          <h3>Resume</h3>
          <p>
            Click here to view my personal Resume.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Info;