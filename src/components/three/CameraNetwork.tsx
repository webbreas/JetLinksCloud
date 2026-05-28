import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CameraIconProps {
  position: [number, number, number];
}

const CameraIcon: React.FC<CameraIconProps> = ({ position }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh>
        <boxGeometry args={[0.6, 0.4, 0.3]} />
        <meshStandardMaterial color="#0066ff" emissive="#0066ff" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[0.4, 0, 0]}>
        <cylinderGeometry args={[0.12, 0.15, 0.1, 16]} />
        <meshStandardMaterial color="#00b8d9" />
      </mesh>
      <pointLight position={[0.4, 0, 0.2]} intensity={0.3} color="#0066ff" distance={2} />
    </group>
  );
};

interface VideoStreamProps {
  position: [number, number, number];
}

const VideoStream: React.FC<VideoStreamProps> = ({ position }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.MeshBasicMaterial;
      material.opacity = 0.1 + Math.sin(state.clock.elapsedTime * 2) * 0.03;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[1.2, 0.8]} />
      <meshBasicMaterial color="#f0f4ff" transparent opacity={0.1} />
    </mesh>
  );
};

interface ConnectionLineProps {
  start: [number, number, number];
  end: [number, number, number];
}

const ConnectionLine: React.FC<ConnectionLineProps> = ({ start, end }) => {
  const lineRef = useRef<THREE.Line>(null);

  const { geometry, material } = useMemo(() => {
    const mid: [number, number, number] = [
      (start[0] + end[0]) / 2,
      (start[1] + end[1]) / 2 + 1,
      (start[2] + end[2]) / 2
    ];
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(...start),
      new THREE.Vector3(...mid),
      new THREE.Vector3(...end)
    );
    const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(20));
    const mat = new THREE.LineBasicMaterial({ color: '#0066ff', transparent: true, opacity: 0.2 });
    return { geometry: geo, material: mat };
  }, [start, end]);

  return <primitive ref={lineRef} object={new THREE.Line(geometry, material)} />;
};

const CameraNetworkScene: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  const cameraPositions = useMemo(() => {
    const positions: [number, number, number][] = [];
    for (let i = 0; i < 8; i++) {
      const row = Math.floor(i / 4);
      const col = i % 4;
      positions.push([
        (col - 1.5) * 3,
        row === 0 ? 2 : -1,
        (row === 0 ? 1 : -1) * 2
      ]);
    }
    return positions;
  }, []);

  const connections = useMemo(() => {
    const conns: { start: [number, number, number]; end: [number, number, number] }[] = [];
    for (let i = 0; i < cameraPositions.length; i++) {
      for (let j = i + 1; j < cameraPositions.length; j++) {
        if (Math.abs(cameraPositions[i][1] - cameraPositions[j][1]) < 0.1) {
          conns.push({ start: cameraPositions[i], end: cameraPositions[j] });
        }
      }
    }
    return conns;
  }, [cameraPositions]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {cameraPositions.map((pos, idx) => (
        <group key={idx}>
          <CameraIcon position={pos} />
          <VideoStream position={[pos[0], pos[1] - 0.5, pos[2] + 1.5]} />
        </group>
      ))}
      {connections.map((conn, idx) => (
        <ConnectionLine key={idx} start={conn.start} end={conn.end} />
      ))}
    </group>
  );
};

export default function CameraNetwork() {
  return (
    <div className="absolute inset-0 z-0 opacity-20">
      <Canvas
        camera={{ position: [0, 2, 12], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.3} color="#0066ff" />
        <pointLight position={[-5, -2, 5]} intensity={0.2} color="#00b8d9" />
        <CameraNetworkScene />
      </Canvas>
    </div>
  );
}
