import { EnumOpenSceneMethod } from "../Framework/Manager/EnumOpenSceneMethod";

import GlobalManager from "./../Framework/Manager/GlobalManager";
export class GameGlobal extends GlobalManager {
  constructor() {
    super({

    });
    this.interFaceManager.setNetWaitUIPrefabName("FrameworkRotateIcon");
    this.openSceneMethod = EnumOpenSceneMethod.FIRSTNET;
  }
}
var g_global = new GameGlobal();
export default g_global;
