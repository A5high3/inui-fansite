import React from "react";
import inui from "./Inui_Toko_body.png";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="App-header">
          <div className="Top-hashtag">#いぬいどんどんすきになる</div>
          <video autoPlay loop muted style={{ width: "100%" }}>
            <source src={require("./inuimov.mp4")} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="App">
        <header className="App-header2">
          <img src={inui} />
        </header>
      </div>
    </>
  );
}

export default App;
