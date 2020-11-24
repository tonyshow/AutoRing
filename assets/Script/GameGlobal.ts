import { EnumOpenSceneMethod } from "../Framework/Manager/EnumOpenSceneMethod";

import GlobalManager from "./../Framework/Manager/GlobalManager";
import DataLevelManager from "./Data/DataLevelManager";
import EditorManager from "./Data/EditorManager";
export class GameGlobal extends GlobalManager {
  leveManager: DataLevelManager = null;
  editorManager: EditorManager = null;
  editorList = {};//自己编辑的数据列表
  constructor() {
    super({});
    this.interFaceManager.setNetWaitUIPrefabName("FrameworkRotateIcon");
    this.openSceneMethod = EnumOpenSceneMethod.FIRSTNET;
    this.leveManager = new DataLevelManager();
    this.editorManager = new EditorManager();
    this.editorList = {};
  }
  //添加保存自定义编辑
  addSaveEditor(name,list) {
    this.editorList[name]=list;
    g_global.platform.localStorageSetItem(
      "armyeditorlist",
      JSON.stringify(this.editorList)
    );
  }
  /**
   * 是否已经存在的名字
   * @param name 自己编辑的关卡名字
   */
  isHaveSaveEditor(name){
    return !!this.editorList[name]
  }

  init() {
    if (!super.init()) {
      var editorList = g_global.platform.localStorageGetItem("armyeditorlist");
      if(!!editorList){
        this.editorList = JSON.parse(editorList);
      }
      return false;
    }
    return this.isInit;
  }

}
var g_global = new GameGlobal();
export default g_global;
