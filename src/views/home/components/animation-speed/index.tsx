import { useState } from "react";
import "./index.less";
import { Input, Popconfirm } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

export const ResumeEditor = (props: {
	speed: number;
	updateSpeed: (speed: number) => void;
	showHeader: (value: boolean) => void;
}) => {
	const { updateSpeed, showHeader, speed } = props;
	const [isDown, setIsDown] = useState<boolean>(false);
	const [value, setValue] = useState<number>(speed || 0);

	return (
		<div className="animation-speed-component">
			<Popconfirm
				title="修改写字速度"
				description={
					<Input
						type="text"
						style={{textAlign: "center"}}
						value={value}
						onChange={(e) => setValue(Number(e.target.value))}
						placeholder="请输入1到100的整数"
						v-number
					/>
				}
				okText="确定"
				onConfirm={() => updateSpeed(value)}
				cancelText="取消"
				onCancel={() => setValue(speed)}
			>
				<div
					className="down"
					onClick={() => {
						setIsDown(!isDown);
						showHeader(!isDown);
					}}
				>
					<CaretDownOutlined style={{ color: "#2396ef", fontSize: "30px" }} />
				</div>
			</Popconfirm>
		</div>
	);
};
export default ResumeEditor;
