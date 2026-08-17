'use client';

import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Stars } from '@react-three/drei';
import * as THREE from 'three';

function Moon() {
  const moonRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (moonRef.current) {
      const time = state.clock.getElapsedTime();
      moonRef.current.position.x = Math.cos(time * 0.1) * 4;
      moonRef.current.position.z = Math.sin(time * 0.1) * 4;
      moonRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Sphere ref={moonRef} args={[0.3, 32, 32]} position={[4, 0, 0]}>
      <meshStandardMaterial
        color={0xcccccc}
        roughness={0.9}
        metalness={0.1}
        emissive={0x333333}
        emissiveIntensity={0.2}
      />
    </Sphere>
  );
}

function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.0013;
      cloudsRef.current.rotation.x += 0.0001;
    }
  });

  // Earth texture with procedural generation
  const earthTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    if (!ctx) return new THREE.CanvasTexture(canvas);

    // Navy blue ocean base
    const gradient = ctx.createLinearGradient(0, 0, 0, 512);
    gradient.addColorStop(0, '#000050');
    gradient.addColorStop(0.5, '#000080');
    gradient.addColorStop(1, '#000050');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1024, 512);

    // Add glowing continents (simplified) with navy blue color
    ctx.fillStyle = '#1a1a80';
    ctx.globalAlpha = 0.6;
    
    // Draw some continent-like shapes
    const continents = [
      { x: 200, y: 150, w: 150, h: 100 },
      { x: 400, y: 200, w: 200, h: 150 },
      { x: 700, y: 180, w: 180, h: 120 },
      { x: 100, y: 300, w: 120, h: 80 },
      { x: 600, y: 320, w: 150, h: 100 },
    ];

    continents.forEach(cont => {
      ctx.beginPath();
      ctx.ellipse(cont.x, cont.y, cont.w, cont.h, 0, 0, Math.PI * 2);
      ctx.fill();
    });

    // Add glow effect with navy blue color
    ctx.globalAlpha = 0.3;
    ctx.shadowColor = '#1a1a80';
    ctx.shadowBlur = 20;
    continents.forEach(cont => {
      ctx.beginPath();
      ctx.ellipse(cont.x, cont.y, cont.w, cont.h, 0, 0, Math.PI * 2);
      ctx.fill();
    });

    return new THREE.CanvasTexture(canvas);
  }, []);

  // Clouds texture
  const cloudsTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    if (!ctx) return new THREE.CanvasTexture(canvas);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.fillRect(0, 0, 1024, 512);

    // Add cloud patterns
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * 1024;
      const y = Math.random() * 512;
      const radius = Math.random() * 50 + 20;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    return new THREE.CanvasTexture(canvas);
  }, []);

  return (
    <group>
      {/* Earth sphere */}
      <Sphere ref={earthRef} args={[2, 64, 64]}>
        <meshStandardMaterial
          map={earthTexture}
          roughness={0.8}
          metalness={0.1}
          emissive={0x001133}
          emissiveIntensity={0.2}
        />
      </Sphere>

      {/* Clouds layer */}
      <Sphere ref={cloudsRef} args={[2.05, 64, 64]}>
        <meshStandardMaterial
          map={cloudsTexture}
          transparent
          opacity={0.4}
          roughness={1}
          metalness={0}
        />
      </Sphere>

      {/* Atmosphere glow */}
      <Sphere args={[2.2, 64, 64]}>
        <meshBasicMaterial
          color={0x00ffff}
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  );
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 1000;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0005;
      particlesRef.current.rotation.x += 0.0002;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color={0x00ffff}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const mouseX = (state.mouse.x * 0.5);
      const mouseY = (state.mouse.y * 0.5);
      groupRef.current.rotation.x = mouseY * 0.1;
      groupRef.current.rotation.y = mouseX * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0080ff" />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Earth />
      <Moon />
      <Particles />
    </group>
  );
}

export default function EarthBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}
