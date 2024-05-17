import bgMap from "../image/Map_1_1.png"
import paly from "../image/forme_btn_play.png"
import stop from "../image/forme_btn_stop.png"
import myAircraft from "../image/wsparticle_66.png"
import foeAircraft from "../image/enemypl_200.png"
import boomImg from "../image/wsparticle_baodian001.png"
import bossBoomImg from "../image/wsparticle_03.png"
import myBullte from "../image/ani_bullet_tailing0.png"
import bossBullteImg from "../image/boss_bullte.png"
const window = {
    width: 0,//Dimensions.get("window").width,
    height: 0,//Dimensions.get("window").height,
    bgMap,//默认背景地图
}

const aircraft = {
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

export default {
    window: window,
    aircraft: aircraft,
}