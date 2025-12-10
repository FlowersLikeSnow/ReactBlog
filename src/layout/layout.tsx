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

export const useLayout = () => {
	const location = useLocation();
	const nav = useNavigate();

	const selecedMenu = useMemo(
		() => (location?.pathname && location?.pathname !== "/views" ? location?.pathname : `/views/home`),
		[location?.pathname]
	);
	useEffect(() => {
		nav(selecedMenu);
	}, [nav, selecedMenu]);

	return {
        layoutStyle,
        contentStyle,
        siderStyle,
		selecedMenu,
	};
};
export type LayoutContext = ReturnType<typeof useLayout>;
export const layoutContext = createContext<LayoutContext>({
    layoutStyle,
    contentStyle,
    siderStyle,
	selecedMenu: ""
});
