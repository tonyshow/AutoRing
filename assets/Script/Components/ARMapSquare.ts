/**
 *正方形
 */
import _ from "underscore";
import EnumARMapAction from "../EnumARMapAction";
import ARMapTable from "./ARMapTable";

const { ccclass, property } = cc._decorator;
@ccclass
export default class ARMapSquare extends ARMapTable {
  async createLevel(gate) {
    gate.map = { action: EnumARMapAction.ROTATE };
    await super.createLevel(gate);
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

  async doEnemyAtc(atcQEnumPrefab, worldPosition) {
    await super.doEnemyAtc(atcQEnumPrefab, worldPosition);
  }
}
