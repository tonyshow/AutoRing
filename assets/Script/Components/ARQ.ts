import _ from "underscore";
import EnumPrefab from "../../Framework/Auto/EnumPrefab";
import ResUtil from "../../Framework/Manager/ResManager/ResUtil";
import g_global from "../GameGlobal";

const { ccclass, property } = cc._decorator;
@ccclass
export default class ARQ extends cc.Component {
  @property({ tooltip: "球" })
  isPeng: boolean = false;
  isRming: boolean = false; //等待死亡动画播放完成再进行删除
  async onLoad() {
  }
  onCollisionEnter(otherNode: any, selfNode: any) {
    //被碰撞体直接攻击
    if (otherNode.tag === 1000) {
      this.isPeng = true;
      this.doDestroy();
      return;
    }
  }
  /**
   * 当碰撞结束后调用
   * @param  {Collider} otherNode 产生碰撞的另一个碰撞组件
   * @param  {Collider} selfNode  产生碰撞的自身的碰撞组件
   */
  onCollisionExit(otherNode: any, selfNode: any) {
    //被同类型的碰撞提攻击
    let otherNodeCtr = otherNode.getComponent(ARQ);
    if (!!otherNodeCtr) {
      if (!!otherNodeCtr.isPeng) {
        if (otherNode.tag == selfNode.tag) {
          this.doDestroy();
          this.isPeng = true;
        }
      }
    }
  }

  doDestroy() {
    if (!!this.isRming) {
      return;
    }
    this.isRming = true;
    let act = cc.sequence(
      cc.scaleTo(0.01, 0).easing(cc.easeBackInOut()),
      cc.callFunc(() => {
        this.node.destroy();
      })
    );
    this.node.runAction(act);
  }
}
