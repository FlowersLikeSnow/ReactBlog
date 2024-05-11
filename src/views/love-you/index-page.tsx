import { FC, useEffect, useRef } from "react";
import "./index.less";
// import draw from "@/utils/love";

const BookPage: FC = () => {
	const username = '人先欠着'
	const canvasRef = useRef<HTMLCanvasElement>(null);
	useEffect(() => {
		if (canvasRef.current) {
			// draw(canvasRef.current);
		}
	}, []);
	return (
		<div className="book-page">
			<canvas id="pinkboard" ref={canvasRef} />
			<div className="title">
				<span id="name">
					<span className="red">❤</span>
					{username}
					<span className="red">❤</span>
					<br />I Love You!
				</span>
			</div>
		</div>
	);
};
export default BookPage;
