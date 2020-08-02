import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import inuisummer from "./inui_summer_slide.png";
import inuislide from "./inui_default_slide.png";

export default () => (
  <Carousel infiniteLoop={true} showThumbs={false} className="App-header2">
    <div>
      <img src={inuislide} />
    </div>

    <div>
      <img src={inuisummer} />
    </div>
  </Carousel>
);
