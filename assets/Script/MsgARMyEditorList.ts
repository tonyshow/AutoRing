import _ from "underscore";
import EnumPrefab from "../Framework/Auto/EnumPrefab";
import MsgBox from "../Framework/Interface/Msg/MsgBox";
import ResUtil from "../Framework/Manager/ResManager/ResUtil";
import ARLookEditorItem from "./Components/ARLookEditorItem";
import g_global from "./GameGlobal";

const { ccclass, property } = cc._decorator;
@ccclass
export default class MsgARMyEditorList extends MsgBox {
  @property({ tooltip: "item预制体", type:cc.Enum(EnumPrefab) })
  itemPrefab  = EnumPrefab.NONE;

  @property({ tooltip: "编辑标题对象", type: cc.Node })
  contentNode: cc.Node = null;

  async onLoad() {
    await super.onLoad();
    let idx=0;
    _.each(g_global.editorList, (data, key) => {
      this.addItem(key,idx,data);
      ++idx
    });
  }
  async addItem(key,idx,data){
    let node = await  ResUtil.getNodeByEnumPrefab(this.itemPrefab,this.contentNode)
    this.setTxt(node,key,idx,data)
  }

  setTxt(node:cc.Node,txt,idx,data){
    let lb =  node.getChildByName("txt").getComponent(cc.Label);
    let bg =  node.getChildByName("bg");
    bg.color = idx%2==0?cc.Color.GRAY:cc.Color.WHITE
    bg.opacity=50;
    lb.string = (idx+1)+"."+txt;
    node.x =idx%2==0?-cc.winSize.width:cc.winSize.width;//

    node.runAction( cc.moveTo(0.7+idx*0.04,0).easing(cc.easeBackOut()) )

    let ctr = node.getComponent(ARLookEditorItem);
    ctr.setData(data);
    ctr.registerCallBack(this.onClose.bind(this))
  }

  onClose(){
    super.onClose();
  }
}
