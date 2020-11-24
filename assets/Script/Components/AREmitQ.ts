import g_global from "../GameGlobal";

const {ccclass, property} = cc._decorator;
@ccclass
export default class AREmitQ extends cc.Component {
  onCollisionEnter(otherNode:any, selfNode:any) {
    //被碰撞体直接攻击
    selfNode.destroy();
    this.node.destroy();
    g_global.platform.doVibrateShort();
  }
}