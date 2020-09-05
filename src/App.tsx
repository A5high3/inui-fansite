import React from "react";
import inuitop from "./assets/images/top.png";
import EmbededYoutubeMusic from "./components/embededYoutubeMusic";
import EmbededYoutubeYozuri from "./components/embededYoutubeYoduri";
import EmbededYoutubeTalk from "./components/embededYoutubeTalk";
import EmbededTwitter from "./components/embededTwitter";
import EmbededYoutubeGame from "./components/embededYoutubeGame";
import Caution from "./components/caution";
import Bonus from "./components/bonus";
import MediaQuery from "react-responsive";
import responsivetop from "./assets/images/responsivetop.jpeg";
import "./App.css";

function App() {
  return (
    <>
      <MediaQuery minDeviceWidth={1024}>
        <body style={{ cursor: "url(./bankencursol.png),auto" }}>
          {/* トップヘッダ */}
          <div className="App">
            <div className="App-header">
              <div className="Top-hashtag" />
              <img src={inuitop} style={{ width: "100%", height: "100%" }} />
            </div>
          </div>

          {/* music埋め込みセクション */}
          <EmbededYoutubeMusic />

          {/* 夜釣り埋め込みセクション */}
          <EmbededYoutubeYozuri />

          {/* 雑談埋め込みセクション */}
          <EmbededYoutubeTalk />

          {/* ゲーム埋め込みセクション */}
          <EmbededYoutubeGame />

          {/* Twitter埋め込みセクション */}
          <EmbededTwitter />

          {/* ｱﾊｧ↑ボタン */}
          <Bonus />

          {/* 注釈 */}
          <Caution />
        </body>
      </MediaQuery>
      <MediaQuery minDeviceWidth={320} maxDeviceWidth={1023}>
        {/* <h1>入り待ち出待ち雪待</h1> */}
        <div style={{width: "auto", height:"auto"}}>
          <div className="hogehoge">戌亥とこ非公式</div>
          <div className="hogehoge2">ふぁんさいと</div>
          <img src={responsivetop} />
        </div>
      </MediaQuery>
    </>
  );
}

export default App;
