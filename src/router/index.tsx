/* eslint-disable */
import { lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
// import Login from "@/App.tsx";
// import Login from "@/views/login";
import Layout from "@/layout";
import { upperCase } from "lodash-es";
const pageFilesCtx = import.meta.glob("../views/**/*page.tsx");

const pages = Object.keys(pageFilesCtx).map((k: string) => {
	const arr = k
		.split("/")
		.filter((v) => v != ".." && v != "views")
		.map((v) => v.replace("-page.tsx", ""));
	const path = arr.filter((v) => v !== "index").join("/");
	console.log(path, arr);
	const name =
		arr
			.map((v) => {
				const words = v.split("-");
				return words.map((w) => upperCase(w.charAt(0)) + w.substring(1)).join("");
			})
			.join("") + "Page";
	// console.log(pageFilesCtx[k], name, path);
	return {
		path,
		auth: true,
		name,
		component: lazy(pageFilesCtx[k] as any)
	};
});
const routes = [
	{
		name: "layout",
		path: "/views",
		component: Layout,
		children: pages
	},
	// {
	// 	name: "login",
	// 	path: "/login",
	// 	auth: false,
	// 	component: Login,
	// 	state: {
	// 		a: 1
	// 	}
	// }
];

// 路由处理方式
const generateRouter = (routers: any) => {
	return routers.map((item: any) => {
		if (item.children) {
			item.children = generateRouter(item.children);
		}

		item.element = (
			<Suspense fallback={<div>加载中...</div>}>
				{/* 把懒加载的异步路由变成组件装载进去 */}
				{item.name ? (
					// <KeepAlive id={item.name}>
					<item.component />
				) : (
					// </KeepAlive>
					<item.component />
				)}
			</Suspense>
		);
		return item;
	});
};

/**
 * 路由
 * @returns
 */
const Router = () =>
	useRoutes([
		...generateRouter(routes),
		{
			path: "/",
			auth: false,
			skipLazyLoad: true,
			element: <Navigate to="views" />
		}
	]);
export { Router };
