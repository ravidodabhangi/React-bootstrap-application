import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import About from "./About";
const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 corousel_img"
            src="https://media.istockphoto.com/id/1136934581/photo/pensive-businessman-working-on-laptop-while-drinking-coffee-in-the-office.jpg?s=612x612&w=0&k=20&c=UAlaJN0alLarwCR8Fp7iCIGAonJb1HZlLZuWVysZf3Y="
            alt="First slide"
          />
          <Carousel.Caption>
            <p className="text-capitalize lead">
              design driven for professional
            </p>
            <h1 className="text-capitalize text-white">
              We Craft Digital <br /> Experiances
            </h1>
            <a
              href="#"
              className=" btn me-4 mt-3"
              style={{ backgroundColor: "deeppink", color: "white" }}
            >
              Get Started
            </a>
            <a
              href="#"
              className="btn mt-3 shadow-none"
              style={{
                color: "white",
                border: "1px solid white",
                backgroundColor: "transparent",
              }}
            >
              Our work
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 corousel_img"
            src="https://img.freepik.com/free-photo/3d-rendering-luxury-business-meeting-working-room-executive-office_105762-1997.jpg?size=626&ext=jpg&ga=GA1.2.1948671442.1669567866"
            alt="Second slide"
          />

          <Carousel.Caption>
            <p className="text-capitalize lead">we craft digital experience</p>
            <h1 className="text-capitalize text-white">
              Design Driven For <br /> Professionals
            </h1>
            <a
              href="#"
              className=" btn me-4 mt-3"
              style={{ backgroundColor: "deeppink", color: "white" }}
            >
              Get Started
            </a>
            <a
              href="#"
              className="btn mt-3 shadow-none"
              style={{
                color: "white",
                border: "1px solid white",
                backgroundColor: "transparent",
              }}
            >
              Our work
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 corousel_img"
            src="https://img.freepik.com/free-photo/diverse-people-working-office_53876-104681.jpg?size=626&ext=jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <p className="text-capitalize lead">
              design driven for professional
            </p>
            <h1 className="text-capitalize text-white">
              We Craft Digital <br /> Experiances
            </h1>
            <a
              href="#"
              className=" btn me-4 mt-3"
              style={{ backgroundColor: "deeppink", color: "white" }}
            >
              Get Started
            </a>
            <a
              href="#"
              className="btn mt-3 shadow-none"
              style={{
                color: "white",
                border: "1px solid white",
                backgroundColor: "transparent",
              }}
            >
              Our work
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <About/>
    </>
  );
};

export default Home;
