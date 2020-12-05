/**
 * 界面数据管理
 */

export default class ARGameUIDataManager {
  //发射器的世界坐标位置
  emitWorldPosition: cc.Vec3 = cc.Vec3.ZERO;
  isEnemyCanEmit:boolean = false;//敌人是否可以发射了

  topHeadGoldWordPosition = cc.Vec2.ZERO;//顶部金币世界位置
  refreshEmitWorldPosition(emitWorldPosition){
    this.emitWorldPosition = emitWorldPosition
  }
  refreshIsEnemyCanEmit(isEnemyCanEmit){
    this.isEnemyCanEmit = isEnemyCanEmit
  }
  getEmitWorldPosition(){
    return this.emitWorldPosition
  }
  refreshTopHeadGoldWordPosition(pos){
    this.topHeadGoldWordPosition = pos;
  }
  getTopHeadGoldWordPosition(){
    return this.topHeadGoldWordPosition;
  }
}
