import EnumPrefab from "../../Framework/Auto/EnumPrefab";
export default class DataLevelManager {
  private gateList = [
    {},
{levelId: 0,levelTableName:"level1",mapPrefabName:EnumPrefab.ARMapCircular},{levelId: 1,levelTableName:"level2",mapPrefabName:EnumPrefab.ARMapSquare},{levelId: 2,levelTableName:"level3",mapPrefabName:EnumPrefab.ARMapSquare},{levelId: 3,levelTableName:"level4",mapPrefabName:EnumPrefab.ARMapCircular},{levelId: 4,levelTableName:"level5",mapPrefabName:EnumPrefab.ARMapSquare},{levelId: 5,levelTableName:"level6",mapPrefabName:EnumPrefab.ARMapCircular},{levelId: 6,levelTableName:"level7",mapPrefabName:EnumPrefab.ARMapCircular},{levelId: 7,levelTableName:"level8",mapPrefabName:EnumPrefab.ARMapSquare},{levelId: 8,levelTableName:"level9",mapPrefabName:EnumPrefab.ARMapSquare},{levelId: 9,levelTableName:"level10",mapPrefabName:EnumPrefab.ARMapSquare},{levelId: 10,levelTableName:"level11",mapPrefabName:EnumPrefab.ARMapCircular},{levelId: 11,levelTableName:"level12",mapPrefabName:EnumPrefab.ARMapSquare},
  ];

