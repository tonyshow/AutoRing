import _ from "underscore";
import CompRotateTo from "../../Framework/Components/CompRotateTo";

const { ccclass, property } = cc._decorator;
@ccclass
export default class ARRotateTo extends CompRotateTo {
  @property({ displayName: "随机时间最小值", override: true })
  duration: number = 1;

  @property({ displayName: "随机时间最大值", override: true })
  durationMax: number = 10;
  /**
   * 运行动作
   */
  protected getAction() {
    let duration = _.random(this.duration, this.durationMax);
    let act = cc
      .rotateBy(duration, this.clockwise ? -360 : 360)
      .repeatForever();
    return act;
  }
}
