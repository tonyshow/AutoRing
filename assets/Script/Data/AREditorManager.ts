import g_global from "../GameGlobal";

export default class AREditorManager {
  editorList = {}; //自己编辑的数据列表
  currSelect = -1;
  currMapData = {
    //背景
    map: {
      action: -1, //动作
      shape: -1, //形状
    },
    list: [], //球数据
  }; //当前编辑的map数据
  getCurrSelect() {
    return this.currSelect;
  }
  //添加保存自定义编辑
  addSaveEditor(name, list) {
    this.editorList[name] = list;
    this.refreshEditorList();
  }
  /**
   * 是否已经存在的名字
   * @param name 自己编辑的关卡名字
   */
  isHaveSaveEditor(name) {
    return !!this.editorList[name];
  }
  setCurrSelect(currSelect) {
    this.currSelect = currSelect;
  }
  getCurrMapData() {
    return this.currMapData;
  }

  setCurrMapData(currMapData) {
    this.currMapData = currMapData;
  }

  //保存编辑
  saveEditor() {}
  //计算编辑
  reckonEditor() {}
  init() {
    var editorList = g_global.platform.localStorageGetItem("armyeditorlist");
    if (!!editorList) {
      this.editorList = JSON.parse(editorList);
    }
  }
  remove(key) {
    if (!!this.editorList && !!this.editorList[key]) {
      delete this.editorList[key];
    }
    this.refreshEditorList();
  }
  refreshEditorList() {
    if (!!this.editorList) {
      g_global.platform.localStorageSetItem(
        "armyeditorlist",
        JSON.stringify(this.editorList)
      );
    }
  }
  getEditorList(){
    return JSON.parse( JSON.stringify(this.editorList) )
  }
}
