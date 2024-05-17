import { FC, useEffect, useRef } from "react";
import "./index.less";
import UserBar from "./components/user-bar/index-page";
// import Constant from "./common/constant";
import { constantStore  as Constant } from "@/store/aircraft-battle/constant";
const { bgMap, height, width } = Constant.window;

/**
 * 飞机大战主界面
 * @returns
 */
const AircraftBattlePage: FC = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    useEffect(()=>{
        if (containerRef.current) {
            console.log(containerRef.current.offsetHeight,containerRef.current.offsetWidth);
            Constant.window.width = containerRef.current.offsetWidth
            Constant.window.height = containerRef.current.offsetHeight
        }
    },[])
	const startGame = () => {};
	const stopGame = () => {};
	return (
		<div style={styles.container} ref={containerRef}>
			<UserBar startGame={startGame} stopGame={stopGame} />
			{/* <BullteContainer ref={"bullteContainer"} parentContext={this} isBoom={this.isBoom} />
			<FoeAircraftContainer bossStore={this.bossStore} ref={"foeAircraftContainer"} />
			<MyAircraft ref="myAircraft" positionY={this.myAircraft_positionY} positionX={this.myAircraft_positionX} /> */}
		</div>
	);
};
export default AircraftBattlePage;

const styles = {
	container: {
		flex: 1,
        height: '100%',
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF",
		backgroundImage: `url(${bgMap})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover"
	},
	map: {
		flex: 1
	},
	mapImg: {
		flex: 1,
		width: width
	},
	userBarCon: {
		flexDirection: "row",
		// justifyContent: 'center',
		// alignItems: 'center',
		height: 50,
		width: width,
		position: "absolute",
		top: 0,
		zIndex: 1
	},
	userInfo: {
		flex: 1
	},
	bloodBarCon: {
		flexDirection: "row",
		// justifyContent: 'center',
		// alignItems: 'center',
		height: 20
	},
	bloodBar: {
		backgroundColor: "#CE0914",
		height: 12
	},
	scoreText: {
		backgroundColor: "transparent",
		color: "#fff",
		fontSize: 14,
		fontWeight: "bold",
		marginLeft: 15,
		marginTop: 5
	},
	stateimg: {
		width: 40,
		height: 40,
		marginHorizontal: 15,
		marginVertical: 5
	}
};
