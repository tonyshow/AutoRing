import MsgFullScreen from "../Framework/Interface/Msg/MsgFullScreen";
import ResUtil from "../Framework/Manager/ResManager/ResUtil";
import g_global from "./GameGlobal";

const { ccclass, property } = cc._decorator;
@ccclass
export default class MsgARTryPlay extends MsgFullScreen {
  @property({ tooltip: "may", type: cc.Node })
  mapNode: cc.Node = null;
  async onLoad() {
    g_global.eveLister.emit("useCollider",false);
    this.createBalls();
  }

  onNextLevel(){
    g_global.msgSys.showPrompt("成功过关!!");
  }
  async createBalls(){
    await super.onLoad();
    let list = this.getData();
    if (!!list) {
      for (let ballInfo of list) {
        let ballNode = await ResUtil.getNodeByEnumPrefab(
          ballInfo.enumPrefab,
          this.mapNode
        );
        let pos = this.mapNode.convertToNodeSpaceAR(ballInfo.position);
        ballNode.setPosition(pos);
      }
      g_global.gameUIDataManager.refreshIsEnemyCanEmit(true)
    }
  }
  onResetPlay(){
    this.mapNode.removeAllChildren(true)
    this.createBalls();
  }
  onClose(){
    super.onClose()
    g_global.eveLister.emit("useCollider",true);
  }
  async start() {
    this.eveList.push(["armaprm", this.onNextLevel.bind(this)]);
    super.start();
  }
}
