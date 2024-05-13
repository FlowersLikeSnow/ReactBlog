import { forwardRef, useImperativeHandle, useMemo, useRef } from "react";
import Prism from "prismjs";
import { StyleEditorRef } from "../../type";
import './index.less'
import { AnyObject } from "antd/es/_util/type";
/**
 * 样式组件
 */
export const StyleEditor = forwardRef<
	StyleEditorRef,
	{
		/** code样式 */
		styleCode: string;
		/** 更新 styleCode */
		setStyleCode: (value: string) => void;
	}
>((props, ref) => {
	const { styleCode, setStyleCode } = props;
	const updateCode = (e: MouseEvent | AnyObject) => {
		console.log({e});
		
		setStyleCode((e.target as HTMLDivElement).textContent || "");
	};
	const codeInstyleTag = useMemo(() => `<style>${styleCode}</style>`, [styleCode]);
	const highlightedCode = useMemo(() => Prism.highlight(styleCode, Prism.languages.css, "zh"), [styleCode]);
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
		<div className="container style-editor-component">
			<div className="style-code" dangerouslySetInnerHTML={{ __html: codeInstyleTag }} />
			<div
				className="styleEditor"
				dangerouslySetInnerHTML={{ __html: highlightedCode }}
				contentEditable={true}
				onBlur={updateCode}
				ref={containerRef}
			/>
		</div>
	);
});
export default StyleEditor;
