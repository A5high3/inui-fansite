import React, { useState, useEffect } from "react";
// import { Carousel } from "react-responsive-carousel";
import inui from "./inui_default.png";
import inuisummer from "./inui_summer.png";
import inuispring from "./inui_spring.png";
import inuiwinter from "./inui_winter.png";
import inuiaha from "./inui_aha.png";
// import Caroucel from "./carousel";
import inuitop from "./top.png";
import { Button, Row } from "reactstrap";
import useSound from "use-sound";
import { Timeline } from "react-twitter-widgets";
import "./App.css";

const BoopButton = () => {
  let aha = require("./aha.mp3");
  const [play] = useSound(aha);
  return (
    <Button className="ahabtn" onClick={() => play()}>
      ｱﾊｧ↑~
    </Button>
  );
};

function App() {
  return (
    <>
      {/* トップヘッダ */}
      <div className="App">
        <div className="App-header">
          <div className="Top-hashtag">#いぬいどんどんすきになる</div>
          <img src={inuitop} style={{ width: "100%", height: "100%" }} />
        </div>
      </div>

      {/* 注釈 */}
      <div className="App-header2">
        <div>
          <div style={{ width: "100%", textAlign: "center", fontSize: 50 }}>
            ▼▼▼ C A U T I O N ▼▼▼
          </div>
          <br />
          当サイトはいちから株式会社にじさんじ所属バーチャルライバーの戌亥とこさんの非公式ファンサイトとなります。
          <br />
          公式とは一切の関係が無く、1人のリスナーがお誕生日企画のためだけに立ち上げたサイトです。
          <br />
        </div>

        {/* <div>
              <button
                onClick={() =>
                  setIdx((prevIdx) =>
                    prevIdx + 1 < arr.length ? prevIdx + 1 : 0
                  )
                }
              >
                立ち絵を切り替えたい
              </button>
            </div> */}
        {/* <Caroucel /> */}
        {/* <img src={arr[idx]} style={{ height: 700, width: 400 }} /> */}

        {/* <div
            style={{
              width: "70%",
              whiteSpace: "normal",
              alignSelf: "start",
              textAlign: "left",
            }}
          >
            {`dummydummydummydummydummydummydummydummdummy\ninuikoko!!!!inuikoko!!!!inuikoko!!!!inuikoko!!!!`}
          </div> */}
      </div>

      {/* ｱﾊｧ↑ボタン */}
      <div>
        <div style={{ width: "100%", textAlign: "center", fontSize: 50 }}>
          ▼▼▼ お ま け ▼▼▼
        </div>
        <div className="App-header3">
          <BoopButton />
          <img src={inuiaha} style={{ width: "100%", height: "100%" }}></img>
        </div>
      </div>

      {/* Twitter埋め込みセクション */}
      <div>
        <div style={{ width: "100%", textAlign: "center", fontSize: 50 }}>
          ▼▼▼ Twitter ▼▼▼
        </div>
        <div style={{ marginLeft: "40%", marginRight: "40%" }}>
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: "inui_toko",
            }}
            options={{
              height: "600",
              width: "480",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
