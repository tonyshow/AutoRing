import _ from "underscore";
import CompRotateTo from "../../Framework/Components/CompRotateTo";
import Interface from "../../Framework/Interface/Interface";
import ResUtil from "../../Framework/Manager/ResManager/ResUtil";
import EnumARMapAction from "../EnumARMapAction";
import EnumARMapShape from "../EnumARMapShape";
import g_global from "../GameGlobal";
const { ccclass, property } = cc._decorator;
@ccclass
export default class ARMain extends Interface {
  interval = null;
  addCnt = 0; //有入场动画的要等动画执行完成
  addEdQCnt = 0; //有入场动画的要等动画执行完成
  isRm = false;
  totalQCnt = 0; //关卡总球数
  gate = {
    //背景
    map:{
      action:EnumARMapAction.NONE,//动作
      shape:EnumARMapShape.SQUARE,//形状
    },
    list:[]//球数据
  };//当前编辑的map数据
  init() {
    this.interval = null;
    this.addCnt = 0; //有入场动画的要等动画执行完成
    this.addEdQCnt = 0; //有入场动画的要等动画执行完成
    this.isRm = false;
    this.totalQCnt = 0; //关卡总球数
    this.gate = null; //关卡数据
  }
  async setGate(gate){
    this.gate = gate;
  }

  start() {
    //接受攻击指令
    this.eveList.push(["ARAtc", this.doEnemyAtc.bind(this)]);
    super.start();
    this.interval = setInterval(() => {
      if (
        this.addCnt > 0 &&
        !this.isRm &&
        !!this.node &&
        0 === this.node.childrenCount
      ) {
        this.isRm = true;
        g_global.gameUIDataManager.refreshIsEnemyCanEmit(false)
        g_global.eveLister.emit("ARCleanAllQ",true);
        g_global.eveLister.emit("armaprm");
        this.node.destroy();
        clearInterval(this.interval);
      }
    }, 200);
  }
  /**敌人发射攻击 */
  async doEnemyAtc(atcQEnumPrefab, worldPosition) {
    let atcNode: cc.Node = await ResUtil.getNodeByEnumPrefab(
      atcQEnumPrefab,
      this.node.parent
    );
    let position = this.node.parent.convertToNodeSpaceAR(worldPosition);
    atcNode.setPosition(position);
    //网发射器开火
    let emitWorldPosition = g_global.gameUIDataManager.getEmitWorldPosition();
    let endPosition = this.node.parent.convertToNodeSpaceAR(emitWorldPosition);
    atcNode.runAction(
      cc.sequence([
        cc.moveTo(1, endPosition.x, endPosition.y),
        cc.callFunc(() => {
          atcNode.destroy();
        }),
      ])
    );
  }
  addFinsh(addCnt: number = 1) {
    this.addCnt += addCnt;
  }
  addAnimFinsh(addEdQCnt: number = 1) {
    this.addEdQCnt += addEdQCnt;
    /**添加完成 */
    if (this.addEdQCnt >= this.totalQCnt && this.totalQCnt != 0) {
      g_global.gameUIDataManager.refreshIsEnemyCanEmit(true)
    }
  }
  /**重新创建关卡的时候关闭发射 */
  async createLevel(gate) {
    this.init();
    this.gate = gate;
    this.calculationQTotal();
    g_global.gameUIDataManager.refreshIsEnemyCanEmit(false);
    if( EnumARMapAction.ROTATE === this.gate.map.action ){
      let compRotateTo =  this.node.addComponent(CompRotateTo);
      compRotateTo.setDuration(60);
      compRotateTo.resetAction();
    }
  }
  getPosList(data?: { r?: number; centerPostion?: cc.Vec2; cnt?: number }) {
    let list = [];
    return list;
  }
  /**
   * 计算总数
   */
  protected calculationQTotal() {
    return 0;//子类计算
  }
  onDestroy() {
    super.onDestroy();
  }
}
