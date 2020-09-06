import React from "react";
import Youtube from "react-youtube";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SectionHeader from "./sectionHeaderLine";

export default function EmbededYoutubeYozuri() {
  return (
    <>
      <div style={{ width: "100%", textAlign: "center", fontSize: 50 }}>
      <div style={{color: " #7e2c46", fontFamily: "'M PLUS 1p'"}}>
          <SectionHeader /> Y o z u r i <SectionHeader />
        </div>
      </div>
      <div style={{ marginRight: 150, marginLeft: 150, marginBottom:100 }}>
        <Carousel infiniteLoop={true} dynamicHeight={true} showThumbs={false}>
          <div>
            <Youtube
              videoId="Y7jHkbmBFeI"
              opts={{ height: "600", width: "760" }}
            />
          </div>
          <div>
            <Youtube
              videoId="KTp1ECYUuaM"
              opts={{ height: "600", width: "760" }}
            />
          </div>
          <div>
            <Youtube
              videoId="kNgN_sXHg9o"
              opts={{ height: "600", width: "760" }}
            />
          </div>
          <div>
            <Youtube
              videoId="8oEQM5L0xYM"
              opts={{ height: "600", width: "760" }}
            />
          </div>
        </Carousel>
      </div>
    </>
  );
}
