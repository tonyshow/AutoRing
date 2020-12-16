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
  arMap :ARMain=null;
  async onLoad() {
    await super.onLoad();
  }
  start() {
    this.titleNode.getComponent(cc.Widget).updateAlignment();
    this.iniTitleY = this.titleNode.y;
    this.iniTitleX = this.titleNode.x;
    console.log("ARGame.start");
    this.eveList.push(["onLevelResult", this.onLevelResult.bind(this)]);
    this.eveList.push(["collisionARQDeath", this.collisionARQDeath.bind(this)]);
    this.eveList.push(["onOneMoreTry", this.onOneMoreTry.bind(this)]);
    this.eveList.push(["onNextLevel", this.onNextLevel.bind(this)]);
    super.start();
    g_global.openCollision(true);
    this.loadMap(++this.currLevel);
  }
  async onLevelResult() {
    await g_global.msgManager.show(EnumPrefab.MsgARLevelResult, {
      code: "success",
    });
  }
  /**下一关 */
  onNextLevel(){
    this.doClearance();
    this.doSwitchLevelTitle(() => {
      this.loadMap(++this.currLevel);
    });
  }
  /**再试一次 */
  onOneMoreTry() {
    this.doClearance();
    this.loadMap(this.currLevel);
  }
  /**
   * 碰撞到死亡球
   */
  collisionARQDeath() {
    g_global.msgManager.show(EnumPrefab.MsgARLevelResult,{code:"fail"});
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
  async loadMap(currLevel) {
    this.doClearance();
    //清楚所有球
    let gate = g_global.leveManager.getGateByLevelId(currLevel);
    this.titleLb.string = `第 ${this.currLevel} 关`;
    if (null == gate) {
      return g_global.msgSys.showPrompt("恭喜通全关!!!");
    }
    this.arMap  = await ResUtil.getCompByEnumPrefab(
      gate.mapPrefabName,
      this.node,
      "ARMain"
    );
    this.arMap.createLevel(gate);
  }

  /**清场*/
  doClearance(){
    if(!!this.arMap && !!this.arMap.node && this.arMap.node.destroy){
      this.arMap.node.destroy();
    }
  }
}
