import MsgBox from "../../Framework/Interface/Msg/MsgBox";
import g_global from "../GameGlobal";

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

  @property({ displayName: "再试一次按钮节点", type: cc.Node })
  nodeOneMore: cc.Node = null;

  @property({ displayName: "继续游戏节点", type: cc.Node })
  nodeContureGame: cc.Node = null;

  @property({ displayName: "立即复活节点", type: cc.Node })
  nodeResurrection: cc.Node = null;

  @property({ displayName: "失败类的父节点", type: cc.Node })
  nodeFail: cc.Node = null;

  isCanClick: boolean = true;
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
    this.lbStarCnt.string = "获得5颗星";
    this.lbGetGold.string = "获得金币:100";
    this.lbOutFriendCnt.string = "好友通关人数:100";
    this.lbUseTime.string = "用时:10秒";
    this.nodeFail.active = this.data.code === "fail";
    //this.nodeResurrection.active = this.data.code === "fail";
    this.nodeContureGame.active = this.data.code === "success";
  }
  //再试一次
  onOneMoreTry() {
    if (!this.isCanClick) {
      return;
    }
    this.isCanClick = false;
    this.onClose();
    g_global.eveLister.emit("onOneMoreTry");
  }
  /**复活 */
  onResurrection() {
    this.onClose();
  }
  onNextLevelClick() {
    if (!this.isCanClick) {
      return;
    }
    this.isCanClick = false;
    this.onClose();
    g_global.eveLister.emit("onNextLevel");
  }
}
