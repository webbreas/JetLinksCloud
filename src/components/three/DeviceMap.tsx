import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface DeviceNodeProps {
  position: [number, number, number];
}

const DeviceNode: React.FC<DeviceNodeProps> = ({ position }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.2;
      ringRef.current.scale.setScalar(scale);
      const material = ringRef.current.material as THREE.MeshBasicMaterial;
      material.opacity = 0.25 - Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.1;
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial
          color="#0066ff"
          emissive="#0066ff"
          emissiveIntensity={0.5}
        />
      </mesh>
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.2, 0.25, 32]} />
        <meshBasicMaterial color="#0066ff" transparent opacity={0.25} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

const MapPlane: React.FC = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[30, 20]} />
      <meshStandardMaterial
        color="#f0f4ff"
        transparent
        opacity={0.3}
      />
    </mesh>
  );
};

const GridLines: React.FC = () => {
  const positions = useMemo(() => {
    const pos: number[] = [];
    for (let i = -15; i <= 15; i += 3) {
      pos.push(i, -2, -10, i, -2, 10);
      pos.push(-15, -2, i * 0.66, 15, -2, i * 0.66);
    }
    return new Float32Array(pos);
  }, []);

  return (
    <lineSegments>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#0066ff" transparent opacity={0.1} />
    </lineSegments>
  );
};

const DeviceMapScene: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  const devicePositions = useMemo(() => {
    const positions: [number, number, number][] = [];
    for (let i = 0; i < 50; i++) {
      positions.push([
        (Math.random() - 0.5) * 25,
        Math.random() * 3,
        (Math.random() - 0.5) * 15
      ]);
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <MapPlane />
      <GridLines />
      {devicePositions.map((pos, idx) => (
        <DeviceNode key={idx} position={pos} />
      ))}
    </group>
  );
};

export default function DeviceMap() {
  return (
    <div className="absolute inset-0 z-0 opacity-25">
      <Canvas
        camera={{ position: [0, 8, 15], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.3} color="#0066ff" />
        <pointLight position={[-10, 5, -10]} intensity={0.2} color="#00b8d9" />
        <DeviceMapScene />
      </Canvas>
    </div>
  );
}
