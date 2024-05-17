// import { proxyWithStorage } from "@/utils/index";
import { proxy, subscribe } from "valtio";

/**
 * 默认游戏数据
 * @returns
 */
export const getDefault = () => {
	const data = {
		allBlood: 3,// 总血量
		atk: 1,// 攻击力
		score: 0,// 得分
		blood: 0,// 当前血量
		currentBlood: 100, //
	}
	data.blood = data.allBlood
	return data;
};

export type UserInfoStore = ReturnType<typeof getDefault>;
export const userInfoStore = proxy<UserInfoStore>(getDefault())


/**
 * 监听总血量更新游戏数据
 */
// subscribe(()=>userInfoStore.allBlood, (e) => {
//     userInfoStore.blood = userInfoStore.allBlood

// })
subscribe(userInfoStore, () => {
	const blood = Math.floor(userInfoStore.blood / userInfoStore.allBlood * 100);
	userInfoStore.currentBlood = blood < 0 ? 0 : blood;
})

/**
 * 更新用户信息
 * @param data 
 */
export const changScore = () => {
	userInfoStore.score += 1;
}

export const changBlood = () => {
	userInfoStore.blood -= 1;
}


export const setBlood = () => {
	userInfoStore.blood = userInfoStore.allBlood;
}


export const resetState = () => {
	userInfoStore.blood = userInfoStore.allBlood;
	userInfoStore.score = 0;//得分
}


