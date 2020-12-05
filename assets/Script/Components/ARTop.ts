import Interface from "../../Framework/Interface/Interface";
import g_global from "../GameGlobal";

const {ccclass, property} = cc._decorator;
@ccclass
export default class ARTop extends Interface {
  @property({ tooltip: "头像icon", type: cc.Node })
  headNode: cc.Node = null;

  @property({ tooltip: "头像icon", type: cc.Sprite })
  headSp: cc.Sprite = null;


  @property({ tooltip: "金币节点", type: cc.Node })
  goldNode: cc.Node = null;

  @property({ tooltip: "金币数", type: cc.Label })
  lbGold: cc.Label = null;

  async onLoad(){
    this.lbGold.string =  g_global.player.getMoney().toString();
    //加载头像
    let sp = await  g_global.player.getAvatarUrl();
    if(!!sp){
      this.headSp.spriteFrame =sp;
    }
    let goldWorldPostion = this.goldNode.parent.convertToWorldSpaceAR( this.goldNode.position)
     g_global.gameUIDataManager.refreshTopHeadGoldWordPosition(goldWorldPostion);
  }
  start(){
    this.eveList.push(["ARMoneyChange",this.onMoneyChange.bind(this)])
    super.start();
  }
  /**
   *
   * @param changeValue 加值，或者减值
   */
  onMoneyChange(changeValue){
    let money = g_global.player.consumeMoeny(changeValue);
    this.lbGold.string=money.toString();
  }
}
