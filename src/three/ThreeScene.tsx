import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Grid } from '@react-three/drei';
import * as THREE from 'three';

// 回転するボックス
function RotatingBox() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 1, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#7e2c46" />
    </mesh>
  );
}

// メインのシーンコンポーネント
export default function ThreeScene() {
  return (
    <div style={{ width: '100%', height: '100vh', background: '#1a1a2e' }}>
      <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
        {/* 照明 */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* 回転するボックス */}
        <RotatingBox />

        {/* グリッド */}
        <Grid
          infiniteGrid
          fadeDistance={30}
          fadeStrength={1}
          cellSize={1}
          cellThickness={0.5}
          cellColor="#6f6f6f"
          sectionSize={5}
          sectionThickness={1}
          sectionColor="#9f9f9f"
        />

        {/* カメラコントロール（マウスで回転・ズーム可能） */}
        <OrbitControls />
      </Canvas>

      {/* オーバーレイUI */}
      <div
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <h2 style={{ margin: 0 }}>Three.js 動作確認</h2>
        <p style={{ fontSize: 14, opacity: 0.7 }}>
          マウスドラッグで回転 / スクロールでズーム
        </p>
      </div>
    </div>
  );
}
