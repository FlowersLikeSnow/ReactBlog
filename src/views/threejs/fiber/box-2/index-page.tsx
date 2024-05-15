import { FC } from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls, Html, useProgress } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Suspense } from "react";
import { Perf } from "r3f-perf";
import { AnyObject } from "antd/es/_util/type";
function Loader() {
	const { progress } = useProgress();
	return <Html center>{progress} % loading...</Html>;
}

const Model = (props: AnyObject) => {
	const { scene, materials } = useLoader(GLTFLoader, "./models/heart_in_love/scene.gltf");
	materials.Marble.opacity = 0.15;
	return <primitive object={scene} {...props} scale={0.025} />;
};

const ExperiencePage: FC = () => {
	return (
		<Canvas>
			<Perf position="top-right" />
			<Suspense fallback={<Loader />}>
				<color attach="background" args={["pink"]} />
				<Model />
				<OrbitControls minDistance={0.1} maxDistance={20} />
				{/*环境光*/}
				<ambientLight intensity={2} position={[-5, 5, -5]} color={"#fff"} />
			</Suspense>
		</Canvas>
	);
};
export default ExperiencePage;
