import EnumPrefab from "../../Framework/Auto/EnumPrefab";
export default class DataLevelManager {
  private gateList = [
    {},
{levelId:1,levelTableName:"level1",mapPrefabName:EnumPrefab.ARMap1,list:[],},{levelId:2,levelTableName:"level2",mapPrefabName:EnumPrefab.ARMap2,list:[],},{levelId:3,levelTableName:"level1",mapPrefabName:EnumPrefab.ARMap1,list:[],},{levelId:4,levelTableName:"level2",mapPrefabName:EnumPrefab.ARMap2,list:[],},{levelId:5,levelTableName:"level1",mapPrefabName:EnumPrefab.ARMap1,list:[],},{levelId:6,levelTableName:"level2",mapPrefabName:EnumPrefab.ARMap2,list:[],},{levelId:7,levelTableName:"level1",mapPrefabName:EnumPrefab.ARMap1,list:[],},{levelId:8,levelTableName:"level2",mapPrefabName:EnumPrefab.ARMap2,list:[],},{levelId:9,levelTableName:"level1",mapPrefabName:EnumPrefab.ARMap1,list:[],},{levelId:10,levelTableName:"level2",mapPrefabName:EnumPrefab.ARMap2,list:[],},{levelId:11,levelTableName:"level1",mapPrefabName:EnumPrefab.ARMap1,list:[],},{levelId:12,levelTableName:"level2",mapPrefabName:EnumPrefab.ARMap2,list:[],},{levelId:13,levelTableName:"level1",mapPrefabName:EnumPrefab.ARMap1,list:[],},{levelId:14,levelTableName:"level2",mapPrefabName:EnumPrefab.ARMap2,list:[],},{levelId:15,levelTableName:"level1",mapPrefabName:EnumPrefab.ARMap1,list:[],},{levelId:16,levelTableName:"level1",mapPrefabName:EnumPrefab.ARMap2,list:[],},{levelId:17,levelTableName:"level2",mapPrefabName:EnumPrefab.ARMap1,list:[],},{levelId:18,levelTableName:"level1",mapPrefabName:EnumPrefab.ARMap2,list:[],},
  ];

  private leveList = {level1:[{id:1,PrefabNameList:EnumPrefab.ARQ1,cnt:6,shape:1,r:50,},{id:2,PrefabNameList:EnumPrefab.ARQ2,cnt:12,shape:1,r:100,},{id:3,PrefabNameList:EnumPrefab.ARQ1,cnt:18,shape:1,r:150,},{id:4,PrefabNameList:EnumPrefab.ARQ2,cnt:24,shape:1,r:200,},{id:5,PrefabNameList:EnumPrefab.ARQ1,cnt:30,shape:1,r:250,},{id:6,PrefabNameList:EnumPrefab.ARQ2,cnt:36,shape:1,r:300,},{id:7,PrefabNameList:EnumPrefab.ARQ1,cnt:42,shape:1,r:350,},],level2:[{id:4,PrefabNameList:EnumPrefab.ARQ2,cnt:11,},{id:5,PrefabNameList:EnumPrefab.ARQ1,cnt:13,},],};
  getGateByLevelId(level: number) :{levelId?,levelTableName?,mapPrefabName?,list?}{
    if (null == level) {
      cc.error('请传入有效的关卡levelId');
      return null;
    }
    if(this.gateList.length<level){
      cc.error('请传入有效的关卡levelId');
      return null;
    }
    let gate = this.gateList[level];
    if (!!gate) {
      gate.list=this.getLeveByLevelTabel(gate.levelTableName)
      return gate;
    }
    cc.error('无关卡数据level = ', level);
    return null;
  }
  getGateIdList() {
    return [];
  }

  getLeveByLevelTabel(levelTableName){
    if (null == levelTableName) {
      cc.error('请传入有效的关卡levelTableName');
      return null;
    }
    let levelTableInfo = this.leveList[levelTableName];
    if (!!levelTableInfo) {
      return levelTableInfo;
    }
    cc.error('无关卡数据levelTableName = ', levelTableName);
    return null;
  }
}
    