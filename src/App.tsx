import React, { Suspense, useMemo, useRef, useState } from 'react';
// import inuitop from './assets/images/top.png';
// import Profile from './components/profile';
// import EmbeddedYoutubeMusic from './components/embeddedYoutubeMusic';
// import EmbeddedYoutubeYozuri from './components/embeddedYoutubeYozuri';
// import EmbeddedYoutubeTalk from './components/embeddedYoutubeTalk';
// import EmbeddedTwitter from './components/embeddedTwitter';
// import EmbeddedYoutubeGame from './components/embeddedYoutubeGame';
// import Caution from './components/caution';
// import SpCaution from './components/spCaution';
// import SpNotice from './components/spNotice';
// import Bonus from './components/bonus';
// import MediaQuery from 'react-responsive';
// import responsivetop from './assets/images/responsivetop.jpeg';
import './App.css';
import { AnimationClip, Clock, WebGLRenderer } from 'three';
import { MMDAnimationHelper } from 'three/examples/jsm/animation/MMDAnimationHelper';
import { MMDLoader } from 'three/examples/jsm/loaders/MMDLoader';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useHelper } from "@react-three/drei"

import Controls from './util/Controls';

const loadAnimation = (mesh: any) => {
  const loader = new MMDLoader();
  return new Promise((resolve) => {
    loader.loadAnimation('/sweetmagic-right.vmd', mesh, (vmd: any) => {
      resolve(vmd);
    });
  });
};

const hoge = async (mesh: any) => {
  const result = await loadAnimation(mesh);
  console.log('Result', result);
  return result;
};

function App(): JSX.Element {
  const [meshState, updMesh] = useState(null);
  const [animeState, updAnime] = useState(null);

  const Character = (props: any) => {
    const mesh = useLoader(MMDLoader, '/inuitoko.pmx');
    if (mesh !== null) {
      if (!meshState) {
        console.log('updState');
        updMesh(mesh as any);
      }
    }

    return (
      <mesh visible={true} castShadow={false} ref={props.meshRef}>
        {/* <primitive object={animation} /> */}
        <primitive object={mesh} scale={[0.25, 0.25, 0.25]} />
      </mesh>
    );
  };

  const helper = new MMDAnimationHelper({
    afterglow: 2.0,
    resetPhysicsOnLoop: true,
  });

  const clock = new Clock();

  const doAnime = async (mesh: any) => {
    const animation = await hoge(mesh);
    updAnime(animation as any);
    console.log('helper', helper);
    if (animation !== null && animation !== undefined && animation instanceof AnimationClip) {
      helper.add(mesh, {
        animation: animation as any,
        physics: true,
      });
      console.log('helper2', helper);
      clock.start();
    }
    return;
  };

  const AnimateFrame = (props: any) => {
    useFrame(() => {
    });
    return null;
  };

  const refMesh = useRef();
  return (
    <div>
      <button onClick={async () => await doAnime(meshState)}></button>
      <div id="cancas^container">
        <Canvas style={{ height: '100vh', width: '100vw' }}>
          <Controls />
          <directionalLight position={[1, 1, 1]} />

          <Suspense fallback={null}>
            <Character meshRef={refMesh} />
          </Suspense>
          <AnimateFrame meshRef={refMesh} />
          <gridHelper />
        </Canvas>
      </div>
    </div>
    // <>
    //   <MediaQuery minDeviceWidth={1024}>
    //     <body style={{ cursor: 'url(./bankencursol.png),auto' }}>
    //       {/* トップヘッダ */}
    //       <div className="App">
    //         <div className="App-header">
    //           <div className="Top-hashtag" />
    //           <img src={inuitop} style={{ width: '100%', height: '100%' }} alt="トップ画像" />
    //         </div>
    //       </div>
    //       {/* Profile 表示セクション */}
    //       <Profile />

    //       {/* music埋め込みセクション */}
    //       <EmbeddedYoutubeMusic />

    //       {/* 夜釣り埋め込みセクション */}
    //       <EmbeddedYoutubeYozuri />

    //       {/* 雑談埋め込みセクション */}
    //       <EmbeddedYoutubeTalk />

    //       {/* ゲーム埋め込みセクション */}
    //       <EmbeddedYoutubeGame />

    //       {/* Twitter埋め込みセクション */}
    //       <EmbeddedTwitter />

    //       {/* ｱﾊｧ↑ボタン */}
    //       <Bonus />
    //     </body>
    //     {/* 注釈セクション マウスカーソルを通常ものにするためbodyから省く */}
    //     <Caution />
    //   </MediaQuery>
    //   <MediaQuery minDeviceWidth={320} maxDeviceWidth={1023}>
    //     <div style={{ width: 'auto', height: 'auto' }}>
    //       <div className="hogehoge">戌亥とこ非公式</div>
    //       <div className="hogehoge2">ふぁんさいと</div>
    //       <img src={responsivetop} alt="トップ画像" />
    //       <SpNotice />
    //       <SpCaution />
    //     </div>
    //   </MediaQuery>
    // </>
  );
}

export default App;
