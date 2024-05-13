import { forwardRef, useImperativeHandle, useMemo, useRef } from "react";
import { ResumeEditorRef } from "../../type";
import "./index.less";
import { marked } from "marked";
/**
 * 简历组件
 */
export const ResumeEditor = forwardRef<
	ResumeEditorRef,
	{
		/** code样式 */
		markdown: string;
		/** 显示html */
		showHTML: boolean;
	}
>((props, ref) => {
	const { markdown, showHTML } = props;
	const result = useMemo(() => (showHTML ? marked(markdown) : markdown), [markdown, showHTML]);
	/**
	 * 暴露给父组件的方法
	 */
	useImperativeHandle(ref, () => ({
		goBottom,
		containerRef: containerRef.current
	}));
	const goBottom = () => {
		if (containerRef?.current) {
			containerRef.current.scrollTop = 100000;
		}
	};
	const containerRef = useRef<HTMLDivElement>(null);
	return (
		<div className={`resume-editor-component resumeEditor ${showHTML ? "htmlMode" : ""}`} ref={containerRef}>
			{showHTML ? <div dangerouslySetInnerHTML={{ __html: result }}></div> : <pre>{result as string}</pre>}
		</div>
	);
});
export default ResumeEditor;
