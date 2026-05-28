import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const HalfEarth = () => {
  const earthRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group>
      {/* 半地球 */}
      <mesh ref={earthRef} position={[0, -2, 0]} rotation={[0, Math.PI, 0]}>
        <sphereGeometry args={[8, 64, 64, 0, Math.PI]} />
        <meshStandardMaterial
          color="#0066ff"
          emissive="#003388"
          emissiveIntensity={0.3}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* 地球内部发光效果 */}
      <mesh position={[0, -2, 0.1]} rotation={[0, Math.PI, 0]}>
        <sphereGeometry args={[7.8, 64, 64, 0, Math.PI]} />
        <meshBasicMaterial color="#00b8d9" transparent opacity={0.3} side={THREE.BackSide} />
      </mesh>

      {/* 点云粒子 */}
      <Particles />

      {/* 连接线 */}
      <OrbitingLines />
    </group>
  );
};

const Particles = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 2000;

  const positions = useRef(new Float32Array(particleCount * 3));
  const colors = useRef(new Float32Array(particleCount * 3));

  // 初始化粒子位置 - 在半球表面
  for (let i = 0; i < particleCount; i++) {
    const theta = Math.random() * Math.PI;
    const phi = Math.random() * Math.PI;
    const radius = 8.2 + Math.random() * 1.5;

    positions.current[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions.current[i * 3 + 1] = radius * Math.cos(phi) - 2;
    positions.current[i * 3 + 2] = Math.abs(radius * Math.sin(phi) * Math.sin(theta));

    const colorMix = Math.random();
    if (colorMix < 0.6) {
      colors.current[i * 3] = 0;
      colors.current[i * 3 + 1] = 0.4;
      colors.current[i * 3 + 2] = 1;
    } else {
      colors.current[i * 3] = 0;
      colors.current[i * 3 + 1] = 0.72;
      colors.current[i * 3 + 2] = 0.85;
    }
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions.current}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors.current}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.06} vertexColors transparent opacity={0.8} sizeAttenuation />
    </points>
  );
};

const OrbitingLines = () => {
  const linesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={linesRef}>
      {/* 轨道线 1 */}
      <mesh position={[0, -2, 0]}>
        <ringGeometry args={[9, 9.05, 64, 1, 0, Math.PI]} />
        <meshBasicMaterial color="#0066ff" transparent opacity={0.5} />
      </mesh>

      {/* 轨道线 2 */}
      <mesh position={[0, -2, 0]} rotation={[0, Math.PI / 3, 0]}>
        <ringGeometry args={[10, 10.05, 64, 1, 0, Math.PI]} />
        <meshBasicMaterial color="#00b8d9" transparent opacity={0.3} />
      </mesh>

      {/* 轨道线 3 */}
      <mesh position={[0, -2, 0]} rotation={[0, -Math.PI / 4, 0]}>
        <ringGeometry args={[11, 11.05, 64, 1, 0, Math.PI]} />
        <meshBasicMaterial color="#3399ff" transparent opacity={0.4} />
      </mesh>
    </group>
  );
};

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 2, 20], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#0066ff" />
        <pointLight position={[-10, 5, 10]} intensity={0.6} color="#00b8d9" />
        <HalfEarth />
      </Canvas>
    </div>
  );
}
