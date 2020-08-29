import React from "react";
import Youtube from "react-youtube";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SectionHeader from "./sectionHeaderLine";

export default function EmbededYoutubeTalk() {
  return (
    <>
      <div style={{ width: "100%", textAlign: "center", fontSize: 50 }}>
        <div style={{ color: " #7e2c46", fontFamily: "'M PLUS 1p'" }}>
          <SectionHeader /> T a l k <SectionHeader />
        </div>
      </div>
      <div style={{ marginRight: 150, marginLeft: 150, marginBottom:40 }}>
        <Carousel infiniteLoop={true} dynamicHeight={true} showThumbs={false}>
          <div>
            <Youtube
              videoId="atTMl-FyQJk"
              opts={{ height: "480", width: "640" }}
            />
          </div>
          <div>
            <Youtube
              videoId="0GpmjkRFbXI"
              opts={{ height: "480", width: "640" }}
            />
          </div>
          <div>
            <Youtube
              videoId="tVY_DmHuw74"
              opts={{ height: "480", width: "640" }}
            />
          </div>
          <div>
            <Youtube
              videoId="vnBNi2nbqX0"
              opts={{ height: "480", width: "640" }}
            />
          </div>
        </Carousel>
      </div>
    </>
  );
}
