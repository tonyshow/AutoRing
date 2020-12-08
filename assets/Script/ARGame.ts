import EnumPrefab from "../Framework/Auto/EnumPrefab";
import Scene from "../Framework/Interface/Scene/Scene";
import ResUtil from "../Framework/Manager/ResManager/ResUtil";
import ARMain from "./Components/ARMain";
import g_global from "./GameGlobal";
import MsgARLevelResult from "./Msg/MsgARLevelResult";

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
    await super.onLoad();
  }
  start() {
    this.titleNode.getComponent(cc.Widget).updateAlignment();
    this.iniTitleY = this.titleNode.y;
    this.iniTitleX = this.titleNode.x;
    console.log("ARGame.start");
    this.eveList.push(["onNextLevel", this.onNextLevel.bind(this)]);
    super.start();
    g_global.openCollision(true);
    this.loadMap();
  }
  async onNextLevel() {
    let MsgARLevelResultNode: cc.Node = await g_global.msgManager.show(
      EnumPrefab.MsgARLevelResult
    );
    let msgARLevelResult = MsgARLevelResultNode.getComponent(MsgARLevelResult);
    msgARLevelResult.register(() => {
      this.doSwitchLevelTitle(()=>{
        this.loadMap();
      });
    });
  }
  onDestroy() {
    super.onDestroy();
    if (!!this.timeout) {
      cc.warn("清除超时");
      clearTimeout(this.timeout);
    }
  }
  doSwitchLevelTitle(cb) {
    cc.error(this.iniTitleX);
    this.titleNode.runAction(
      cc.sequence(
        cc.spawn(
          cc.fadeOut(0.1),
          cc
            .moveTo(
              0.1,
              -0.5 * cc.winSize.width - this.titleNode.width,
              this.iniTitleY
            )
            .easing(cc.easeBackIn())
        ),
        cc.callFunc(() => {
          cb();
          this.titleNode.setPosition(
            0.5 * cc.winSize.width + this.titleNode.width,
            this.iniTitleY
          );
          this.titleLb.string = `第 ${this.currLevel + 1} 关`;
        }),
        cc.delayTime(0.4),
        cc.spawn(
          cc.fadeIn(0.3),
          cc
            .moveTo(0.3, this.iniTitleX, this.iniTitleY)
            .easing(cc.easeBackOut())
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
