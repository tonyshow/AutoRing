const {ccclass, property} = cc._decorator;
@ccclass
export default class ARTop extends cc.Component {
  @property({ tooltip: "头像icon", type: cc.Node })
  headNode: cc.Node = null;

  @property({ tooltip: "金币数", type: cc.Label })
  lbGold: cc.Label = null;
}
