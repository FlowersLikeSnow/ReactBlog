import { FC, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { OrbitControls } from "@react-three/drei";

const Box = () => {
	const meshRef = useRef<Mesh>(null);
	useFrame((_, delta) => {
		if (meshRef.current) {
			meshRef.current.rotation.x += delta / 2;
			meshRef.current.rotation.y += delta;
		}
	});
	return (
		<mesh ref={meshRef}>
			<boxGeometry args={[0.2, 0.2, 0.2]} />
			<meshNormalMaterial />
		</mesh>
	);
};

const ThreejsPage: FC = () => {
	return (
		<Canvas
			camera={{ fov: 70, near: 0.01, far: 100, position: [0, 0, 2] }}
			style={{ height: "100vh", backgroundColor: "black" }}
		>
			<Box />
			<OrbitControls minDistance={0.1} maxDistance={20} />
		</Canvas>
	);
};
export default ThreejsPage;
