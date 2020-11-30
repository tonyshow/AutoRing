import Interface from "../../Framework/Interface/Interface";
import ResUtil from "../../Framework/Manager/ResManager/ResUtil";
import g_global from "../GameGlobal";
/**
 * 空格子
 */
const { ccclass, property } = cc._decorator;
@ccclass
export default class AREditorCell extends Interface {
  @property({ tooltip: "球", type: cc.Node })
  bgNode: cc.Node = null;
  tag = 0;
  childCell: cc.Node = null;
  dragNode: cc.Node = null;
  enumPrefab=0;
  isCollider=true;
  collider:cc.BoxCollider=null;
  setTag(tag) {
    this.tag = tag;
  }
  start() {
    this.eveList.push(["onCleanAllEditorQ", this.doCleanAll.bind(this)]);
    this.eveList.push(["useCollider", this.useCollider.bind(this)]);
    super.start();
  }
  async onLoad() {
    await super.onLoad();
    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    //this.collider = this.node.getComponent(cc.BoxCollider);
  }
  public getChildCnt(): number {
    return this.node.childrenCount;
  }

  //添加的球
  public getBallCell(): cc.Node {
    return this.childCell;
  }
  //获取编辑内容
  public getEditorData(): { enumPrefab?: any; postion?: cc.Vec2|cc.Vec3 }|any {
    if(!this.childCell){
      return null;
    }
    return {
      enumPrefab: this.enumPrefab,
      position: this.node.parent.convertToWorldSpaceAR( this.node.position ),
    };
  }
  doCleanAll() {
    if (!!this.childCell && !!this.childCell.destroy) {
      this.childCell.destroy();
      this.childCell = null;
      this.enumPrefab=-1;
    }
    if (!!this.dragNode && !!this.dragNode.destroy) {
      this.dragNode.destroy();
      this.dragNode = null;
    }
  }
  private async onTouchStart(eve) {
    if(!this.isCollider)return;
    let currSelectEnumPrefab = g_global.editorManager.getCurrSelect();
    this.createDrag(currSelectEnumPrefab, eve);
  }

  async addBall(currSelectEnumPrefab) {
    if (-1 == currSelectEnumPrefab) {
      return g_global.msgSys.showPrompt("请选择材料");
    }
    if (!!this.childCell) {
      this.childCell.destroy();
      this.childCell = null;
      this.enumPrefab=-1;
    } else {
      this.enumPrefab=currSelectEnumPrefab;
      this.childCell = await ResUtil.getNodeByEnumPrefab(
        currSelectEnumPrefab,
        this.node
      );
      let collider = this.childCell.getComponent(cc.Collider);
      if (!!collider) {
        collider.enabled = false;
      }
    }
  }
  private onTouchMove(eve) {
    if(!this.isCollider)return;
    if (!!this.dragNode) {
      var locationInNode = eve.target.convertToNodeSpaceAR(eve.getLocation());
      this.dragNode.setPosition(locationInNode);
    }
  }
  private async createDrag(currSelectEnumPrefab, eve) {
    if(!this.isCollider)return;
    if (!!this.dragNode) {
      this.dragNode.destroy();
      this.dragNode = null;
    }
    g_global.eveLister.emit("setMenuActive", false);
    this.dragNode = await ResUtil.getNodeByEnumPrefab(
      currSelectEnumPrefab,
      this.node
    );
    var locationInNode = eve.target.convertToNodeSpaceAR(eve.getLocation());
    this.dragNode.setPosition(locationInNode);
    this.dragNode.setScale(0.8);
    this.dragNode.zIndex = 100;
    let collider = this.dragNode.getComponent(cc.CircleCollider);
    if (!!collider) {
      collider.radius = 1;
      collider.tag=100
    }

    let boxCollider  = this.dragNode.getComponent(cc.BoxCollider);
    if (!!boxCollider) {
      boxCollider.size=new cc.Size(1,1)
    }
  }
  private onTouchEnd() {
    if(!this.isCollider)return;
    //被碰撞体直接攻击
    if (!!this.dragNode) {
      this.dragNode.destroy();
      this.dragNode = null;
      g_global.eveLister.emit("setMenuActive", true);
    }
  }
  private useCollider(isCollider){
    //this.isCollider = isCollider
    //this.collider.enabled = isCollider
  }
  private onCollisionEnter(otherNode: any, selfNode: any) {
    if(!this.isCollider)return;
    //被碰撞体直接攻击
    if (otherNode.tag == selfNode.tag || otherNode.tag != 100) {
      return;
    }
    let currSelectEnumPrefab = g_global.editorManager.getCurrSelect();
    this.addBall(currSelectEnumPrefab);
  }
}
