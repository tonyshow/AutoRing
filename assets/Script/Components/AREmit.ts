import EnumPrefab from "../../Framework/Auto/EnumPrefab";
import Interface from "../../Framework/Interface/Interface";
import ResUtil from "../../Framework/Manager/ResManager/ResUtil";
import g_global from "../GameGlobal";

const { ccclass, property } = cc._decorator;
/**
 * 发射器
 */
@ccclass
export default class AREmit extends Interface {
  @property({ tooltip: "发射器预制体", type: cc.Enum(EnumPrefab) })
  emitPrefab = EnumPrefab.NONE;
  @property({ tooltip: "发射器球预制体", type: cc.Enum(EnumPrefab) })
  emitQPrefab= EnumPrefab.NONE;
  @property({ tooltip: "发射器父节点", type: cc.Node })
  emitParentNode: cc.Node = null;
  @property({ tooltip: "发射器子弹父节点", type: cc.Node })
  emitBulletParentNode: cc.Node = null;

  emitNode:cc.Node=null;//发射器对象


  @property({ tooltip: "发射球音效", type: cc.AudioClip })
  audio: cc.AudioClip = null;

  async start(){
    this.eveList.push(["ARCleanEmit",this.doCleanAllQ.bind(this)]);
    super.start()
    this.emitNode =await ResUtil.getNodeByEnumPrefab(this.emitPrefab ,this.emitParentNode)
    this.emitNode.setPosition(this.emitParentNode.convertToNodeSpaceAR(this.emitParentNode.parent.convertToWorldSpaceAR(this.emitParentNode.position)))
    g_global.gameUIDataManager.refreshEmitWorldPosition(this.emitParentNode.convertToWorldSpaceAR(this.emitNode.position))
  }
  async onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_START, this.onClick, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onMove, this);
    if (!this.node.getComponent(cc.Button)) {
      this.node.addComponent(cc.Button);
    }
  }
  onClick(eve) {
    var locationInNode = eve.target.convertToNodeSpaceAR(eve.getLocation());
    if(!locationInNode){
      return;
    }
    this.emitNode.x = locationInNode.x;
    g_global.gameUIDataManager.refreshEmitWorldPosition(this.emitNode.parent.convertToWorldSpaceAR(this.emitNode.position))
    //
    this.doEmit();
  }
  onMove(eve){
    var locationInNode = eve.target.convertToNodeSpaceAR(eve.getLocation());
    this.emitNode.x = locationInNode.x;
  }
  //我放发射子弹
  async doEmit() {
    if(!g_global.gameUIDataManager.isEnemyCanEmit){
      return;
    }
    cc.audioEngine.play(this.audio, false, 1);
    var emitQNode =await ResUtil.getNodeByEnumPrefab(this.emitQPrefab ,this.emitBulletParentNode)
    emitQNode.setPosition(this.emitBulletParentNode.convertToNodeSpaceAR(this.emitParentNode.convertToWorldSpaceAR(this.emitNode.getPosition())));
    emitQNode.runAction(this.emitAction());
  }
  emitAction() {
    return cc.moveBy(1, 0, cc.winSize.height * 1.2);
  }
  doCleanAllQ(){
    this.emitBulletParentNode.removeAllChildren(true);
  }
}
