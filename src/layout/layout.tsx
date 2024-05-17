import {
	CodeSandboxOutlined,
	HomeOutlined,
	FireOutlined,
	DropboxSquareFilled,
	HeartOutlined,
	RocketOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";
import { createContext, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
const menuItems: MenuItem[] = [
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
	// {
	// 	key: "2",
	// 	label: "THREE.JS",
	// 	icon: <HeatMapOutlined />,
	// 	children: [
	// 		// {
	// 		// 	key: "21",
	// 		// 	label: "原生three.js",
	// 		// 	type: "group",
	// 		// 	children: [{ key: "/views/threejs/three/index", icon: <HeatMapOutlined />, label: "入门盒子" }]
	// 		// },
	// 		{
	// 			key: "22",
	// 			label: "fiber",
	// 			type: "group",
	// 			children: [
	// 				{ key: "/views/threejs/fiber/box-1/index", icon: <HeatMapOutlined />, label: "入门盒子" },
	// 				{ key: "/views/threejs/fiber/box-2/index", icon: <HeatMapOutlined />, label: "model加载" }
	// 			]
	// 		}
	// 	]
	// },
	{
		key: "3",
		label: "GAME",
		icon: <DropboxSquareFilled />,
		children: [
			{
				label: "飞机大战",
				key: "/views/game/aircraft-battle/index", 
				icon: <RocketOutlined />
			},
		]
	},
];
export const useLayout = () => {
	const location = useLocation();
	const nav = useNavigate();

	const selecedMenu = useMemo(
		() => (location?.pathname && location?.pathname !== "/views" ? location?.pathname : `${menuItems[0]?.key}`),
		[location?.pathname]
	);
	useEffect(() => {
		nav(selecedMenu);
	}, [nav, selecedMenu]);

	return {
        layoutStyle,
        contentStyle,
        siderStyle,
		menuItems,
		selecedMenu,
	};
};
export type LayoutContext = ReturnType<typeof useLayout>;
export const layoutContext = createContext<LayoutContext>({
    layoutStyle,
    contentStyle,
    siderStyle,
	menuItems,
	selecedMenu: ""
});
