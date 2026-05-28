import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface NeuronNodeProps {
  position: [number, number, number];
  scale: number;
  groupRef: React.RefObject<THREE.Group>;
}

const NeuronNode: React.FC<NeuronNodeProps> = ({ position, scale, groupRef }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 2 + position[0] * 10) * 0.1 + 1;
      meshRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[scale, 16, 16]} />
      <meshStandardMaterial
        color="#0066ff"
        emissive="#0066ff"
        emissiveIntensity={0.3}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
};

interface DataPacketProps {
  start: THREE.Vector3;
  end: THREE.Vector3;
  progress: number;
  speed: number;
}

const DataPacket: React.FC<DataPacketProps> = ({ start, end, progress, speed }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const newProgress = (progress + state.clock.elapsedTime * speed) % 1;
      const pos = new THREE.Vector3().lerpVectors(start, end, newProgress);
      meshRef.current.position.copy(pos);
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial color="#00b8d9" />
    </mesh>
  );
};

interface NeuralConnectionsProps {
  nodes: THREE.Vector3[];
}

const NeuralConnections: React.FC<NeuralConnectionsProps> = ({ nodes }) => {
  const connections = useMemo(() => {
    const conns: { start: THREE.Vector3; end: THREE.Vector3 }[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 4) {
          conns.push({ start: nodes[i], end: nodes[j] });
        }
      }
    }
    return conns;
  }, [nodes]);

  return (
    <group>
      {connections.map((conn, idx) => {
        const positions = new Float32Array([
          conn.start.x, conn.start.y, conn.start.z,
          conn.end.x, conn.end.y, conn.end.z
        ]);
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        return (
          <primitive key={idx} object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: '#0066ff', transparent: true, opacity: 0.15 }))} />
        );
      })}
    </group>
  );
};

const AIParticleScene: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  const nodes = useMemo(() => {
    const n: THREE.Vector3[] = [];
    for (let i = 0; i < 30; i++) {
      n.push(new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ));
    }
    return n;
  }, []);

  const packets = useMemo(() => {
    const p: { start: THREE.Vector3; end: THREE.Vector3; progress: number; speed: number }[] = [];
    for (let i = 0; i < 20; i++) {
      const start = nodes[Math.floor(Math.random() * nodes.length)];
      const end = nodes[Math.floor(Math.random() * nodes.length)];
      if (start !== end) {
        p.push({ start, end, progress: Math.random(), speed: 0.005 + Math.random() * 0.01 });
      }
    }
    return p;
  }, [nodes]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const nodeScales = useMemo(() => {
    return nodes.map(() => 0.2 + Math.random() * 0.3);
  }, []);

  return (
    <group ref={groupRef}>
      {nodes.map((node, idx) => (
        <NeuronNode
          key={idx}
          position={[node.x, node.y, node.z]}
          scale={nodeScales[idx]}
          groupRef={groupRef}
        />
      ))}
      <NeuralConnections nodes={nodes} />
      {packets.map((packet, idx) => (
        <DataPacket
          key={idx}
          start={packet.start}
          end={packet.end}
          progress={packet.progress}
          speed={packet.speed}
        />
      ))}
    </group>
  );
};

export default function AIParticles() {
  return (
    <div className="absolute inset-0 z-0 opacity-20">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.3} color="#0066ff" />
        <pointLight position={[-5, -5, -5]} intensity={0.2} color="#00b8d9" />
        <AIParticleScene />
      </Canvas>
    </div>
  );
}
