import { FC, useEffect, useRef } from "react";
import * as THREE from "three";

const ThreejsPage: FC = () => {
	const divRef = useRef<HTMLDivElement>(null);
	const initDraw = () => {
		// init
		const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
		camera.position.z = 2;

		const scene = new THREE.Scene();

		const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
		const material = new THREE.MeshNormalMaterial();

		const mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);

		const renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setAnimationLoop(animation);
		divRef.current?.appendChild(renderer.domElement);
		// animation
		function animation(time: number) {
			mesh.rotation.x = time / 2000;
			mesh.rotation.y = time / 1000;

			renderer.render(scene, camera);
		}
	};
	useEffect(() => {
		if (divRef.current) {
			initDraw()
		}
	}, []);
	return <div ref={divRef} />;
};
export default ThreejsPage;
