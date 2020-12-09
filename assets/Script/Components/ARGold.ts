import _ from "underscore";
import g_global from "../GameGlobal";
import ARQ from "./ARQ";
const { ccclass, property } = cc._decorator;
@ccclass
export default class ARGold extends ARQ {
  async doDestroy() {
    if (!this.isRming) {
      //再票到金币位置
      let goldWordPostion = this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
      g_global.eveLister.emit("ARMoneyChange", 1, goldWordPostion);
    }
    super.doDestroy();
  }
}
