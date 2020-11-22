const { ccclass, property } = cc._decorator;
@ccclass
export default class ARQ extends cc.Component {
  @property({ tooltip: "球" })
  isPeng: boolean = false;
  isRming :boolean = false;
  onCollisionEnter(otherNode:any, selfNode:any) {
    //被碰撞体直接攻击
    if (otherNode.tag === 1000) {
      this.isPeng = true;
      this.doDestroy()
      return;
    }
  }
  onCollisionStay(otherNode:any, selfNode:any) {
    //console.log("onCollisionStay");
  }
  /**
   * 当碰撞结束后调用
   * @param  {Collider} otherNode 产生碰撞的另一个碰撞组件
   * @param  {Collider} selfNode  产生碰撞的自身的碰撞组件
   */
  onCollisionExit(otherNode:any, selfNode:any) {
    //被同类型的碰撞提攻击
    let otherNodeCtr = otherNode.getComponent(ARQ);
    if (!!otherNodeCtr) {
      if(!!otherNodeCtr.isPeng ){
        //console.log("onCollisionExit.ARQ",otherNodeCtr.isPeng);
        //console.log("otherNode.tag",otherNode.tag);
        //console.log("selfNode.tag",selfNode.tag);
        if ( otherNode.tag == selfNode.tag) {
          this.doDestroy();
          //console.log("onCollisionExit");
          this.isPeng = true;
        }
      }
    }
  }

  doDestroy() {
    if(!!this.isRming){
      return;
    }
    this.isRming = true;
    let act = cc.sequence( cc.scaleTo(0.01,0).easing(cc.easeBackInOut()),cc.callFunc(()=>{
      this.node.destroy();
    }) )
    this.node.runAction(act);
  }
}
