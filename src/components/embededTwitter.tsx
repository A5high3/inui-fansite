import React from "react";
import { Timeline } from "react-twitter-widgets";
import SectionHeader from "./sectionHeaderLine";

export default function EmbededTwitter() {
  return (
    <>
      <div style={{ width: "100%", textAlign: "center", fontSize: 50 }}>
        <div style={{ color: " #7e2c46", fontFamily: "'M PLUS 1p'" }}>
          <SectionHeader /> T w i t t e r & L i n k s <SectionHeader />
        </div>
      </div>
      <div
        style={{
          marginLeft: "20%",
          marginRight: "20%",
          marginBottom: 40,
          display: "flex",
          flexDirection: "row",
        }}
      >
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
        <div style={{ marginLeft: 50, fontFamily: "'M PLUS 1'", fontSize: 30 }}>
          <a href="https://nijisanji.ichikara.co.jp/member/toko-inui/">
            公式紹介ページ
          </a><br />
          <div style={{ fontSize: 18 }}>
            プロフィールにて引用させていただいた紹介文はこちらより引用いたしました。
          </div>
          <br />
          <br />
          <a href="https://www.youtube.com/channel/UCXRlIK3Cw_TJIQC5kSJJQMg">
            Youtube
          </a>
          <br />
          <div style={{ fontSize: 18 }}>
            ※メンバーについて
            <br />
            戌亥とこ様のメンバーに加入すると、
            <br />
            Youtubeのコメント欄で使用できるオリジナルスタンプを使えたり、
            <br />
            メンバー限定の配信(歌配信・作業配信・雑談配信・晩酌配信)などを見ることができます。(※1リスナーに寄るダイマ)
          </div>
          <br />
          <br />
          <a href="https://twitter.com/inui_toko">Twitter</a>
          <br />
          <div style={{ fontSize: 18 }}>
            ※戌亥とこ様が用いられてるTwitterハッシュタグについて
            <br />
            ファンアート: #いぬいらすと
            <br />
            配信: #いぬいどんどんすきになる
            <br />
            ボイス感想: #とこぼいす
          </div>
          <br />
          <br />
          <a href="https://nijisanji.booth.pm/">にじさんじ公式boothページ</a>
          <br />
          <div style={{ fontSize: 18 }}>
            にじさんじ所属ライバー様のグッズやボイスの購入はこちらから
            <br />
            もちろん戌亥とこ様のグッズやボイスもこちらから
          </div>
          <br />
        </div>
      </div>
    </>
  );
}
