import { proxy, subscribe } from "valtio";
export function proxyWithStorage<T extends object>(
	key: string,
	initValue: T,
	storage: Storage = localStorage
) {
	/* eslint-disable */
	const storageRawValue = storage.getItem(key);
	if (
		storageRawValue !== null &&
		storageRawValue !== "" &&
		storageRawValue !== "undefined"
	) {
		try {
			initValue = JSON.parse(storageRawValue);
		} catch (error: any) {
			console.error(`[sotre parse error]:${error.toString()}`);
		}
	}
	const state = proxy(initValue);
	subscribe(state, () => {
		if (state) {
			storage.setItem(key, JSON.stringify(state));
		} else {
			storage.removeItem(key);
		}
	});

	return state;
	
}
