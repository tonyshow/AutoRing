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
      this.callback();
    }
    g_global.eveLister.emit("refreshEditor",this.data);
  }

  setData(data){
    this.data = data;
  }
}
