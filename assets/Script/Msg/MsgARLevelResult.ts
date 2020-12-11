import MsgBox from "../../Framework/Interface/Msg/MsgBox";

const { ccclass, property } = cc._decorator;
@ccclass
export default class MsgARLevelResult extends MsgBox {
  @property({ displayName: "标题", type: cc.Label })
  lbTitle: cc.Label = null;

  @property({ displayName: "获得金币数量", type: cc.Label })
  lbGetGold: cc.Label = null;

  @property({ displayName: "使用时长", type: cc.Label })
  lbUseTime: cc.Label = null;

  @property({ displayName: "超越朋友数", type: cc.Label })
  lbOutFriendCnt: cc.Label = null;

  @property({ displayName: "获得星星数量", type: cc.Label })
  lbStarCnt: cc.Label = null;

  nextLevelCb: Function = null;
  async onLoad() {
    await super.onLoad();
    this.refreshUI();
  }

  async start() {
    await super.start();
  }

  /**
   * 修改属性
   */
  refreshUI() {
    this.lbStarCnt.string = "";
    this.lbGetGold.string = "";
    this.lbOutFriendCnt.string = "";
    this.lbUseTime.string = "";
  }
  register(nextLevelCb) {
    this.nextLevelCb = nextLevelCb;
  }

  onNextLevelClick() {
    if (!!this.nextLevelCb) {
      this.nextLevelCb();
    }
    this.onClose();
  }
}
