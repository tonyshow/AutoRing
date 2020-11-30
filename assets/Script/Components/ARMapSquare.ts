/**
 *正方形
 */
import _ from "underscore";
import ResUtil from "../../Framework/Manager/ResManager/ResUtil";
import ARMain from "./ARMain";

const { ccclass, property } = cc._decorator;
@ccclass
export default class ARMapSquare extends ARMain {
  async createLevel(gate) {
    await super.createLevel(gate);
    for (let info of gate.list) {
      let list = this.getPosList(info);
      for (let pos of list) {
        this.addFinsh();
        let node = await ResUtil.getNodeByEnumPrefab(
          info.PrefabNameList,
          this.node
        );
        node.setPosition(cc.winSize.width, cc.winSize.height);
        node.name = info.id + "_" + this.addCnt;
        node.runAction(
          cc.sequence([
            cc.delayTime(this.addCnt * 0.005),
            cc.moveTo(0.3, pos),
            cc.callFunc(() => {
              this.addAnimFinsh();
            }),
          ])
        );
      }
    }
  }
  //正方形
  getPosList(data?: { cnt?: number }) {
    super.getPosList(data);
    data = data || {};
    data.cnt = data.cnt || 6;
    let itemWidth = 50;
    let totalWidth = data.cnt * itemWidth;
    let list = [];
    for (let i = 0; i < data.cnt; ++i) {
      for (let j = 0; j < data.cnt; ++j) {
        let x1 = data.cnt * 0.5 - totalWidth * 0.5 + i * itemWidth;
        let y1 = data.cnt * 0.5 + totalWidth * 0.5 - j * itemWidth;
        list.push(new cc.Vec2(x1, y1));
      }
    }
    return list;
  }

  /**
   * 计算总数
   */
  protected calculationQTotal() {
    super.calculationQTotal();
    let cnt = 0;
    for (let info of this.gate.list) {
      cnt += info.cnt * info.cnt;
    }
    this.totalQCnt = cnt;
    return cnt;
  }

  async doEnemyAtc(atcQEnumPrefab,worldPosition){
    //cc.error("ARMapSquare.doEnemyAtc")
    await super.doEnemyAtc(atcQEnumPrefab,worldPosition)
  }
}
