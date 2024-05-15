import { Layout, Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import "./index.less";
import { Content } from "antd/es/layout/layout";
import {
	CodeSandboxOutlined,
	HomeOutlined,
	FireOutlined,
	// SmileOutlined,
	HeartOutlined,
	HeatMapOutlined
} from "@ant-design/icons";
import { FC, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
const layoutStyle = {
	overflow: "hidden",
	width: "100%",
	maxWidth: "100%"
};
const contentStyle: React.CSSProperties = {
	maxHeight: "100%",
	height: "100%",
	color: "unset",
	backgroundColor: "unset",
	overflowY: "auto",
	position: "relative"
};

const siderStyle: React.CSSProperties = {
	color: "#fff",
	backgroundColor: "#001529"
};
type MenuItem = Required<MenuProps>["items"][number];
const items: MenuItem[] = [
	{ key: "/views/home/index", icon: <HomeOutlined />, label: "首页" },
	{
		key: "1",
		label: "恋爱系列",
		icon: <HeartOutlined />,
		children: [
			{ key: "/views/love-box/index", icon: <CodeSandboxOutlined />, label: "恋爱盒子" },
			{ key: "/views/love-you/index", icon: <FireOutlined />, label: "爱心发射" }
		]
	},
	{
		key: "2",
		label: "THREE.JS",
		icon: <HeatMapOutlined />,
		children: [
			{
				key: "21",
				label: "原生three.js",
				type: "group",
				children: [{ key: "/views/threejs/three/index", icon: <HeatMapOutlined />, label: "入门盒子" }]
			},
			{
				key: "22",
				label: "fiber",
				type: "group",
				children: [
					{ key: "/views/threejs/fiber/box-1/index", icon: <HeatMapOutlined />, label: "入门盒子" },
					{ key: "/views/threejs/fiber/box-2/index", icon: <HeatMapOutlined />, label: "model加载" }
				]
			}
		]
	}
];
const LayoutPage: FC = () => {
	const [collapsed, setCollapsed] = useState(true);
	const nav = useNavigate();
	const location = useLocation();
	useEffect(() => {
		nav(location.pathname ? location.pathname : `${items[0]?.key}`);
		console.log({ location });
	}, []);
	return (
		<div className="h-full w-full flex layout-page">
			<Layout style={layoutStyle}>
				<Sider
					style={siderStyle}
					className={collapsed ? "collapsibled" : ""}
					collapsible
					collapsed={collapsed}
					onCollapse={(value) => setCollapsed(value)}
				>
					<div className="h-[40px] m-[4px] mt-[8px] flex justify-center items-center text-[2rem] text-[yellow]">
						{/* <SmileOutlined /> */}
						<img
							className="avatar"
							title="花如雪(FlowersLikeSnow)"
							src="https://q1.qlogo.cn/g?b=qq&amp;nk=360913684&amp;s=640"
						/>
					</div>
					<Menu
						defaultSelectedKeys={[location.pathname ? location.pathname : `${items[0]?.key}`]}
						defaultOpenKeys={["sub1"]}
						mode="inline"
						theme="dark"
						items={items}
						onClick={({ key }) => nav(key)}
					/>
				</Sider>
				<Layout>
					<Content style={contentStyle}>
						<Outlet />
						<span className="w-full absolute bottom-[5px] text-[14px] text-[#ccc] flex flex-wrap justify-center">
							<div className="mx-[10px] whitespace-nowrap">备案号:湘ICP备2020020115号</div>
							<div className="whitespace-nowrap">
								工信部网站（<span>https://beian.miit.gov.cn</span>）
							</div>
						</span>
					</Content>
				</Layout>
			</Layout>
		</div>
	);
};
export default LayoutPage;
