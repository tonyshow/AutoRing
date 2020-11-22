import g_global from "../GameGlobal";
const {ccclass, property} = cc._decorator;
@ccclass
export default class ARMain extends cc.Component {
  interval = null;
  addCnt = 0;
  isRm = false;
  start() {
    this.interval = setInterval(() => {
      if (this.addCnt > 0 && !this.isRm && !!this.node && 0 === this.node.childrenCount) {
        this.isRm = true;
        g_global.eveLister.emit("armaprm");
        clearInterval(this.interval);
      }
    }, 200);
  }
  addFinsh(addCnt: number = 1) {
    this.addCnt += addCnt;
  }
  async createLevel(gate) {

  }
  getPosList(data?: { r?: number; centerPostion?: cc.Vec2; cnt?: number }) {
    let list = [];
    return list;
  }
}
