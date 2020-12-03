import { EnumOpenSceneMethod } from "../Framework/Manager/EnumOpenSceneMethod";

import GlobalManager from "./../Framework/Manager/GlobalManager";
import ARGameUIDataManager from "./Data/ARGameUIDataManager";
import DataLevelManager from "./Data/DataLevelManager";
import AREditorManager from "./Data/AREditorManager";
export class GameGlobal extends GlobalManager {
  leveManager: DataLevelManager = null;
  editorManager: AREditorManager = null;
  gameUIDataManager:ARGameUIDataManager=null;
  constructor() {
    super({});
    this.interFaceManager.setNetWaitUIPrefabName("FrameworkRotateIcon");
    this.openSceneMethod = EnumOpenSceneMethod.FIRSTNET;
    this.leveManager = new DataLevelManager();
    this.editorManager = new AREditorManager();
    this.gameUIDataManager = new ARGameUIDataManager();
  }

  init() {
    if (!super.init()) {
      this.editorManager.init();
      return false;
    }
    return this.isInit;
  }

}
var g_global = new GameGlobal();
export default g_global;
