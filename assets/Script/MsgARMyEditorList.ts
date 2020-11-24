import _ from "underscore";
import MsgBox from "../Framework/Interface/Msg/MsgBox";
import ARLookEditorItem from "./Components/ARLookEditorItem";
import g_global from "./GameGlobal";

const { ccclass, property } = cc._decorator;
@ccclass
export default class MsgARMyEditorList extends MsgBox {
  @property({ tooltip: "编辑标题对象", type: cc.Node })
  itemNode: cc.Node = null;

  @property({ tooltip: "编辑标题对象", type: cc.Node })
  contentNode: cc.Node = null;

  async onLoad() {
    await super.onLoad();
    let idx=0;
    _.each(g_global.editorList, (data, key) => {
      if(idx==0){
        this.setTxt(this.itemNode,key,idx,data)
      }else{
        let node = cc.instantiate(this.itemNode);
        this.setTxt(node,key,idx,data)
        this.contentNode.addChild(node);
      }
      ++idx
    });
  }

  setTxt(node:cc.Node,txt,idx,data){
    let lb =  node.getChildByName("txt").getComponent(cc.Label);
    let bg =  node.getChildByName("bg");
    bg.color = idx%2==0?cc.Color.GRAY:cc.Color.GREEN
    lb.string = txt;
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
