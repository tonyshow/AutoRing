import EnumPrompt from "../Framework/Enum/EnumPrompt";
import MsgBox from "../Framework/Interface/Msg/MsgBox";
import g_global from "./GameGlobal";

const { ccclass, property } = cc._decorator;
@ccclass
export default class MsgARSaveEditor extends MsgBox {
  //
  @property({ tooltip: "强制保存按钮", type: cc.Node })
  saveForcepNode: cc.Node = null;

  @property({ tooltip: "强制保存按钮", type: cc.EditBox })
  editBox: cc.EditBox = null;

  removeKey = null;
  onSaveClick() {
    let name = this.editBox.string;
    if (!name) {
      return g_global.msgSys.showPrompt("取个响亮的名字", EnumPrompt.WARN);
    }
    this.doRemove();
    let isHave = g_global.editorManager.isHaveSaveEditor(name);
    if (!isHave) {
      g_global.editorManager.addSaveEditor(name, this.data);
      g_global.msgSys.showPrompt("保存成功");
      this.onClose();
    } else {
      g_global.msgSys.showPrompt(
        "名字已存在,请修改名字或直接覆盖",
        EnumPrompt.WARN
      );
      this.saveForcepNode.active = true;
    }
  }
  /**
   * 强制保存
   */
  onSaveForceClick() {
    this.onClose();
    let name = this.editBox.string;
    this.doRemove();
    g_global.editorManager.addSaveEditor(name, this.data);
    g_global.msgSys.showPrompt("覆盖成功", EnumPrompt.WARN);
  }

  setRemove(removeKey) {
    this.removeKey = removeKey;
  }
  doRemove() {
    if (!!this.removeKey) {
      g_global.editorManager.remove(this.removeKey);
    }
  }
}
