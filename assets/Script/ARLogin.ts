import EnumScene from "../Framework/Auto/EnumScene";
import Scene from "../Framework/Interface/Scene/Scene";
import g_global from "./GameGlobal";

const { ccclass, property } = cc._decorator;
@ccclass
export default class ARLogin extends Scene {
  @property({ tooltip: "自定义登录按钮", type: cc.Node })
  defaultLoginBtn: cc.Node = null;

  async onLoad() {
    g_global.platform.initShowShareMenu();
    await super.onLoad();
    this.defaultLoginBtn.active = false;
    let info = await g_global.platform.authorize();
    this.defaultLoginBtn.active = !!info;
    if (null == info) {
      info = await g_global.platform.addWxLoginBtn().catch(()=>{
          g_global.msgSys.showPrompt("微信授权失败")
      })
      this.doLoginSuccess(info);
      return;
    }
    this.doLoginSuccess(info);
  }
  doLoginSuccess(info){
    g_global.player.reset(info);
    g_global.scene.goScene( EnumScene.ARGame )
  }
}
