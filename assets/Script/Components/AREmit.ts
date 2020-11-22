import EnumPrefab from "../../Framework/Auto/EnumPrefab";
import ResUtil from "../../Framework/Manager/ResManager/ResUtil";

const { ccclass, property } = cc._decorator;
/**
 * 发射器
 */
@ccclass
export default class AREmit extends cc.Component {
  @property({ tooltip: "发射器预制体", type: cc.Enum(EnumPrefab) })
  emitPrefab = EnumPrefab.NONE;
  @property({ tooltip: "发射器球", type: cc.Enum(EnumPrefab) })
  emitQPrefab= EnumPrefab.NONE;
  @property({ tooltip: "发射器弹头口", type: cc.Node })
  emitPosNode: cc.Node = null;

  emitNode:cc.Node=null;//发射器对象

  async onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_START, this.onClick, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onMove, this);
    if (!this.node.getComponent(cc.Button)) {
      this.node.addComponent(cc.Button);
    }
    this.emitNode =await ResUtil.getNodeByEnumPrefab(this.emitPrefab ,this.emitPosNode.parent)
    this.emitNode.setPosition(this.emitPosNode.position)
  }
  onClick(eve) {
    var locationInNode = eve.target.convertToNodeSpaceAR(eve.getLocation());
    this.emitNode.x = locationInNode.x;
    this.doEmit();
  }
  onMove(eve){
    var locationInNode = eve.target.convertToNodeSpaceAR(eve.getLocation());
    this.emitNode.x = locationInNode.x;
  }
  async doEmit() {
    var emitQNode =await ResUtil.getNodeByEnumPrefab(this.emitQPrefab ,this.node)
    emitQNode.setPosition(this.emitNode.getPosition());
    emitQNode.runAction(this.emitAction());
  }
  emitAction() {
    return cc.moveBy(1, 0, cc.winSize.height * 1.2);
  }
}
