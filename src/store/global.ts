import { proxyWithStorage } from "@/utils/index";

/**
 * 默认登录用户数据
 * @returns
 */
export const getDefaultUser = () => {
	const data  = {
		user: {
			username: '',
			password: '',
		}
	};
	return data;
};
export interface Global {
	user: UserInfo
}
export interface UserInfo {
	username: string
	password: string
}
export const userState = proxyWithStorage<Global>(
	"userState",
	getDefaultUser()
);
/**
 * 更新用户信息
 * @param data 
 */
export const setUserInfo = (user: UserInfo) => {
	userState.user = user;
};


