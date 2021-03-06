import EnumScene from "../Framework/Auto/EnumScene";
import Scene from "../Framework/Interface/Scene/Scene";
import ARMainDefault from "./Components/ARMainDefault";
import g_global from "./GameGlobal";

const {ccclass, property} = cc._decorator;
@ccclass
export default class ARTryPlay extends Scene {
  @property({ tooltip: "may", type: cc.Node })
  mapNode: cc.Node = null;

  @property({ tooltip: "may", type: ARMainDefault })
  arMainDefault: ARMainDefault = null;

  async onLoad() {
    g_global.eveLister.emit("useCollider",false);
    this.createBalls();
    g_global.openCollision(true);
  }
  onLevelResult(){
    g_global.msgSys.showPrompt("成功过关!!");
  }
  async createBalls(){
    let list = g_global.editorManager.getCurrMapData();
    this.arMainDefault.setGate(list);
  }
  onResetPlay(){
    this.mapNode.removeAllChildren(true)
    this.createBalls();
  }
  onClose(){
    g_global.eveLister.emit("useCollider",true);
    g_global.scene.goScene(EnumScene.AREditorMain)
  }
  async start() {
    this.eveList.push(["onLevelResult", this.onLevelResult.bind(this)]);
    super.start();
  }
}
