import React, { useState } from "react";
import inui from "./inui_default.png";
import inuisummer from "./inui_summer.png";
import inuispring from "./inui_spring.png";
import inuiwinter from "./inui_winter.png";
import "./App.css";

function App() {
  const arr = [inui, inuisummer, inuispring, inuiwinter];
  const [idx, setIdx] = useState(0);
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
          <div style={{ width: "30%" }}>
            <div>
              <button
                onClick={() =>
                  setIdx((prevIdx) =>
                    prevIdx + 1 < arr.length ? prevIdx + 1 : 0
                  )
                }
              >
                立ち絵を切り替えたい
              </button>
            </div>
            <img src={arr[idx]} style={{ height: 700, width: 400 }} />
          </div>
          <div style={{ width: "70%", whiteSpace: "normal", alignSelf: 'start', textAlign: 'left' }}>
            {`dummydummydummydummydummydummydummydummdummy\ninuikoko!!!!inuikoko!!!!inuikoko!!!!inuikoko!!!!`}
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
