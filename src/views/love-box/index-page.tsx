import { FC, useEffect, useRef, useState } from "react";
import "./index.less";

const LoveBoxPage: FC = () => {
	const startTime = "2020-05-31 1:35:00";
	const [strTimeNode, setStrTimeNode] = useState<JSX.Element>();
	useEffect(() => {
		const timer = setInterval(() => {
			setStrTimeNode(loveTimer());
		}, 1000);
		return () => {
			clearInterval(timer);
		};
	});
	useEffect(() => {
		init();
	}, []);
	const loveTimer = () => {
		const arr = startTime.split(/[- :]/);
		const start_time = new Date(
			Number(arr[0]),
			Number(arr[1]) - 1,
			Number(arr[2]),
			Number(arr[3]),
			Number(arr[4]),
			Number(arr[5])
		);
		let days: number | string = parseInt(`${new Date().valueOf() - start_time.valueOf()}`) / 1000;
		let seconds: number | string = parseInt(`${days % 60}`);
		if (seconds < 10) seconds = "0" + seconds;
		days = parseInt(`${days / 60}`);
		let minutes: number | string = days % 60;
		if (minutes < 10) minutes = "0" + minutes;
		days = parseInt(`${days / 60}`);
		let hours: number | string = days % 24;
		if (hours < 10) hours = "0" + hours;
		days = parseInt(`${days / 24}`);
		return (
			<div className="textCon">
				<div className="words">今天是爱上你的第</div>
				<div className="days">
					<span className="days-number">{days}</span>
					<span className="days-label">天</span>
				</div>
				<div className="seconds">
					{hours} 时 {minutes} 分 {seconds} 秒
				</div>
			</div>
		);
	};
	const loveBoxPageRef = useRef<HTMLDivElement>(null);
	const init = () => {
		const box = loveBoxPageRef.current;
		if (!box) return;
		const width = box?.offsetWidth;

		const count = parseInt(`${(width / 50) * 5}`);
		for (let i = 0; i < count; i++) {
			const size = parseInt(`${ran(60, 120) / 10}`);
			const ele = document.createElement("div");
			ele.classList.add("item");
			ele.style.width = size + "px";
			ele.style.height = size + "px";
			ele.style.left = ran(0, 95) + "%";
			ele.style.top = ran(20, 90) + "%";
			ele.style.animationDelay = ran(0, 30) / 10 + "s";
			box.appendChild(ele);
		}
	};
	function ran(min: string | number, max: string | number) {
		const min1 = parseInt(`${min}`);
		const max1 = parseInt(`${max}`);
		return Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
	}

	return (
		<div className="love-box-page" ref={loveBoxPageRef}>
			{/* 爱心模块 love */}
			{strTimeNode}
			{/* 创造一个独立的空间给我们的方块 */}
			<div className="love-box-page-wrap">
				{/* 建立一个div，设置共同的动画样式，统一协调 */}
				<div className="set">
					{/* 设置外层的方块的六个面 */}
					{["", "", "", "", "", ""].map((_, index) => {
						return (
							<div className={`out_${index + 1}`} key={index}>
								<img
									className="pic"
									src={`http://img.lijundong.cn/banner/${index + 1}.jpg`}
									alt=""
								/>
							</div>
						);
					})}
					{/* 设置里层的方块的六个面 */}
					{["", "", "", "", "", ""].map((_, index) => {
						return (
							<span className={`in_${index + 1}`} key={index}>
								<img
									className="s_pic"
									src={`http://img.lijundong.cn/banner/${index + 1}.jpg`}
									alt=""
								/>
							</span>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default LoveBoxPage;
