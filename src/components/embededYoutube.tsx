import React from "react";
import Youtube from "react-youtube";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SectionHeader from "./sectionHeaderLine"

export default function EmbededYoutube() {
  return (
    <>
      <div style={{ width: "100%", textAlign: "center", fontSize: 50 }}>
        <SectionHeader /> Y o u t u b e <SectionHeader />
      </div>
      <div style={{ marginRight: 150, marginLeft: 150, marginBottom: 100 }}>
        <Carousel infiniteLoop={true} dynamicHeight={true}>
          <div>
            <Youtube
              videoId="QzdsaXemBWM"
              opts={{ height: "480", width: "640" }}
            />
          </div>
          <div>
            <Youtube
              videoId="QLWczt8aBtk"
              opts={{ height: "480", width: "640" }}
            />
          </div>
          <div>
            <Youtube
              videoId="bgWpXcbmQDY"
              opts={{ height: "480", width: "640" }}
            />
          </div>
          <div>
            <Youtube
              videoId="2k8AIzE87Mo"
              opts={{ height: "480", width: "640" }}
            />
          </div>
          <div>
            <Youtube
              videoId="zokUrGt0iuc"
              opts={{ height: "480", width: "640" }}
            />
          </div>
          <div>
            <Youtube
              videoId="xYXGfzgjEoE"
              opts={{ height: "480", width: "640" }}
            />
          </div>
        </Carousel>
      </div>
    </>
  );
}
