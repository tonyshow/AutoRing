import Interface from "../../Framework/Interface/Interface";
import ResUtil from "../../Framework/Manager/ResManager/ResUtil";
import g_global from "../GameGlobal";

const { ccclass, property } = cc._decorator;
@ccclass
export default class ARSelectBg extends Interface {
  @property({ tooltip: "球", type: cc.Node })
  bgNode: cc.Node = null;

  async onLoad() {
    await super.onLoad();
    if(!this.getComponent(cc.Button)){
      this.addComponent(cc.Button)
    }
    this.node.on('click',this.onClick,this);
    this.setSelect(false)
  }
  start() {
    this.eveList.push(["ARSelecBgActive", this.setSelect.bind(this)]);
    super.start()
  }
  qPrefabEnum = null;
  async addQ(qPrefabEnum) {
    this.qPrefabEnum = qPrefabEnum;
    let qNode = await ResUtil.getNodeByEnumPrefab(this.qPrefabEnum, this.node);
    let collider =qNode.getComponent(cc.CircleCollider)
    if(!!collider){
      collider.enabled = false;
    }
  }
  setSelect(isSelect: boolean = false) {
    this.bgNode.active = isSelect;
    if(!!isSelect){
      g_global.editorManager.setCurrSelect(this.qPrefabEnum)
    }
  }
  onClick() {
    g_global.eveLister.emit("ARSelecBgActive", false);
    this.setSelect(true);

  }
}
