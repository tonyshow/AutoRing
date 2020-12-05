import { EnumOpenSceneMethod } from "../Framework/Manager/EnumOpenSceneMethod";

import GlobalManager from "./../Framework/Manager/GlobalManager";
import ARGameUIDataManager from "./Data/ARGameUIDataManager";
import DataLevelManager from "./Data/DataLevelManager";
import AREditorManager from "./Data/AREditorManager";
import ARPlayer from "./Data/ARPlayer";
export class GameGlobal extends GlobalManager {
  leveManager: DataLevelManager = null;
  editorManager: AREditorManager = null;
  gameUIDataManager:ARGameUIDataManager=null;
  player : ARPlayer = null;
  constructor() {
    super({});
    this.interFaceManager.setNetWaitUIPrefabName("FrameworkRotateIcon");
    this.openSceneMethod = EnumOpenSceneMethod.FIRSTNET;
    this.leveManager = new DataLevelManager();
    this.editorManager = new AREditorManager();
    this.gameUIDataManager = new ARGameUIDataManager();
    this.player= new ARPlayer();
  }

  init() {
    if (!super.init()) {
      this.editorManager.init();
      this.game.setName("做个游戏,交个朋友");
      return false;
    }
    return this.isInit;
  }

}
var g_global = new GameGlobal();
export default g_global;
