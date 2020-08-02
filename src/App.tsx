import React from "react";
import inuitop from "./assets/images/top.png";
import EmbededYoutube from "./components/embededYoutube";
import EmbededTwitter from "./components/embededTwitter";
import Caution from "./components/caution";
import Bonus from "./components/bonus";
import "./App.css";

function App() {
  return (
    <>
      {/* トップヘッダ */}
      <div className="App">
        <div className="App-header">
          <div className="Top-hashtag" />
          <img src={inuitop} style={{ width: "100%", height: "100%" }} />
        </div>
      </div>

      {/* youtube埋め込みセクション */}
      <EmbededYoutube />

      {/* Twitter埋め込みセクション */}
      <EmbededTwitter />

      {/* 注釈 */}
      <Caution />

      {/* ｱﾊｧ↑ボタン */}
      <Bonus />
    </>
  );
}

export default App;
