import { useState } from "react";
import "../index.less";
import { InputNumber, Popconfirm } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
/**
 * 动画速度组件
 * @param props
 * @returns
 */
export const ResumeEditor = (props: { speed: number; updateSpeed: (speed: number) => void }) => {
	const { updateSpeed, speed } = props;
	const [isDown, setIsDown] = useState<boolean>(false);
	const [value, setValue] = useState<number>(speed || 0);

	return (
		<div className="AnimationSpeedComponent">
			<Popconfirm
				title="修改写字速度"
				description={
					<InputNumber
						className="w-[200px]"
						style={{ textAlign: "center" }}
						value={value}
						max={100}
						min={1}
						onChange={(e) => setValue(e || 0)}
						placeholder="请输入1到100的整数"
					/>
				}
				okText="确定"
				onConfirm={() => updateSpeed(value)}
				cancelText="取消"
				onCancel={() => setValue(speed)}
			>
				<div className="down" onClick={() => setIsDown(!isDown)}>
					<CaretDownOutlined style={{ color: "#2396ef", fontSize: "30px" }} />
				</div>
			</Popconfirm>
		</div>
	);
};
export default ResumeEditor;
