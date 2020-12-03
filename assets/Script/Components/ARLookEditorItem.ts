import EnumPrefab from "../../Framework/Auto/EnumPrefab";
import EnumScene from "../../Framework/Auto/EnumScene";
import EnumPrompt from "../../Framework/Interface/EnumPrompt";
import Interface from "../../Framework/Interface/Interface";
import g_global from "../GameGlobal";
import MsgARSaveEditor from "../MsgARSaveEditor";

const { ccclass, property } = cc._decorator;
@ccclass
export default class ARLookEditorItem extends Interface {
  @property({  type:cc.Node })
  content: cc.Node = null;
   async onLoad(){
    await super.onLoad();
    this.node.width=cc.winSize.width;
    this.content.width=cc.winSize.width;
  }
  callback: Function = null;
  key =null;
  registerCallBack(callback) {
    this.callback = callback;
  }
  setKey(key){
    this.key=key;
  }
  onClick() {
    if(!this.data){
      g_global.msgSys.showPrompt("去创建关卡吧",EnumPrompt.ERROR);
      return;
    }
    if (!!this.callback) {
      this.callback(this.data);
      g_global.editorManager.setCurrMapData(this.data);
      g_global.scene.goScene(EnumScene.ARTryPlay)
    }
  }
  //删除
  onRmClick(){
    this.node.destroy();
    g_global.editorManager.remove(this.key);
  }
  //去试玩
  onTryPlayClick(){
    if (!!this.callback) {
      this.callback(this.data);
      g_global.editorManager.setCurrMapData(this.data);
      g_global.scene.goScene(EnumScene.ARTryPlay)
    }
  }
  //去修改关卡命名
  async onReName(){
    if (!!this.callback) {
      this.callback(this.data);
    }
    let node:cc.Node = await  g_global.msgManager.show(EnumPrefab.MsgARSaveEditor,  this.data);
    let msgARSaveEditor = node.getComponent(MsgARSaveEditor);
    msgARSaveEditor.setRemove(this.key);
  }
  //去修改关卡内容
  onReEditor(){
    g_global.eveLister.emit("refreshEditor",this.data);
    if (!!this.callback) {
      this.callback(this.data);
    }
  }
}
