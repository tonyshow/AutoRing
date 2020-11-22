import ResUtil from "../../Framework/Manager/ResManager/ResUtil";
import ARMain from "./ARMain";

const {ccclass, property} = cc._decorator;
@ccclass
export default class ARMain2 extends ARMain {
  async createLevel(gate) {
    for (let info of gate.list) {
      let list = this.getPosList(info);
      let tag = 0;
      for (let pos of list) {
        ++tag;
        let node = await ResUtil.getNodeByEnumPrefab( info.PrefabNameList, this.node );
        node.setPosition(cc.winSize.width, cc.winSize.height);
        node.name = info.id + "_" + tag;
        ++this.addCnt;
        node.runAction(
          cc.sequence(cc.delayTime(this.addCnt * 0.005), cc.moveTo(0.3, pos))
        );
      }
    }
  }

  getPosList(data?: {  cnt?: number }) {
    super.getPosList(data);
    data = data || {};
    data.cnt = data.cnt || 6;
    let itemWidth=50;
    let totalWidth = data.cnt*itemWidth;
    let list = [];
    for (let i = 0; i < data.cnt; ++i) {
      for (let j = 0; j < data.cnt; ++j) {
        let x1 = (data.cnt*0.5-totalWidth*0.5)+i*itemWidth;
        let y1 = (data.cnt*0.5+totalWidth*0.5)-j*itemWidth;
        list.push(new cc.Vec2(x1, y1));
      }
    }
    return list;
  }
}
