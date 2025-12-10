import { Layout } from "antd";
import "./index.less";
import { Content } from "antd/es/layout/layout";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { useLayout } from "./layout";

const LayoutPage: FC = () => {
	const { layoutStyle, contentStyle } = useLayout();
	return (
		<div className="h-full w-full flex layout-page">
			<Layout style={layoutStyle}>
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
		</div>
	);
};
export default LayoutPage;
