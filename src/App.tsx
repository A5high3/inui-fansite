import React from 'react';
import inuitop from './assets/images/top.png';
import Profile from './components/profile';
import EmbeddedYoutubeMusic from './components/embeddedYoutubeMusic';
import EmbeddedYoutubeYozuri from './components/embeddedYoutubeYozuri';
import EmbeddedYoutubeTalk from './components/embeddedYoutubeTalk';
import EmbeddedTwitter from './components/embeddedTwitter';
import EmbeddedYoutubeGame from './components/embeddedYoutubeGame';
import Caution from './components/caution';
import SpCaution from './components/spCaution';
import SpNotice from './components/spNotice';
import Bonus from './components/bonus';
import MediaQuery from 'react-responsive';
import responsivetop from './assets/images/responsivetop.jpeg';
import './App.css';

function App(): JSX.Element {
  return (
    <>
      <MediaQuery minDeviceWidth={1024}>
        <body style={{ cursor: 'url(./bankencursol.png),auto' }}>
          {/* トップヘッダ */}
          <div className="App">
            <div className="App-header">
              <div className="Top-hashtag" />
              <img src={inuitop} style={{ width: '100%', height: '100%' }} alt="トップ画像" />
            </div>
          </div>
          {/* Profile 表示セクション */}
          <Profile />

          {/* music埋め込みセクション */}
          <EmbeddedYoutubeMusic />

          {/* 夜釣り埋め込みセクション */}
          <EmbeddedYoutubeYozuri />

          {/* 雑談埋め込みセクション */}
          <EmbeddedYoutubeTalk />

          {/* ゲーム埋め込みセクション */}
          <EmbeddedYoutubeGame />

          {/* Twitter埋め込みセクション */}
          <EmbeddedTwitter />

          {/* ｱﾊｧ↑ボタン */}
          <Bonus />
        </body>
        {/* 注釈セクション マウスカーソルを通常ものにするためbodyから省く */}
        <Caution />
      </MediaQuery>
      <MediaQuery minDeviceWidth={320} maxDeviceWidth={1023}>
        <div style={{ width: 'auto', height: 'auto' }}>
          <div className="hogehoge">戌亥とこ非公式</div>
          <div className="hogehoge2">ふぁんさいと</div>
          <img src={responsivetop} alt="トップ画像" />
          <SpNotice />
          <SpCaution />
        </div>
      </MediaQuery>
    </>
  );
}

export default App;
