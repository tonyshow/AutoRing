import _ from "underscore";
import ComWidget from "../../Framework/Components/ComWidget";
import Interface from "../../Framework/Interface/Interface";
import Utils from "../../Framework/Utils/Utils";
import g_global from "../GameGlobal";

const { ccclass, property } = cc._decorator;
@ccclass
export default class ARTop extends Interface {
  @property({ tooltip: "头像icon", type: cc.Node })
  headNode: cc.Node = null;

  @property({ tooltip: "头像icon", type: cc.Sprite })
  headSp: cc.Sprite = null;

  @property({ tooltip: "金币节点", type: cc.Node })
  goldNode: cc.Node = null;

  @property({ tooltip: "金币节点父", type: cc.Node })
  goldParentNode: cc.Node = null;

  @property({ tooltip: "金币数", type: cc.Label })
  lbGold: cc.Label = null;

  goldWorldPostion = null;

  @property({ tooltip: "飘金币音效", type: cc.AudioClip })
  audio: cc.AudioClip = null;
  async onLoad() {
    this.lbGold.string = g_global.player.getMoney().toString();
    //加载头像
    let sp = await g_global.player.getAvatarUrl();
    if (!!sp) {
      this.headSp.spriteFrame = sp;
    }
    this.goldWorldPostion = this.goldNode.parent.convertToWorldSpaceAR(
      this.goldNode.position
    );
    // g_global.gameUIDataManager.refreshTopHeadGoldWordPosition(this.goldWorldPostion);

    this.goldParentNode = cc.director.getScene();
  }
  start() {
    this.eveList.push(["ARMoneyChange", this.onMoneyChange.bind(this)]);
    super.start();
  }
  /**
   *
   * @param changeValue 加值，或者减值
   * @param isBoomOut 是否使用爆出式出现
   */
  onMoneyChange(changeValue, beginWordPostion, isBoomOut) {
    let animNode = cc.instantiate(this.goldNode);
    let startPos = this.goldParentNode.convertToNodeSpaceAR(beginWordPostion);
    animNode.getComponent(cc.Widget).destroy();
    animNode.getComponent(ComWidget).destroy();
    this.goldParentNode.addChild(animNode);
    let endPostrion = this.goldParentNode.convertToNodeSpaceAR(
      this.goldWorldPostion
    );
    let dis = Utils.get2posDis(startPos, endPostrion);
    let t = Utils.getActionTime(dis, 400);
    animNode.setPosition(startPos);
    /**跳跃方向 */
    let zf = _.random(0, 100) > 50 ? -1 : 1;

    let act = [];
    if(!!isBoomOut){
      let randx = _.random(1,100)>50?-1:1
      let randy = _.random(1,100)>50?-1:1
      act.push(
        cc.jumpBy(0.2, randx * _.random(2, 80), randy * _.random(2, 80), zf * _.random(20, 40), 1).easing(cc.easeCircleActionOut())
      );
      act.push(cc.delayTime(0.3));
    }
    act.push(
      cc.spawn(
        cc.sequence(
          cc.scaleTo(t*0.5, 1.2).easing(cc.easeBackOut()),
          cc.scaleTo(t*0.5, 1)
        ),
        cc
          .jumpTo(t, endPostrion, zf * _.random(50, 150), 1)
          .easing(cc.easeQuinticActionOut()),
        cc.rotateBy(t, -720).easing(cc.easeCircleActionOut())
      )
    );
    act.push(
      cc.callFunc(() => {
        cc.audioEngine.play(this.audio, false, 1);
        animNode.destroy();
        let money = g_global.player.consumeMoeny(changeValue);
        this.lbGold.string = money.toString();
      })
    );
    animNode.runAction(cc.sequence(act));
  }
}
