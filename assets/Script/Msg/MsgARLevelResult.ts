import MsgBox from "../../Framework/Interface/Msg/MsgBox";

const { ccclass, property } = cc._decorator;
@ccclass
export default class MsgARLevelResult extends MsgBox {
  nextLevelCb: Function = null;
  async onLoad() {
    await super.onLoad();
  }
  async start() {
    await super.start();
  }

  register(nextLevelCb) {
    this.nextLevelCb = nextLevelCb;
  }

  onNextLevelClick() {
    if (!!this.nextLevelCb) {
      this.nextLevelCb();
    }
    this.onClose();
  }
}
