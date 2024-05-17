// import { proxyWithStorage } from "@/utils/index";
import { proxy, subscribe } from "valtio";

/**
 * 默认游戏数据
 * @returns
 */
export const getDefault = () => {
	const data = {
		allBlood: 50,// 总血量
		atk: 2,// 攻击力
		blood: 0,// 当前血量
		currentBlood: 100, //
	}
	data.blood = data.allBlood
	return data;
};

export type BossStore = ReturnType<typeof getDefault>;
export const bossStore = proxy<BossStore>(getDefault())

subscribe(bossStore, () => {
	const blood = Math.floor(bossStore.blood / bossStore.allBlood * 100);
	bossStore.currentBlood = blood < 0 ? 0 : blood;
})
export const changBlood = () => {
	bossStore.blood -= 1;
}

export const resetState = () => {
	bossStore.blood = 50;
}



