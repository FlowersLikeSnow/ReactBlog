import React from "react";
import ReactDOM from "react-dom/client";
import "./main.less";
import "virtual:windi.css";
import { HashRouter } from "react-router-dom";
import { AliveScope } from "react-activation";
import { Router } from "./router/index.tsx";
import theme from "./theme/default.ts";
import { ConfigProvider } from "antd";
import { HappyProvider } from "@ant-design/happy-work-theme";
import zhCN from "antd/locale/zh_CN";

const createRoot = () => {
	console.log(theme, "theme obj");
	const root = document.getElementById("root")!;
	root.classList.add(`platform-${import.meta.env.VITE_ENV}`);
	ReactDOM.createRoot(root).render(
		<React.StrictMode>
			<AliveScope>
				<HashRouter>
					<HappyProvider>
						<ConfigProvider theme={theme} locale={zhCN}>
							<Router />
						</ConfigProvider>
					</HappyProvider>
				</HashRouter>
			</AliveScope>
		</React.StrictMode>
	);
};
createRoot();
