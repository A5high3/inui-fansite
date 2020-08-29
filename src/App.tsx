import React from "react";
import inuitop from "./assets/images/top.png";
import EmbededYoutubeMusic from "./components/embededYoutubeMusic";
import EmbededYoutubeYozuri from "./components/embededYoutubeYoduri";
import EmbededYoutubeTalk from "./components/embededYoutubeTalk";
import EmbededTwitter from "./components/embededTwitter";
import Caution from "./components/caution";
import Bonus from "./components/bonus";
import "./App.css";
import EmbededYoutubeGame from "./components/embededYoutubeGame"

function App() {
  return (
    <body style={{ cursor: "url(./bankencursol.png),auto" }}>
      {/* トップヘッダ */}
      <div className="App">
        <div className="App-header">
          <div className="Top-hashtag" />
          <img src={inuitop} style={{ width: "100%", height: "100%" }} />
        </div>
      </div>

      {/* youtube埋め込みセクション */}
      <EmbededYoutubeMusic />

      {/* youtube埋め込みセクション */}
      <EmbededYoutubeYozuri />

      <EmbededYoutubeTalk />

      <EmbededYoutubeGame />

      {/* Twitter埋め込みセクション */}
      <EmbededTwitter />

      {/* ｱﾊｧ↑ボタン */}
      <Bonus />

      {/* 注釈 */}
      <Caution />
    </body>
  );
}

export default App;
