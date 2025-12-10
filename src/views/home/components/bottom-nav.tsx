import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { BottomNavRef } from "../type";
import "../index.less";
const projectUrls = [
	{
		title: "个人网站",
		url: "http://lijundong.cn"
	},
	// {
	// 	title: "个人项目",
	// 	url: "https://www.eveningwater.com/my-web-projects/"
	// },
	// {
	// 	title: "github",
	// 	url: "https://github.com/eveningwater/"
	// },
	{
		title: "码云",
		url: "https://gitee.com/FlowersLikeSnow"
	}
	// {
	// 	title: "博客",
	// 	url: "https://www.cnblogs.com/eveningwater/"
	// },
	// {
	// 	title: "思否",
	// 	url: "https://segmentfault.com/u/xishui_5ac9a340a5484"
	// },
	// {
	// 	title: "掘金",
	// 	url: "https://juejin.im/user/5bcfd79de51d45473245dc1c"
	// }
];
/**
 * 按钮控制器组件
 */
export const BottomNav = forwardRef<
	BottomNavRef,
	{
		/** 更新 onPaused */
		onPaused: (value: boolean) => void;
		/** 更新 onSkip */
		onSkip: () => void;
	}
>((props, ref) => {
	const { onSkip, onPaused } = props;
	/**
	 * 暴露给父组件的方法
	 */
	useImperativeHandle(ref, () => ({
		playMusic,
		containerRef: containerRef.current
	}));
	const playMusic = () => {
		setPlaying(true);
		createAudio();
		setTimeout(() => {
			if (audioElement) {
				audioElement.play();
			}
		}, 0);
	};
	const containerRef = useRef<HTMLDivElement>(null);
	const [paused, setPaused] = useState<boolean>(false);
	const [playing, setPlaying] = useState<boolean>(false);
	const onPauseAnimation = () => {
		const status = !paused;
		setPaused(status);
		onPaused(status);
	};
	const onSkipAnimation = () => {
		onSkip();
	};
	const [audioElement, setAudioElement] = useState<HTMLMediaElement>();
	const musicPause = () => {
		setPlaying(!playing);
		if (audioElement) {
			audioElement[!playing ? "play" : "pause"]();
		}
	};
	const createAudio = () => {
		if (audioElement) {
			audioElement.load();
		} else {
			const audio = new Audio();
			audio.loop = true;
			audio.autoplay = true;
			audio.src = "https://www.eveningwater.com/static/resouces/audio/5.mp3";
			setAudioElement(audio);
		}
	};

	return (
		<div className="BottomNavComponent">
			<a onClick={onPauseAnimation} id="pause">
				{paused ? "继续动画" : "暂停动画"}
			</a>
			<a onClick={onSkipAnimation} id="skipAnimation">
				跳过动画
			</a>
			<p>
				{projectUrls.map((item, index) => (
					<span key={item.url + index}>
						<a href={item.url} target="_blank" rel="noopener noreferrer">
							{item.title}
						</a>
					</span>
				))}
			</p>
			<div id="music" onClick={musicPause} className={`music ${playing ? "rotate" : ""}`}></div>
		</div>
	);
});
export default BottomNav;
