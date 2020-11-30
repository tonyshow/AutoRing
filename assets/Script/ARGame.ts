import Scene from "../Framework/Interface/Scene/Scene";
import ResUtil from "../Framework/Manager/ResManager/ResUtil";
import ARMain from "./Components/ARMain";
import g_global from "./GameGlobal";

const { ccclass, property } = cc._decorator;
@ccclass
export default class ARGame extends Scene {
  @property({ tooltip: "关卡背景", type: cc.Node })
  titleNode: cc.Node = null;

  @property({ tooltip: "关卡标题", type: cc.Label })
  titleLb: cc.Label = null;

  currLevel = 0;
  iniTitleY = 0;
  iniTitleX = 0;
  timeout = null;
  async onLoad() {
    console.log("ARGame.onLoad");
    this.iniTitleY = this.titleNode.y;
    this.iniTitleX = this.titleNode.x;
    await super.onLoad();
  }
  start() {
    console.log("ARGame.start");
    this.eveList.push(["armaprm", this.onNextLevel.bind(this)]);
    super.start();
    cc.director.getCollisionManager().enabled = true; //开启碰撞检测，默认为关闭
    this.loadMap();
  }
  onNextLevel() {
    this.doSwitchLevelTitle();
    this.timeout = setTimeout(() => {
      this.loadMap();
    }, 2000);
  }
  onDestroy() {
    super.onDestroy();
    if (!!this.timeout) {
      cc.warn("清除超时");
      clearTimeout(this.timeout);
    }
  }
  doSwitchLevelTitle() {
    this.titleNode.runAction(
      cc.sequence(
        cc.spawn(
          cc.fadeOut(0.4),
          cc
            .moveTo(
              0.4,
              -0.5 * cc.winSize.width - this.titleNode.width,
              this.iniTitleY
            )
            .easing(cc.easeBackIn())
        ),
        cc.callFunc(() => {
          this.titleNode.setPosition(
            0.5 * cc.winSize.width + this.titleNode.width,
            this.iniTitleY
          );
          this.titleLb.string = `第 ${this.currLevel + 1} 关`;
        }),
        cc.delayTime(1),
        cc.spawn(
          cc.fadeIn(0.5),
          cc.moveTo(0.5, this.iniTitleX, this.iniTitleY).easing(cc.easeBackOut())
        )
      )
    );
  }
  //加载关卡地图
  async loadMap() {
    //清楚所有球
    let gate = g_global.leveManager.getGateByLevelId(++this.currLevel);
    this.titleLb.string = `第 ${this.currLevel} 关`;
    if (null == gate) {
      return g_global.msgSys.showPrompt("恭喜通全关!!!");
    }
    const ctr: ARMain = await ResUtil.getCompByEnumPrefab(
      gate.mapPrefabName,
      this.node,
      "ARMain"
    );
    ctr.createLevel(gate);
  }
}