  private leveList = {level1:[{id:1,PrefabNameList:EnumPrefab.ARGold,cnt:6,shape:1,r:50,probabilitys:[EnumPrefab.ARQ3,10 ]},{id:2,PrefabNameList:EnumPrefab.ARQ2,cnt:12,shape:1,r:100,probabilitys:[EnumPrefab.ARQ3,20 ]},{id:3,PrefabNameList:EnumPrefab.ARQ1,cnt:18,shape:1,r:150,probabilitys:[EnumPrefab.ARQ3,30 ]},{id:4,PrefabNameList:EnumPrefab.ARQ2,cnt:24,shape:1,r:200,probabilitys:[EnumPrefab.ARQ3,40 ]},{id:5,PrefabNameList:EnumPrefab.ARQ1,cnt:30,shape:1,r:250,probabilitys:[EnumPrefab.ARQ3,50 ]},{id:6,PrefabNameList:EnumPrefab.ARQ2,cnt:36,shape:1,r:300,probabilitys:[EnumPrefab.ARQ3,60 ]},{id:7,PrefabNameList:EnumPrefab.ARQ1,cnt:42,shape:1,r:350,probabilitys:[EnumPrefab.ARQ3,70 ]}],level2:[{id:1,PrefabNameList:EnumPrefab.ARGold,cnt:5,probabilitys:[EnumPrefab.ARQ3,10 ]},{id:2,PrefabNameList:EnumPrefab.ARQ1,cnt:6,probabilitys:[EnumPrefab.ARQ3,20 ]},{id:3,PrefabNameList:EnumPrefab.ARGold,cnt:7,probabilitys:[EnumPrefab.ARQ3,30 ]},{id:4,PrefabNameList:EnumPrefab.ARQ1,cnt:8,probabilitys:[EnumPrefab.ARQ3,40 ]},{id:5,PrefabNameList:EnumPrefab.ARGold,cnt:9,probabilitys:[EnumPrefab.ARQ3,50 ]},{id:6,PrefabNameList:EnumPrefab.ARQ1,cnt:10,probabilitys:[EnumPrefab.ARQ3,60 ]}],level3:[{id:4,PrefabNameList:EnumPrefab.ARQ2,cnt:12,probabilitys:[EnumPrefab.ARQ3,100 ]}],level4:[{id:1,PrefabNameList:EnumPrefab.ARGold,cnt:1,shape:1,r:0,probabilitys:[EnumPrefab.ARQ3,10 ]},{id:1,PrefabNameList:EnumPrefab.ARQ1,cnt:6,shape:1,r:50,probabilitys:[EnumPrefab.ARQ3,20 ]},{id:2,PrefabNameList:EnumPrefab.ARGold,cnt:12,shape:1,r:100,probabilitys:[EnumPrefab.ARQ3,30 ]},{id:3,PrefabNameList:EnumPrefab.ARQ1,cnt:18,shape:1,r:150,probabilitys:[EnumPrefab.ARQ3,40 ]},{id:4,PrefabNameList:EnumPrefab.ARQ1,cnt:24,shape:1,r:200,probabilitys:[EnumPrefab.ARQ3,50 ]},{id:5,PrefabNameList:EnumPrefab.ARQ1,cnt:30,shape:1,r:250,probabilitys:[EnumPrefab.ARQ3,60 ]},{id:6,PrefabNameList:EnumPrefab.ARQ1,cnt:36,shape:1,r:300,probabilitys:[EnumPrefab.ARQ3,70 ]},{id:7,PrefabNameList:EnumPrefab.ARQ1,cnt:42,shape:1,r:350,probabilitys:[EnumPrefab.ARQ3,106 ]}],level5:[{id:1,PrefabNameList:EnumPrefab.ARQ1,cnt:7,probabilitys:[EnumPrefab.ARQ3,10 ]},{id:1,PrefabNameList:EnumPrefab.ARQ2,cnt:9,probabilitys:[EnumPrefab.ARQ3,20 ]},{id:1,PrefabNameList:EnumPrefab.ARQ1,cnt:12,probabilitys:[EnumPrefab.ARQ3,30 ]}],level6:[{id:1,PrefabNameList:EnumPrefab.ARQ1,cnt:7,shape:1,r:50,probabilitys:[EnumPrefab.ARQ3,10 ]},{id:2,PrefabNameList:EnumPrefab.ARGold,cnt:14,shape:1,r:100,probabilitys:[EnumPrefab.ARQ3,20 ]},{id:3,PrefabNameList:EnumPrefab.ARQ1,cnt:21,shape:1,r:150,probabilitys:[EnumPrefab.ARQ3,30 ]},{id:4,PrefabNameList:EnumPrefab.ARQ2,cnt:28,shape:1,r:200,probabilitys:[EnumPrefab.ARQ3,40 ]},{id:5,PrefabNameList:EnumPrefab.ARQ1,cnt:35,shape:1,r:250,probabilitys:[EnumPrefab.ARQ3,50 ]},{id:6,PrefabNameList:EnumPrefab.ARQ2,cnt:42,shape:1,r:300,probabilitys:[EnumPrefab.ARQ3,60 ]},{id:7,PrefabNameList:EnumPrefab.ARQ1,cnt:49,shape:1,r:350,probabilitys:[EnumPrefab.ARQ3,70 ]}],level7:[{id:1,PrefabNameList:EnumPrefab.ARQ1,cnt:6,shape:1,r:50,probabilitys:[EnumPrefab.ARQ3,10 ]},{id:3,PrefabNameList:EnumPrefab.ARQ1,cnt:18,shape:1,r:150,probabilitys:[EnumPrefab.ARQ3,20 ]},{id:5,PrefabNameList:EnumPrefab.ARQ1,cnt:30,shape:1,r:250,probabilitys:[EnumPrefab.ARQ3,30 ]},{id:7,PrefabNameList:EnumPrefab.ARQ1,cnt:42,shape:1,r:350,probabilitys:[EnumPrefab.ARQ3,40 ]}],level8:[{id:1,PrefabNameList:EnumPrefab.ARQ1,cnt:16,probabilitys:[EnumPrefab.ARQ3,10 ]}],level9:[{id:1,PrefabNameList:EnumPrefab.ARQ2,cnt:16,probabilitys:[EnumPrefab.ARQ3,10 ]}],level10:[{id:1,PrefabNameList:EnumPrefab.ARGold,cnt:4,probabilitys:[EnumPrefab.ARQ3,10 ]},{id:2,PrefabNameList:EnumPrefab.ARQ1,cnt:5,probabilitys:[EnumPrefab.ARQ3,20 ]},{id:3,PrefabNameList:EnumPrefab.ARQ2,cnt:6,probabilitys:[EnumPrefab.ARQ3,30 ]},{id:4,PrefabNameList:EnumPrefab.ARQ1,cnt:7,probabilitys:[EnumPrefab.ARQ3,40 ]}],level11:[{id:1,PrefabNameList:EnumPrefab.ARGold,cnt:6,shape:1,r:50,probabilitys:[EnumPrefab.ARQ3,10 ]},{id:2,PrefabNameList:EnumPrefab.ARQ2,cnt:12,shape:1,r:100,probabilitys:[EnumPrefab.ARQ3,20 ]},{id:3,PrefabNameList:EnumPrefab.ARQ1,cnt:18,shape:1,r:150,probabilitys:[EnumPrefab.ARQ3,30 ]},{id:4,PrefabNameList:EnumPrefab.ARQ2,cnt:24,shape:1,r:200,probabilitys:[EnumPrefab.ARQ3,40 ]},{id:5,PrefabNameList:EnumPrefab.ARQ1,cnt:30,shape:1,r:250,probabilitys:[EnumPrefab.ARQ3,50 ]},{id:6,PrefabNameList:EnumPrefab.ARQ2,cnt:36,shape:1,r:300,probabilitys:[EnumPrefab.ARQ3,60 ]},{id:7,PrefabNameList:EnumPrefab.ARQ1,cnt:42,shape:1,r:350,probabilitys:[EnumPrefab.ARQ3,70 ]}],level12:[{id:4,PrefabNameList:EnumPrefab.ARGold,cnt:11,probabilitys:[EnumPrefab.ARQ3,10 ]},{id:5,PrefabNameList:EnumPrefab.ARQ1,cnt:13,probabilitys:[EnumPrefab.ARQ3,20 ]}]};
  getGateByLevelId(level: number) :{levelId?; levelTableName?; mapPrefabName?;}{
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
    