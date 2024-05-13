import { FC, useEffect, useMemo, useRef, useState } from "react";
import "./index.less";
import defaultStyle from "@/files/style";
import fullMobileStyle from "@/files/styleMobile";
import me from "@/files/me";
import StyleEditor from "./components/style-editor";
import { debounce } from "lodash-es";
import { BottomNavRef, ResumeEditorRef, StyleEditorRef } from "./type";
import { AnyObject } from "antd/es/_util/type";
import ResumeEditor from "./components/resume-editor";
import AnimationSpeed from "./components/animation-speed";
import BottomNav from "./components/bottom-nav";

const HomePage: FC = () => {
	// TODO: 用于render重渲染
	const [, forceUpdate] = useState<string>("");
	const styleEditorRef = useRef<StyleEditorRef>(null);
	const resumeEditorRef = useRef<ResumeEditorRef>(null);
	const bottomNavRef = useRef<BottomNavRef>(null);
	const [enableHtml, setEnableHtml] = useState<boolean>(false);
	// const [fullStyle, setFullStyle] = useState<string[]>(defaultStyle);
	const [fullMarkdown] = useState<string>(me);
	const styleCode = useRef<string>("");
	const timer = useRef<Array<NodeJS.Timeout>>([]);
	const interVal = useRef<number>(50);
	const currentMarkdown = useRef<string>("");
	/** 手机屏幕状态 */
	const isMobile = useMemo(
		() => !!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i) || window.innerWidth < 666,
		[navigator.userAgent, window.innerWidth]
	);
	/** 加载文本 */
	const fullStyle = useMemo(() => (isMobile ? fullMobileStyle : defaultStyle), [isMobile]);

	const loadMobileStyle = () => {
		if (timer.current.length) {
			timer.current.forEach((t) => clearTimeout(t));
			timer.current = [];
		}
		styleCode.current = "";
		currentMarkdown.current = "";
		setEnableHtml(false);
		makeResume();
	};
	const mobileGoBottom = (value: number) => {
		document.body.scrollTop = document.documentElement.scrollTop = value;
	};
	const getCurrentScrollTop = (bool: boolean) => {
		const resumeRect = resumeEditorRef.current?.containerRef?.getBoundingClientRect() || {
			top: 0,
			left: 0,
			width: 0
		};
		const styleEditorHeight = styleEditorRef.current?.containerRef?.offsetHeight || 0;
		return bool
			? Math.abs(resumeRect.top - styleEditorHeight)
			: Math.abs(styleEditorHeight - parseInt(`${resumeRect.width}`) + resumeRect.top);
	};
	const writeStyle = (n: number) => {
		let __styleCode = styleCode.current;
		return new Promise((resolve: (str: string) => void) => {
			const showStyle = () => {
				const style = fullStyle[n];
				if (!style) return;
				const len = fullStyle
					.filter((_, i) => i <= n)
					.map((i) => i.length)
					.reduce((r, i) => r + i, 0);
				const prefixLen = len - style.length;
				if (__styleCode.length < len) {
					const l = __styleCode.length - prefixLen;
					const char = style.substring(l, l + 1) || " ";
					__styleCode += char;
					styleEditorRef.current?.goBottom();
					styleCode.current = __styleCode;
					forceUpdate(() => __styleCode);
					if (style.substring(l - 1, l) === "\n") {
						if (isMobile && !enableHtml) {
							mobileGoBottom(10000);
						} else {
							if (resumeEditorRef?.current && styleEditorRef?.current) {
								mobileGoBottom(getCurrentScrollTop(false));
							}
						}
					}
					timer.current.push(setTimeout(showStyle, interVal.current));
				} else {
					resolve(__styleCode);
				}
			};
			showStyle();
		});
	};

	const writeResume = () => {
		return new Promise((resolve: (str?: AnyObject) => void) => {
			const len = fullMarkdown.length;
			let __currentMarkdown = currentMarkdown.current;
			const showResume = () => {
				if (__currentMarkdown.length < len) {
					__currentMarkdown = me.substring(0, __currentMarkdown.length + 1);
					currentMarkdown.current = __currentMarkdown;
					forceUpdate(() => __currentMarkdown);
					const lastChar = __currentMarkdown[__currentMarkdown.length - 2];
					resumeEditorRef.current?.goBottom();
					if (lastChar === "\n") {
						if (isMobile && !enableHtml) {
							mobileGoBottom(10000);
						}
					}
					timer.current.push(setTimeout(showResume, interVal.current));
				} else {
					resolve();
				}
			};
			showResume();
		});
	};

	const writeShowHTML = () => {
		return new Promise((resolve: (str?: AnyObject) => void) => {
			setEnableHtml(true);
			if (isMobile) {
				if (resumeEditorRef.current && styleEditorRef.current) {
					mobileGoBottom(getCurrentScrollTop(true));
				}
			}
			resolve();
		});
	};
	const makeResume = async () => {
		await writeStyle(0);
		await writeResume();
		await writeStyle(1);
		await writeShowHTML();
		await writeStyle(2);
		if (bottomNavRef.current) bottomNavRef.current?.playMusic();
		if (isMobile) {
			mobileGoBottom(10000);
		}
		timer.current = [];
	};
	const onSkipAnimation = () => {
		if (timer.current.length) {
			timer.current.forEach((t) => clearTimeout(t));
			timer.current = [];
		}
		fullStyle.map((f) => (styleCode.current += f));
		currentMarkdown.current = fullMarkdown;
		setEnableHtml(true);
		if (resumeEditorRef.current) {
			resumeEditorRef.current?.goBottom();
		}
		if (styleEditorRef.current) {
			styleEditorRef.current?.goBottom();
		}
		if (bottomNavRef.current) {
			bottomNavRef.current?.playMusic();
		}
		if (isMobile) {
			mobileGoBottom(10000);
		}
	};
	const onPauseAnimation = (paused: boolean) => {
		if (timer.current.length && paused) {
			timer.current.forEach((t) => clearTimeout(t));
		} else {
			makeResume();
		}
	};

	useEffect(() => {
		loadMobileStyle();
	}, []);
	window.addEventListener("resize", debounce(loadMobileStyle, 100), false);

	return (
		<div className="h-full w-full overflow-y-auto current-page">
			<AnimationSpeed updateSpeed={(value) => (interVal.current = value)} speed={interVal.current} />
			<div className="main">
				<StyleEditor
					styleCode={styleCode.current}
					setStyleCode={(value) => {
						styleCode.current = value;
						forceUpdate(() => value);
					}}
					ref={styleEditorRef}
				/>
				<ResumeEditor markdown={currentMarkdown.current} showHTML={enableHtml} ref={resumeEditorRef} />
			</div>
			<BottomNav ref={bottomNavRef} onSkip={onSkipAnimation} onPaused={onPauseAnimation} />
		</div>
	);
};
export default HomePage;
