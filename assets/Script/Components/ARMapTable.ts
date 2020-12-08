import _ from "underscore";
import ResUtil from "../../Framework/Manager/ResManager/ResUtil";
import ARMain from "./ARMain";

const { ccclass, property } = cc._decorator;
@ccclass
/**
 * 表格数据
 */
export default class ARMapTable extends ARMain {
  async createLevel(gate) {
    await super.createLevel(gate);
    let idx = 0;
    for (let info of gate.list) {
      let list = this.getPosList(info);
      let per = null;
      if (!!info.probabilitys) {
        per = info.probabilitys[1];
      }
      for (let pos of list) {
        let PrefabName = info.PrefabNameList;
        if (!!info.probabilitys) {
          let randNum = _.random(0, 1000);
          if (randNum <= per) {
            PrefabName = info.probabilitys[0];
          }
        }
        let node = await ResUtil.getNodeByEnumPrefab(PrefabName, this.node);
        node.setPosition(cc.winSize.width, cc.winSize.height);
        ++idx;
        node.name = info.id + "_" + idx;
        node.runAction(
          cc.sequence([
            cc.delayTime(idx * 0.005),
            cc.moveTo(0.3, pos),
            cc.callFunc(() => {
              this.addAnimFinsh();
            }),
          ])
        );
      }
    }
  }
}
