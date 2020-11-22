const {ccclass, property} = cc._decorator;
@ccclass
export default class AREmitQ extends cc.Component {

  //onCollisionEnter(other, self) {
  //  cc.log("AREmitQ.onCollisionEnter")
  //    this.node.destroy();
  //}
  onCollisionEnter(otherNode:any, selfNode:any) {
    //被碰撞体直接攻击
    cc.log("AREmitQ.onCollisionEnter")
    selfNode.destroy();
    this.node.destroy();
  }
}
