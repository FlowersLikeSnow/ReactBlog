import CryptoJS from "crypto-js";
const aesCfg = {
    iv: CryptoJS.enc.Utf8.parse("5201314❤ღ( ´･ᴗ･` )"),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
};
export const passwordEncrypt = (password:string) => {
    return CryptoJS.AES.encrypt(password,CryptoJS.enc.Utf8.parse(`lijundong.cn`),aesCfg).toString()
}