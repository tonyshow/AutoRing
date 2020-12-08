/**
 *圆形
 */
import _ from "underscore";
import ResUtil from "../../Framework/Manager/ResManager/ResUtil";
import Utils from "../../Framework/Utils/Utils";
import EnumARMapAction from "../EnumARMapAction";
import ARMain from "./ARMain";
import ARMapTable from "./ARMapTable";

const { ccclass, property } = cc._decorator;
/**
 * 主球
 */
@ccclass
export default class ARMapCircular extends ARMapTable {
  async createLevel(gate) {
    gate.map = { action: EnumARMapAction.ROTATE };
    await super.createLevel(gate);
  }
  getPosList(data?: { r?: number; centerPostion?: cc.Vec2; cnt?: number }) {
    return Utils.getCircularPositionList(data);
  }
  /**
   * 计算总数
   */
  protected calculationQTotal() {
    super.calculationQTotal();
    let cnt = 0;
    for (let info of this.gate.list) {
      cnt += info.cnt;
    }
    this.totalQCnt = cnt;
    return cnt;
  }
  async doEnemyAtc(atcQEnumPrefab, worldPosition) {
    await super.doEnemyAtc(atcQEnumPrefab, worldPosition);
  }
}
