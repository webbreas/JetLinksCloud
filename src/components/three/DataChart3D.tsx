import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

interface DataBarProps {
  position: [number, number, number];
  targetHeight: number;
  color: string;
}

const DataBar: React.FC<DataBarProps> = ({ position, targetHeight, color }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const scaleRef = useRef(0.1);

  useFrame(() => {
    if (meshRef.current) {
      scaleRef.current = THREE.MathUtils.lerp(scaleRef.current, targetHeight, 0.05);
      meshRef.current.scale.y = Math.max(scaleRef.current, 0.1);
      meshRef.current.position.y = position[1] + meshRef.current.scale.y / 2;
    }
  });

  return (
    <mesh ref={meshRef} position={[position[0], position[1] + targetHeight / 2, position[2]]} scale={[1, 0.1, 1]}>
      <boxGeometry args={[0.4, 1, 0.4]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.2}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
};

const GridFloor: React.FC = () => {
  return (
    <group position={[0, -2, 0]}>
      <gridHelper args={[20, 10, '#0066ff', '#e0e7ff']} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshBasicMaterial color="#f8faff" transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

interface FloatingLineProps {
  points: THREE.Vector3[];
  color: string;
}

const FloatingLine: React.FC<FloatingLineProps> = ({ points, color }) => {
  const pointsArray = useMemo(() => {
    return points.map(p => [p.x, p.y, p.z] as [number, number, number]);
  }, [points]);

  return (
    <Line
      points={pointsArray}
      color={color}
      lineWidth={2}
      transparent
      opacity={0.5}
    />
  );
};

const DataChartScene: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  const barData = useMemo(() => {
    const data: { position: [number, number, number]; height: number; color: string }[] = [];
    const colors = ['#0066ff', '#3399ff', '#00b8d9', '#00d9ff'];
    for (let i = 0; i < 12; i++) {
      data.push({
        position: [(i - 5.5) * 1.2, -2, 0],
        height: 1 + Math.random() * 4,
        color: colors[i % colors.length],
      });
    }
    return data;
  }, []);

  const linePoints = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i < 20; i++) {
      points.push(new THREE.Vector3(
        (i - 10) * 1.2,
        -2 + Math.sin(i * 0.5) * 2 + Math.random() * 0.5,
        -3
      ));
    }
    return points;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <GridFloor />
      {barData.map((bar, idx) => (
        <DataBar key={idx} position={bar.position} targetHeight={bar.height} color={bar.color} />
      ))}
      <FloatingLine points={linePoints} color="#0066ff" />
    </group>
  );
};

export default function DataChart3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-25">
      <Canvas
        camera={{ position: [0, 5, 15], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.3} color="#0066ff" />
        <pointLight position={[-10, 5, -10]} intensity={0.2} color="#00b8d9" />
        <DataChartScene />
      </Canvas>
    </div>
  );
}
