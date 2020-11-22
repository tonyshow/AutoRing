import _ from "underscore";
import EnumPrefab from "../Framework/Auto/EnumPrefab";
import Scene from "../Framework/Interface/Scene/Scene";
import ResUtil from "../Framework/Manager/ResManager/ResUtil";
import AREditorCell from "./Components/AREditorCell";
import ARSelectBg from "./Components/ARSelectBg";
import g_global from "./GameGlobal";

const { ccclass, property } = cc._decorator;
@ccclass
export default class AREditorMain extends Scene {
  @property({ tooltip: "编辑格子", type: cc.Enum(EnumPrefab) })
  editorCellPrefab = EnumPrefab.NONE;

  @property({ tooltip: "编辑格子" })
  cellCnt = 200;

  @property({ tooltip: "球预底板", type: cc.Node })
  qBgNode: cc.Node = null;

  @property({ tooltip: "球预设", type: [cc.Enum(EnumPrefab)] })
  prefabList = [EnumPrefab.NONE];

  @property({ tooltip: "操控台", type: cc.Node })
  menuNode: cc.Node = null;

  @property({ tooltip: "提示语言", type: cc.Node })
  tipsNode: cc.Node = null;

  spaceCellList = [];
  start() {
    this.eveList.push(["setMenuActive", this.setMenuActive.bind(this)]);
    super.start();
  }
  setMenuActive(isActive) {
    this.menuNode.active = isActive;
    this.tipsNode.active = isActive;
  }
  async onLoad() {
    await super.onLoad();
    cc.director.getCollisionManager().enabled = true; //开启碰撞检测，默认为关闭
    //空格子
    for (let i = 0; i < this.cellCnt; ++i) {
      let ctr: AREditorCell = await ResUtil.getCompByEnumPrefab(
        this.editorCellPrefab,
        this.node
      );
      this.spaceCellList.push(ctr);
      ctr.setTag(i);
    }
    //可用材料
    let idx = 0;
    for (let prefabEnum of this.prefabList) {
      let ctr: ARSelectBg = await ResUtil.getCompByEnumPrefab(
        EnumPrefab.ARSelectBg,
        this.qBgNode
      );
      ctr.addQ(prefabEnum);
      ctr.setSelect(0 == idx);
      ++idx;
    }
  }
  //清除所有
  onCleanAll() {
    g_global.eveLister.emit("onCleanAllEditorQ");
  }

  //试玩
  onTryPlay() {
    g_global.msgManager.show(EnumPrefab.MsgARTryPlay,this.readEditor());
  }

  //保持编辑
  onSaveEditor() {
    this.readEditor();
  }
  readEditor() {
    let editorBallInfoList = [];
    for (let cell of this.spaceCellList) {
      let addBall = (cell as AREditorCell).getEditorData();
      if (!!addBall) {
        editorBallInfoList.push(addBall);
      }
    }
    return editorBallInfoList;
  }
}
