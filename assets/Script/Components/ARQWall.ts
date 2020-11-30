/**
 * 有血墙
 */
import _ from "underscore";
const { ccclass, property } = cc._decorator;
@ccclass
export default class ARQWall extends cc.Component {
  @property({ tooltip: "墙血值Label", type: cc.Label })
  hpLb: cc.Label = null;
  @property({ tooltip: "墙血值" })
  hpValue = 10;
  async onLoad() {}
  onCollisionEnter(otherNode: any, selfNode: any) {
    //被碰撞体直接攻击
    if (otherNode.tag === 1000) {
      this.reduceHp();
      return;
    }
  }
  reduceHp(value: number = 1) {
    this.hpValue -= value;
    if (this.hpValue <= 0) {
      this.hpValue = 0;
      this.node.destroy();
    }
    this.hpLb.string = this.hpValue.toString();
  }
  /**
   * 当碰撞结束后调用
   * @param  {Collider} otherNode 产生碰撞的另一个碰撞组件
   * @param  {Collider} selfNode  产生碰撞的自身的碰撞组件
   */
  onCollisionExit(otherNode: any, selfNode: any) {
    //被同类型的碰撞提攻击
  }
  doDestroy() {}
}
