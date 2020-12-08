import _ from "underscore";
import EnumPrefab from "../../Framework/Auto/EnumPrefab";
import ResUtil from "../../Framework/Manager/ResManager/ResUtil";
import EnumQType from "../EnumQType";
import g_global from "../GameGlobal";

const { ccclass, property } = cc._decorator;
@ccclass
export default class ARQ extends cc.Component {
  @property({ tooltip: "球类型", type: cc.Enum(EnumQType) })
  qType = EnumQType.NONE;

  isPeng: boolean = false;
  isRming: boolean = false; //等待死亡动画播放完成再进行删除

  start(){
    g_global.eveLister.emit("doAddEnumQType",this.qType)
    //cc.error("通知 doAddEnumQType");
  }
  onCollisionEnter(otherNode: any, selfNode: any) {
    //被碰撞体直接攻击
    if (otherNode.tag === 1000 && false==this.isRming) {
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
    if (!!this.isRming) {
      return;
    }
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

  async doDestroy() {
    if (!!this.isRming) {
      return;
    }
    let currWorldPosition = this.node.parent.convertToWorldSpaceAR( this.node.position )
    if(!this.node || !this.node.parent){
      cc.error("出现异常不能再加爆炸特效");
    }
    let boom:cc.Node = await  ResUtil.getNodeByEnumPrefab( EnumPrefab.ARBoomEffect,this.node.parent )
    boom.setPosition(  this.node.parent.convertToNodeSpaceAR(currWorldPosition) );
    this.isRming = true;
    let act = cc.sequence(
      cc.scaleTo(0.05, 0),
      cc.callFunc(() => {
        this.node.destroy();
        g_global.eveLister.emit("rmEnumQType",this.qType);//通知删除球类型
      })
    );
    this.node.stopAllActions();
    this.node.runAction(act);
  }
}
