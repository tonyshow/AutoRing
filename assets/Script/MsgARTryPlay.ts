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
        console.log("add");
        ballNode.setPosition(pos);
      }
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
    super.start();
  }
}
