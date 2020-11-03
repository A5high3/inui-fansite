import React from "react";
import Youtube from "react-youtube";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SectionHeader from "./sectionHeaderLine";

export default function EmbededYoutubeMusic() {
  return (
    <>
      <div style={{ width: "100%", textAlign: "center", fontSize: 50 }}>
        <div style={{ color: " #7e2c46", fontFamily: "'M PLUS 1p'" }}>
          <SectionHeader /> M u s i c <SectionHeader />
        </div>
      </div>
      <div style={{ marginRight: 150, marginLeft: 150, marginBottom: 100 }}>
        <Carousel infiniteLoop={true} dynamicHeight={true} showThumbs={false}>
          <div>
            <Youtube
              videoId="CT7tJZwWLdQ"
              opts={{ height: "600", width: "760" }}
            />
          </div>
          <div>
            <Youtube
              videoId="QzdsaXemBWM"
              opts={{ height: "600", width: "760" }}
            />
          </div>
          <div>
            <Youtube
              videoId="QLWczt8aBtk"
              opts={{ height: "600", width: "760" }}
            />
          </div>
          <div>
            <Youtube
              videoId="bgWpXcbmQDY"
              opts={{ height: "600", width: "760" }}
            />
          </div>
          <div>
            <Youtube
              videoId="2k8AIzE87Mo"
              opts={{ height: "600", width: "760" }}
            />
          </div>
          <div>
            <Youtube
              videoId="zokUrGt0iuc"
              opts={{ height: "600", width: "760" }}
            />
          </div>
          <div>
            <Youtube
              videoId="xYXGfzgjEoE"
              opts={{ height: "600", width: "760" }}
            />
          </div>
        </Carousel>
      </div>
    </>
  );
}
