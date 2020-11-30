/**
 *圆形
 */
import _ from "underscore";
import ResUtil from "../../Framework/Manager/ResManager/ResUtil";
import Utils from "../../Framework/Utils/Utils";
import ARMain from "./ARMain";

const { ccclass, property } = cc._decorator;
/**
 * 主球
 */
@ccclass
export default class ARMapCircular extends ARMain {
  async createLevel(gate) {
    await super.createLevel(gate)
    for (let info of gate.list) {
      let list = this.getPosList(info);
      for (let pos of list) {
        let node = await ResUtil.getNodeByEnumPrefab(
          info.PrefabNameList,
          this.node
        );
        this.addFinsh();
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
  getPosList(data?: { r?: number; centerPostion?: cc.Vec2; cnt?: number }) {
    //data = data || {};
    //data.r = data.r || 100;
    //data.cnt = data.cnt || 6;
    //data.centerPostion = data.centerPostion || new cc.Vec2(0, 0);
    //let per = 360 / data.cnt;
    //let list = [];
    //for (let i = 0; i < data.cnt; ++i) {
    //  let ao = i * per;
    //  let x1 = data.centerPostion.x + data.r * Math.cos((ao * Math.PI) / 180);
    //  let y1 = data.centerPostion.y + data.r * Math.sin((ao * Math.PI) / 180);
    //  list.push(new cc.Vec2(x1, y1));
    //}
    //return list;
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
  async doEnemyAtc(atcQEnumPrefab,worldPosition){
    //cc.error("ARMapCircular.doEnemyAtc")
    await super.doEnemyAtc(atcQEnumPrefab,worldPosition)
  }
}
