import React from "react";
import Youtube from "react-youtube";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SectionHeader from "./sectionHeaderLine";

export default function EmbededYoutubeGame() {
  return (
    <>
      <div style={{ width: "100%", textAlign: "center", fontSize: 50 }}>
        <div style={{ color: " #7e2c46", fontFamily: "'M PLUS 1p'"}}>
          <SectionHeader /> G a m e <SectionHeader />
        </div>
      </div>
      <div style={{ marginRight: 150, marginLeft: 150, marginBottom:100 }}>
        <Carousel infiniteLoop={true} dynamicHeight={true} showThumbs={false}>
          <div>
            <Youtube
              videoId="v9qBRwo5moo"
              opts={{ height: "600", width: "760" }}
            />
          </div>
          <div>
            <Youtube
              videoId="_Y3dOeofoCQ"
              opts={{ height: "600", width: "760" }}
            />
          </div>
          <div>
            <Youtube
              videoId="yIhLQutwo4s"
              opts={{ height: "600", width: "760" }}
            />
          </div>
          <div>
            <Youtube
              videoId="bqCjOBICjGw"
              opts={{ height: "600", width: "760" }}
            />
          </div>
          <div>
            <Youtube
              videoId="QY_OSNl6s24"
              opts={{ height: "600", width: "760" }}
            />
          </div>
        </Carousel>
      </div>
    </>
  );
}
