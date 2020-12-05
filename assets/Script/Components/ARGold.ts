import _ from "underscore";
import g_global from "../GameGlobal";
const { ccclass, property } = cc._decorator;
@ccclass
export default class ARGold extends cc.Component {
  isPeng: boolean = false;//是否是一个碰撞体
  isRming: boolean = false; //等待死亡动画播放完成再进行删除
  onCollisionEnter(otherNode: any, selfNode: any) {
    //被碰撞体直接攻击
    if (otherNode.tag === 1000) {
      this.isPeng = true;
      this.doDestroy();
      return;
    }
  }

  onCollisionExit(otherNode: any, selfNode: any) {
    if (!!this.isRming) {
      return;
    }
    //被同类型的碰撞提攻击
    let otherNodeCtr = otherNode.getComponent(ARGold);
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
    //再票到金币位置
    let goldWordPostion = g_global.gameUIDataManager.getTopHeadGoldWordPosition();
    let endPostion = this.node.parent.convertToNodeSpaceAR(goldWordPostion);

    if(!!this.getComponent){
      let collider =  this.getComponent(cc.CircleCollider);
      if(!!collider){
        if(!!collider.destroy){
          collider.destroy();
        }
      }
    }
    cc.error("删除金币");
    this.node.stopAllActions();
    this.node.runAction(
      cc.sequence(
        cc.spawn(cc.scaleTo(0.3,0.8).easing(cc.easeBackOut()),cc.scaleTo(0.3,1.2),cc.moveTo(0.3, endPostion),cc.rotateBy(0.3,360).easing(cc.easeBackOut())),
        cc.callFunc(() => {
          if(!!this.node && !!this.node.destroy){
            this.node.destroy();
          }
          g_global.eveLister.emit("ARMoneyChange", 1);
        })
      )
    );
  }
}
