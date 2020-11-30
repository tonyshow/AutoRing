import _ from "underscore";
import EnumPrefab from "../../Framework/Auto/EnumPrefab";
import ResUtil from "../../Framework/Manager/ResManager/ResUtil";
import g_global from "../GameGlobal";

const { ccclass, property } = cc._decorator;
@ccclass
export default class ARGold extends cc.Component {

  onCollisionEnter(otherNode: any, selfNode: any) {
    //被碰撞体直接攻击
    if (otherNode.tag === 1000) {
      this.node.destroy();
      return;
    }
  }
}
