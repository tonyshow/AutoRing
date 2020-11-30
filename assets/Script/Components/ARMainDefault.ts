import _ from "underscore";
import ResUtil from "../../Framework/Manager/ResManager/ResUtil";
import g_global from "../GameGlobal";
import ARMain from "./ARMain";
const {ccclass, property} = cc._decorator;
@ccclass
export default class ARMainDefault extends ARMain {
  gate=null;
  async setGate(gate){
    this.gate = gate;
    await this.createLevel(this.gate);
  }
  async createLevel(gate) {
    await super.createLevel(gate)
    if (!!gate) {
      for (let ballInfo of gate) {
        let ballNode = await ResUtil.getNodeByEnumPrefab(
          ballInfo.enumPrefab,
          this.node
        );
        let pos = this.node.convertToNodeSpaceAR(ballInfo.position);
        //ballNode.setPosition(pos);

        this.addFinsh();
        ballNode.setPosition(cc.winSize.width, cc.winSize.height);
        ballNode.name ="_"+ this.addCnt;
        ballNode.runAction(
          cc.sequence([
            cc.delayTime(this.addCnt * 0.005),
            cc.moveTo(0.3, pos),
            cc.callFunc(() => {
              this.addAnimFinsh();
            }),
          ])
        );

      }
      g_global.gameUIDataManager.refreshIsEnemyCanEmit(true)
    }
  }
   /**
   * 计算总数
   */
  protected calculationQTotal() {
    super.calculationQTotal();
    this.totalQCnt = _.size(this.gate);
    return this.totalQCnt;
  }

}
