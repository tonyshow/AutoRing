import _ from "underscore";
import EnumPrefab from "../Framework/Auto/EnumPrefab";
import EnumScene from "../Framework/Auto/EnumScene";
import EnumPrompt from "../Framework/Enum/EnumPrompt";
import Scene from "../Framework/Interface/Scene/Scene";
import ResUtil from "../Framework/Manager/ResManager/ResUtil";
import Utils from "../Framework/Utils/Utils";
import AREditorCell from "./Components/AREditorCell";
import ARSelectBg from "./Components/ARSelectBg";
import EnumARMapAction from "./EnumARMapAction";
import EnumARMapShape from "./EnumARMapShape";
import g_global from "./GameGlobal";
const { ccclass, property } = cc._decorator;
@ccclass
export default class AREditorMain extends Scene {
  @property({ tooltip: "编辑格子", type: cc.Enum(EnumPrefab) })
  editorCellPrefab = EnumPrefab.NONE;
  @property({ tooltip: "编辑格子" })
  cellCnt = 100;
  @property({ tooltip: "球预底板", type: cc.Node })
  qBgNode: cc.Node = null;

  @property({ tooltip: "球预设", type: [cc.Enum(EnumPrefab)] })
  prefabList = [EnumPrefab.NONE];

  @property({ tooltip: "操控台", type: cc.Node })
  menuNode: cc.Node = null;

  @property({ tooltip: "背景动作按钮", type: cc.Node })
  bgActonNode: cc.Node = null;

  @property({ tooltip: "背景形状按钮", type: cc.Node })
  bgShapeNode: cc.Node = null;

  @property({ tooltip: "我的制作列表", type: cc.Node })
  myEditorListNode: cc.Node = null;

  @property({ tooltip: "回到游戏", type: cc.Node })
  backGameNode: cc.Node = null;

  @property({ tooltip: "动作类型旋转", type: cc.Node })
  atcBtnRotate: cc.Node = null;
  @property({ tooltip: "动作类型无", type: cc.Node })
  atcBtnNone: cc.Node = null;
  @property({ tooltip: "动作类型圆", type: cc.Node })
  shapeNodeCircular: cc.Node = null;
  @property({ tooltip: "动作类型矩形", type: cc.Node })
  shapeNodeSquare: cc.Node = null;

  spaceCellList = [];

  @property({ tooltip: "开始制作或者修改属性", type: cc.Label })
  lbStartOrEditor: cc.Label = null;

  isStartOrEditor: boolean = false; //开始制作或者重新编辑属性
  currEditorData = {
    //背景
    map: {
      action: EnumARMapAction.ROTATE, //动作
      shape: EnumARMapShape.SQUARE, //形状
    },
    list: [], //球数据
  }; //当前编辑的map数据

