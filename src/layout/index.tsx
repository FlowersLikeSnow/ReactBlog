import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import "./index.less";
import { Content } from "antd/es/layout/layout";
import { FC, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useLayout } from "./layout";

const LayoutPage: FC = () => {
	const { layoutStyle, contentStyle, siderStyle, menuItems, selecedMenu } = useLayout();
	const [collapsed, setCollapsed] = useState(true);
	const nav = useNavigate();

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
						defaultSelectedKeys={[selecedMenu]}
						defaultOpenKeys={["sub1"]}
						mode="inline"
						theme="dark"
						items={menuItems}
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
