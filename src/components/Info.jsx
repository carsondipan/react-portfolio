import React from "react";
import { Carousel } from "react-bootstrap";

function AboutCarousel() {
    return (
        <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=f5f5f5"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>About me</h5>
          <p>Hi! I'm Carson, and I'm a new coder looking for employment. I've recently graduated from the UNCC Coding Bootcamp, and I'm thrilled to join this line of work!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Hobbies</h5>
          <p>I skateboard, play guitar, and do many other things in my free time.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    );
}