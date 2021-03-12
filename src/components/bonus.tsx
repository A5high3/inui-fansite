import React from 'react';
import { Button } from 'reactstrap';
import useSound from 'use-sound';
import inuiaha from '../assets/images/inui_aha.png';
import SectionHeader from './sectionHeaderLine';

const BoopButton = () => {
  const [play] = useSound('../assets/sounds/aha.mp3');
  return (
    <Button
      className="ahabtn"
      style={{ cursor: 'url(./bankencursol.png),auto' }}
      onClick={() => play()}
    >
      ｱﾊｧ↑~
    </Button>
  );
};

export default function Bonus(): JSX.Element {
  return (
    <>
      {/* ｱﾊｧ↑ボタン */}
      <div style={{ width: '100%', textAlign: 'center', fontSize: 50 }}>
        <div style={{ color: ' #7e2c46', fontFamily: "'M PLUS 1p'" }}>
          <SectionHeader /> お ま け <SectionHeader />
        </div>
      </div>
      <div className="App-header3">
        <BoopButton />
        <img src={inuiaha} style={{ width: '100%', height: '100%' }} alt="戌亥「アハァー↑」" />
      </div>
    </>
  );
}
