import { proxyWithStorage } from "@/utils/index";
import bgMap from "@/assets/aircraft-battle/image/Map_1_1.png"
import paly from "@/assets/aircraft-battle/image/forme_btn_play.png"
import stop from "@/assets/aircraft-battle/image/forme_btn_stop.png"
import myAircraft from "@/assets/aircraft-battle/image/wsparticle_66.png"
import foeAircraft from "@/assets/aircraft-battle/image/enemypl_200.png"
import boomImg from "@/assets/aircraft-battle/image/wsparticle_baodian001.png"
import bossBoomImg from "@/assets/aircraft-battle/image/wsparticle_03.png"
import myBullte from "@/assets/aircraft-battle/image/ani_bullet_tailing0.png"
import bossBullteImg from "@/assets/aircraft-battle/image/boss_bullte.png"

/**
 * 默认游戏数据
 * @returns
 */
export const getDefault = () => {
	return {
		window: {
			width: 0,//Dimensions.get("window").width,
			height: 0,//Dimensions.get("window").height,
			bgMap,//默认背景地图
		},
		aircraft: {
			paly,
			stop,
			myAircraftSize: 40,//主机大小
			foeAircraftSize: 40,//默认敌机大小
			bossSize: 100,//boos大小
			myAircraft,//默认主机图片
			foeAircraft,//默认敌机图片
			boomImg,//默认飞机爆炸图片
			bossBoomImg,//默认boss飞机爆炸图片
			createFoeAircraftTime: 3000,//创建敌机间隔
			foeAircraftDuration: 30000,//敌机的速度
			bossDuration: 10000,//boss出场的速度
			boomDuration: 600,//敌机爆炸速率
			bossBoomDuration: 1200,//boss爆炸速率
			shotTime: 1000,//主机发射子弹间隔
			shotDuration: 3000,//主机子弹速度
			boss_shotTime: 1000,//boss发射子弹间隔
			boss_shotDuration: 3000,//boss子弹速度
			myBullte,//主机默认子弹图片
			bossBullteImg,//主机默认子弹图片
		}
	}
};

export type ConstantStore = ReturnType<typeof getDefault>;
export const constantStore = proxyWithStorage<ConstantStore>('constant', getDefault())

export const setWindow = (data: ConstantStore["window"]) => {
	constantStore.window = data;
}

export const setAircraft = (data: ConstantStore["aircraft"]) => {
	constantStore.aircraft = data;
}