  start() {
    this.eveList.push(["setMenuActive", this.setMenuActive.bind(this)]);
    this.eveList.push(["refreshEditor", this.onRefreshEditor.bind(this)]);
    super.start();
    g_global.eveLister.emit("useCollider", false);
    this.createGate();
  }
  onRefreshEditor(data){
    this.refreshEditor(data);
  }
  //刷新编辑内容
  async refreshEditor(data) {
    this.node.removeAllChildren(true);
    this.spaceCellList=[];
    this.currEditorData = data;
    await this.createGate();
    for (let info of data.list) {
        this.spaceCellList[info.tag].addBall(info.enumPrefab);
    }
  }
  async createGate() {
    this.spaceCellList = [];
    if (this.currEditorData.map.shape == EnumARMapShape.CIRCULAR) {
      await this.createCircular();
    } else if (this.currEditorData.map.shape == EnumARMapShape.SQUARE) {
      await this.createMatrix();
    }
    this.setActionType(this.currEditorData.map.action);
    this.setShapeType(this.currEditorData.map.shape);
  }
  setMenuActive(isActive) {
    this.menuNode.active = isActive;
  }
  async onLoad() {
    await super.onLoad();
    g_global.openCollision(false);
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
  /**
   * 创建矩阵
   */
  async createMatrix() {
    let leftFirst = false;
    let rowNum = 0; //单排数量
    let column = 0; //单列数量
    let area = cc.winSize.width * cc.winSize.height;
    let itemNode = await ResUtil.getNodeByEnumPrefab(this.editorCellPrefab);
    this.cellCnt = Math.floor(area / (itemNode.width * itemNode.height));
    //背景形状
    for (let i = 0; i < this.cellCnt; ++i) {
      let ctr: AREditorCell = await ResUtil.getCompByEnumPrefab(
        this.editorCellPrefab,
        this.node
      );
      if (!leftFirst) {
        leftFirst = true;
        rowNum = Math.ceil((cc.winSize.width * 0.5) / ctr.node.width);
        column = Math.ceil((cc.winSize.height * 0.5) / ctr.node.height);
        rowNum *= 2;
        rowNum += 1;
        column *= 2;
        column += 1;
      }
      let idxX = i % rowNum;
      let idxY = Math.ceil(i / rowNum);
      let x = -rowNum * 0.5 * ctr.node.width + idxX * ctr.node.width;
      let y = column * 0.5 * ctr.node.height - idxY * ctr.node.height;
      ctr.node.x = x;
      ctr.node.y = y;
      this.spaceCellList.push(ctr);
      ctr.setTag(i);
    }
  }
  /**
   * 创建圆
   */
  async createCircular() {
    let idx = 0;
    let layout = this.node.getComponent(cc.Layout);
    if (!!layout) {
      layout.enabled = false;
      layout.destroy();
    }

    for (let i = 0; i < 15; ++i) {
      let list = Utils.getCircularPositionList({
        r: 50 * i,
        cnt: i == 0 ? 1 : i * 6,
        centerPostion: cc.Vec2.ZERO,
      });
      for (let position of list) {
        //超出屏幕的跳过
        let xout =
          position.x > cc.winSize.width * 0.5 + 100 ||
          position.x < -cc.winSize.width * 0.5 - 100;
        let yout =
          position.y > cc.winSize.height * 0.5 + 100 ||
          position.y < -cc.winSize.height * 0.5 - 100 ||
          position.y < -cc.winSize.height * 0.3;
        if (xout || yout) {
          continue;
        }
        let ctr: AREditorCell = await ResUtil.getCompByEnumPrefab(
          this.editorCellPrefab,
          this.node
        );
        ctr.node.setPosition(position);
        this.spaceCellList.push(ctr);
        ctr.setTag(idx);
        ++idx;
      }
    }
  }
  //试玩
  onTryPlay() {
    let list = this.getEditorData();
    if (!list) {
      return;
    }
    g_global.editorManager.setCurrMapData(list);
    g_global.scene.goScene(EnumScene.ARTryPlay);
  }

  //保存编辑
  onSaveEditor() {
    let list = this.getEditorData();
    if (!list) {
      return;
    }
    g_global.msgManager.show(EnumPrefab.MsgARSaveEditor, this.currEditorData);
  }
  /**
   * 我的编辑列表
   */
  onMyEditorList() {
    g_global.msgManager.show(EnumPrefab.MsgARMyEditorList);
  }
  //导出编辑
  onExportEditor() {
    let list = this.getEditorData();
    if (!list) {
      return;
    }
  }
  getEditorData() {
    let list = this.readEditor();
    if (list.length <= 0) {
      g_global.msgSys.showPrompt({
        txt: "没有制作数据,赶紧编辑吧",
        type: EnumPrompt.ERROR,
      });
      return null;
    }
    this.currEditorData.list = list;
    return this.currEditorData;
  }
  private readEditor() {
    let editorBallInfoList = [];
    for (let cell of this.spaceCellList) {
      let addBall = (cell as AREditorCell).getEditorData();
      if (!!addBall) {
        editorBallInfoList.push(addBall);
      }
    }
    return editorBallInfoList;
  }
  setShapeType(shapeType) {
    let color = cc.Color.BLACK;
    this.shapeNodeCircular.color = color.fromHEX("#FFFFFF");
    this.shapeNodeSquare.color = color.fromHEX("#FFFFFF");
    this.shapeNodeCircular.opacity = 100;
    this.shapeNodeSquare.opacity = 100;
    let choiceColor = color.fromHEX("#FFE70E");
    if (shapeType === EnumARMapShape.CIRCULAR) {
      this.shapeNodeCircular.color = choiceColor;
      this.shapeNodeCircular.opacity = 255;
    } else if (shapeType === EnumARMapShape.SQUARE) {
      this.shapeNodeSquare.color = choiceColor;
      this.shapeNodeSquare.opacity = 255;
    }
    this.currEditorData.map.shape = shapeType;
  }
  async onSwitchMapShape(eve, data) {
    let type = Number(data);
    this.setShapeType(type);
    this.node.removeAllChildren(true);
    if (type === EnumARMapShape.SQUARE) {
      g_global.msgSys.showPrompt("设置成功,形状为矩阵");
      await this.createMatrix();
    } else if (type === EnumARMapShape.CIRCULAR) {
      g_global.msgSys.showPrompt("设置成功,形状为圆形");
      await this.createCircular();
    }
  }
  //--------------------------------------------------
  setActionType(actionType) {
    let color = cc.Color.BLACK;
    this.atcBtnRotate.color = color.fromHEX("#FFFFFF");
    this.atcBtnNone.color = color.fromHEX("#FFFFFF");
    this.atcBtnNone.opacity = 100;
    this.atcBtnRotate.opacity = 100;
    let choiceColor = color.fromHEX("#FFE70E");
    if (actionType === EnumARMapAction.ROTATE) {
      this.atcBtnRotate.color = choiceColor;
      this.atcBtnRotate.opacity = 255;
    } else if (actionType === EnumARMapAction.NONE) {
      this.atcBtnNone.color = choiceColor;
      this.atcBtnNone.opacity = 255;
    }
    this.currEditorData.map.action = actionType;
  }
  onSwitchMapAction(eve, data) {
    let type = Number(data);
    this.setActionType(type);
    //旋转
    if (type === EnumARMapAction.ROTATE) {
      g_global.msgSys.showPrompt("设置成功,试玩可以看到旋转效果哦");
      return;
    } else if (type === EnumARMapAction.NONE) {
    }
    g_global.msgSys.showPrompt("设置成功,游戏时背景不动");
  }
  //开始制作和重新编辑属性
  onStartWorlOrResetEditor() {
    this.isStartOrEditor = !this.isStartOrEditor ? true : false;

    this.bgActonNode.active = !this.isStartOrEditor;
    this.bgShapeNode.active = !this.isStartOrEditor;

    this.myEditorListNode.active = !this.isStartOrEditor;
    this.backGameNode.active = !this.isStartOrEditor;

    this.lbStartOrEditor.string = !this.isStartOrEditor
      ? "开始制作"
      : "修改属性";

      g_global.openCollision(this.isStartOrEditor);
    g_global.eveLister.emit("useCollider", this.isStartOrEditor);
  }
}
