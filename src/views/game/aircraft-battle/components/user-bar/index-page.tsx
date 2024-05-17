import { FC, useMemo, useState } from "react";
import "./index.less";
import { userInfoStore } from "@/store/aircraft-battle/userI-info";
import { AnyObject } from "antd/es/_util/type";
import { constantStore as Constant } from "@/store/aircraft-battle/constant";
const { width } = Constant.window;
/**
 * 飞机大战主界面
 * @returns
 */
const UserBarPage: FC<{
	/** 游戏开始 */
	startGame: () => void;
	/** 游戏暂停结束 */
	stopGame: () => void;
}> = (props) => {
	const { startGame, stopGame } = props;
	const [gameType, setGameType] = useState<boolean>(true);
	const [maskBox, setMaskBox] = useState<boolean>(false);
	const playGame = () => {
		if (maskBox) {
			stopGame();
		} else {
			startGame();
		}
		setGameType(!gameType);
		setMaskBox(!maskBox);
	};
	const playImg = useMemo(() => (gameType ? Constant.aircraft.stop : Constant.aircraft.paly), [gameType]);
	/**
	 * 暂停开始按钮
	 */
	const stopButton = <div onClick={playGame} style={{ ...styles.stateimg, backgroundImage: `url(${playImg})` }} />;
	return (
		<div style={styles.userBarCon as AnyObject}>
			<div style={styles.userInfo}>
				<span style={styles.scoreText}>血量: {userInfoStore.currentBlood}%</span>
				<span style={styles.scoreText}>得分: {userInfoStore.score}</span>
			</div>
			<div className=" flex justify-end items-center mr-[15px]" style={{ display: !maskBox ? "flex" : "none" }}>
				{stopButton}
			</div>
			<div
				className="fixed w-full h-full top-0 flex justify-center items-center bg-[rgba(0,0,0,.5)]"
				style={{ display: maskBox ? "flex" : "none" }}
			>
				{stopButton}
			</div>
		</div>
	);
};
export default UserBarPage;

const styles = {
	userBarCon: {
		display: "flex",
		flexDirection: "row",
		height: 50,
		width: width,
		position: "absolute",
		top: 0,
		zIndex: 1,
		alignItems: "center"
	},
	userInfo: {
		flex: 1,
		justifyContent: "center"
	},
	bloodBarCon: {
		flexDirection: "row",
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
		marginLeft: 15
		// marginTop: 5
	},
	stateimg: {
		width: 40,
		height: 40,
		marginHorizontal: 15,
		marginVertical: 5,
		cursor: "pointer",
		backgroundRepeat: "no-repeat",
		backgroundSize: "contain"
	}
};
