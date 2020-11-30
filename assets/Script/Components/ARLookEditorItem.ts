import EnumPrefab from "../../Framework/Auto/EnumPrefab";
import EnumPrompt from "../../Framework/Interface/EnumPrompt";
import Interface from "../../Framework/Interface/Interface";
import g_global from "../GameGlobal";

const { ccclass, property } = cc._decorator;
@ccclass
export default class ARLookEditorItem extends Interface {
  data=null;
  callback: Function = null;

  registerCallBack(callback) {
    this.callback = callback;
  }

  onClick() {
    if(!this.data){
      g_global.msgSys.showPrompt("去创建关卡吧",EnumPrompt.ERROR);
      return;
    }
    if (!!this.callback) {
      this.callback(this.data);
      g_global.msgManager.show(EnumPrefab.MsgARTryPlay,this.data);
    }
    g_global.eveLister.emit("refreshEditor",this.data);
  }
  //删除
  onRmClick(){
    this.node.destroy();
  }
  //去试玩
  onTryPlayClick(){
    if (!!this.callback) {
      this.callback(this.data);
      g_global.msgManager.show(EnumPrefab.MsgARTryPlay,this.data);
    }
  }
  //去修改关卡命名
  onReName(){
    g_global.msgSys.showPrompt("还在开发哦",EnumPrompt.NONE);
  }
  //去修改关卡内容
  onReEditor(){
    g_global.msgSys.showPrompt("稍等",EnumPrompt.NONE);
  }
  setData(data){
    this.data = data;
  }
}
