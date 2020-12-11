/**死亡球 */
import EnumQTag from "../EnumQTag";
import g_global from "../GameGlobal";
import ARQ from "./ARQ";

const { ccclass, property } = cc._decorator;
@ccclass
export default class ARQDeath extends ARQ {
  onCollisionEnter(otherNode: any, selfNode: any) {
    let isCollision= super.onCollisionEnter(otherNode,selfNode);
    if(!!isCollision){
      g_global.eveLister.emit("collisionARQDeath");
    }
    return isCollision;
  }
}
