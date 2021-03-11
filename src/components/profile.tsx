import React, { useState } from "react";
import inuidefault from "../assets/images/inui_default.png";
import inuisummer from "../assets/images/inui_summer.png";
import inuispring from "../assets/images/inui_spring.png";
import inuiwinter from "../assets/images/inui_winter.png";
import SectionHeader from "./sectionHeaderLine";
import { Container, Row } from "reactstrap";


const arr = [inuidefault, inuisummer, inuispring, inuiwinter];
export default function Profile() {
  const [count, setCount] = useState(0);
  return (
    <Container>
      <Row
        xs="2"
        style={{ marginRight: 150, marginLeft: 150, marginBottom: 100 }}
      >
        <div style={{ width: "100%", textAlign: "center", fontSize: 50 }}>
          <div style={{ color: " #7e2c46", fontFamily: "'M PLUS 1p'" }}>
            <SectionHeader /> P r o f i l e <SectionHeader />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            src={arr[count]}
            onClick={() => setCount(count === 3 ? 0 : count + 1)}
            style={{marginLeft:50, marginRight: 50, width: 500, height: 800,cursor: "url(./bankenfocus.png),auto"}}
            alt="戌亥とこ"
          />
          <div
            style={{
              marginLeft: 50,
              fontSize: 50,
              fontFamily: "'M PLUS 1'",
            }}
          >
            <div>戌亥とこ</div>
            <div style={{ fontSize: 30 }}>
              寂れた和風喫茶で働く女の子。店長の趣味でメイド服を着せられている。
              <br />
              足下に見え隠れする尻尾が本物かどうかは、触れた人のみぞ知る。満月の夜は何か不思議な事が起きるらしい？(※公式紹介文より引用)
            </div>
            <br />
            <div style={{ fontSize: 30 }}>
              犬や狼ではなくケルベロス。
              <br />
              故郷はもちろん地獄。
              <br />
              にじさんじ所属公式つよつよバーチャルケルベロス。
              <br />
              活動は歌唱やゲーム配信や雑談、他のライバーの方達とのコラボなど多岐に渡る。
              <br />
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
}
