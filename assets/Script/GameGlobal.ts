import { EnumOpenSceneMethod } from "../Framework/Manager/EnumOpenSceneMethod";

import GlobalManager from "./../Framework/Manager/GlobalManager";
import DataLevelManager from "./Data/DataLevelManager";
import EditorManager from "./Data/EditorManager";
export class GameGlobal extends GlobalManager {
   leveManager:DataLevelManager = null;
   editorManager:EditorManager=null
  constructor() {
    super({

    });
    this.interFaceManager.setNetWaitUIPrefabName("FrameworkRotateIcon");
    this.openSceneMethod = EnumOpenSceneMethod.FIRSTNET;
    this.leveManager = new DataLevelManager();
    this.editorManager = new EditorManager();
  }
}
var g_global = new GameGlobal();
export default g_global;
