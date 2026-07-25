"use client";

import * as React from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

/* Procedural circuit texture used as an emissive map — its offset is scrolled
 * each frame so the die reads as "circuit energy" flowing. */
function makeCircuitTexture(size = 512) {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const ctx = c.getContext("2d")!;
  ctx.fillStyle = "#03050a";
  ctx.fillRect(0, 0, size, size);
  const step = size / 12;
  ctx.lineCap = "round";
  ctx.lineWidth = 3;
  // orthogonal traces
  for (let i = 1; i < 12; i++) {
    const on = (i * 7) % 3 !== 0;
    ctx.strokeStyle = on ? "#2f7dff" : "#1b4a8f";
    ctx.globalAlpha = on ? 0.9 : 0.5;
    ctx.beginPath();
    const y = i * step;
    ctx.moveTo(0, y);
    ctx.lineTo(((i * 5) % 10) * step + step, y);
    ctx.lineTo(((i * 5) % 10) * step + step, size);
    ctx.stroke();
    ctx.beginPath();
    const x = i * step;
    ctx.moveTo(x, 0);
    ctx.lineTo(x, ((i * 3) % 9) * step + step);
    ctx.stroke();
  }
  // pads / nodes
  ctx.globalAlpha = 1;
  for (let a = 1; a < 12; a += 2) {
    for (let b = 1; b < 12; b += 3) {
      ctx.fillStyle = "#9fc6ff";
      ctx.fillRect(a * step - 3, b * step - 3, 6, 6);
    }
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

function Pins() {
  const items: { pos: [number, number, number]; rot: number }[] = [];
  const n = 7;
  const span = 1.7;
  for (let i = 0; i < n; i++) {
    const t = (i / (n - 1) - 0.5) * span;
    items.push({ pos: [t, -0.02, 1.18], rot: 0 });
    items.push({ pos: [t, -0.02, -1.18], rot: 0 });
    items.push({ pos: [1.18, -0.02, t], rot: Math.PI / 2 });
    items.push({ pos: [-1.18, -0.02, t], rot: Math.PI / 2 });
  }
  return (
    <>
      {items.map((p, i) => (
        <mesh key={i} position={p.pos} rotation={[0, p.rot, 0]}>
          <boxGeometry args={[0.12, 0.06, 0.34]} />
          <meshStandardMaterial color="#c6ccd4" metalness={1} roughness={0.28} />
        </mesh>
      ))}
    </>
  );
}

function Chip() {
  const group = React.useRef<THREE.Group>(null!);
  const dieMat = React.useRef<THREE.MeshStandardMaterial>(null!);
  const tex = React.useMemo(() => makeCircuitTexture(), []);
  const start = React.useRef<number | null>(null);

  React.useEffect(() => () => tex.dispose(), [tex]);

  useFrame((state) => {
    if (start.current === null) start.current = state.clock.elapsedTime;
    const t = state.clock.elapsedTime - start.current;
    const intro = Math.min(1, t / 1.6);
    const g = group.current;

    g.scale.setScalar(0.85 + 0.15 * intro);
    // energy flow + breathing glow
    tex.offset.y = (t * 0.06) % 1;
    if (dieMat.current) dieMat.current.emissiveIntensity = intro * (0.9 + Math.sin(t * 1.6) * 0.28);

    // gentle sway around a fixed 3/4 top view + mouse parallax (never edge-on)
    const swayY = Math.sin(t * 0.35) * 0.16 + state.pointer.x * 0.32;
    const swayX = -0.52 + Math.sin(t * 0.5) * 0.04 + state.pointer.y * 0.16;
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, swayY, 0.05);
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, swayX, 0.05);
    g.position.y = Math.sin(t * 0.8) * 0.06;
  });

  return (
    <group ref={group} rotation={[-0.52, 0, 0]}>
      {/* package body */}
      <mesh>
        <boxGeometry args={[2.3, 0.32, 2.3]} />
        <meshStandardMaterial color="#0a0f18" metalness={0.75} roughness={0.34} />
      </mesh>
      {/* die surface (glowing circuit) */}
      <mesh position={[0, 0.175, 0]}>
        <boxGeometry args={[1.5, 0.06, 1.5]} />
        <meshStandardMaterial
          ref={dieMat}
          color="#060c16"
          emissive="#ffffff"
          emissiveMap={tex}
          emissiveIntensity={0}
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>
      {/* pin-1 indicator */}
      <mesh position={[-0.86, 0.17, -0.86]}>
        <cylinderGeometry args={[0.07, 0.07, 0.05, 20]} />
        <meshStandardMaterial color="#2e86ff" emissive="#2e86ff" emissiveIntensity={2} />
      </mesh>
      <Pins />
    </group>
  );
}

function BackPlane({ tex }: { tex: THREE.Texture }) {
  const ref = React.useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, state.pointer.x * 0.5, 0.04);
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, state.pointer.y * 0.4, 0.04);
  });
  return (
    <mesh ref={ref} position={[0, 0, -3.2]}>
      <planeGeometry args={[16, 10]} />
      <meshBasicMaterial map={tex} transparent opacity={0.09} />
    </mesh>
  );
}

function Scene() {
  const bgTex = React.useMemo(() => {
    const t = makeCircuitTexture(256);
    t.repeat.set(4, 3);
    return t;
  }, []);
  React.useEffect(() => () => bgTex.dispose(), [bgTex]);

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 6, 3]} intensity={2.4} />
      <pointLight position={[-4, 2, 4]} intensity={60} color="#2e86ff" distance={22} decay={2} />
      <pointLight position={[3, -2, 3]} intensity={22} color="#9fc6ff" distance={18} decay={2} />
      <BackPlane tex={bgTex} />
      <Chip />
    </>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 1.9, 5], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ width: "100%", height: "100%" }}
    >
      <Scene />
    </Canvas>
  );
}
