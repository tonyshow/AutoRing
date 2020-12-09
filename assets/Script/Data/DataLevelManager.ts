import EnumPrefab from "../../Framework/Auto/EnumPrefab";
export default class DataLevelManager {
  private gateList = [
    {},
{levelId: 0,levelTableName:"level1",mapPrefabName:EnumPrefab.ARMapCircular,list:[]},{levelId: 1,levelTableName:"level2",mapPrefabName:EnumPrefab.ARMapSquare,list:[]},{levelId: 2,levelTableName:"level3",mapPrefabName:EnumPrefab.ARMapSquare,list:[]},{levelId: 3,levelTableName:"level4",mapPrefabName:EnumPrefab.ARMapCircular,list:[]},{levelId: 4,levelTableName:"level5",mapPrefabName:EnumPrefab.ARMapSquare,list:[]},{levelId: 5,levelTableName:"level6",mapPrefabName:EnumPrefab.ARMapCircular,list:[]},{levelId: 6,levelTableName:"level7",mapPrefabName:EnumPrefab.ARMapCircular,list:[]},{levelId: 7,levelTableName:"level8",mapPrefabName:EnumPrefab.ARMapSquare,list:[]},{levelId: 8,levelTableName:"level9",mapPrefabName:EnumPrefab.ARMapSquare,list:[]},{levelId: 9,levelTableName:"level10",mapPrefabName:EnumPrefab.ARMapSquare,list:[]},{levelId: 10,levelTableName:"level11",mapPrefabName:EnumPrefab.ARMapCircular,list:[]},{levelId: 11,levelTableName:"level12",mapPrefabName:EnumPrefab.ARMapSquare,list:[]},{levelId: 12,levelTableName:"level13",mapPrefabName:EnumPrefab.ARMapCircular,list:[]},
  ];

  private leveList = {level1:[{id:1,PrefabNameList:EnumPrefab.ARGold,cnt:6,shape:1,r:50,probabilitys:[EnumPrefab.ARQHurt1,10 ]},{id:2,PrefabNameList:EnumPrefab.ARQ1,cnt:12,shape:1,r:100,probabilitys:[EnumPrefab.ARQHurt1,10 ]},{id:3,PrefabNameList:EnumPrefab.ARQ2,cnt:18,shape:1,r:150,probabilitys:[EnumPrefab.ARQHurt1,10 ]},{id:4,PrefabNameList:EnumPrefab.ARQ3,cnt:24,shape:1,r:200,probabilitys:[EnumPrefab.ARQHurt1,10 ]},{id:5,PrefabNameList:EnumPrefab.ARQ4,cnt:30,shape:1,r:250,probabilitys:[EnumPrefab.ARQHurt1,10 ]},{id:6,PrefabNameList:EnumPrefab.ARQ5,cnt:36,shape:1,r:300,probabilitys:[EnumPrefab.ARQHurt1,10 ]},{id:7,PrefabNameList:EnumPrefab.ARQ6,cnt:42,shape:1,r:350,probabilitys:[EnumPrefab.ARQHurt1,10 ]}],level2:[{id:1,PrefabNameList:EnumPrefab.ARQ1,cnt:5,probabilitys:[EnumPrefab.ARQHurt1,10 ]},{id:2,PrefabNameList:EnumPrefab.ARGold,cnt:6,probabilitys:[EnumPrefab.ARQHurt1,11 ]},{id:3,PrefabNameList:EnumPrefab.ARQ1,cnt:7,probabilitys:[EnumPrefab.ARQHurt1,12 ]},{id:4,PrefabNameList:EnumPrefab.ARQ2,cnt:8,probabilitys:[EnumPrefab.ARQHurt1,13 ]},{id:5,PrefabNameList:EnumPrefab.ARQ3,cnt:9,probabilitys:[EnumPrefab.ARQHurt1,14 ]},{id:6,PrefabNameList:EnumPrefab.ARQ4,cnt:10,probabilitys:[EnumPrefab.ARQHurt1,15 ]}],level3:[{id:1,PrefabNameList:EnumPrefab.ARQ2,cnt:7,probabilitys:[EnumPrefab.ARQHurt1,10 ]}],level4:[{id:1,PrefabNameList:EnumPrefab.ARGold,cnt:5,shape:1,r:0,probabilitys:[EnumPrefab.ARQHurt1,10 ]},{id:2,PrefabNameList:EnumPrefab.ARQ1,cnt:6,shape:1,r:50,probabilitys:[EnumPrefab.ARQHurt1,11 ]},{id:3,PrefabNameList:EnumPrefab.ARQ2,cnt:12,shape:1,r:100,probabilitys:[EnumPrefab.ARQHurt1,12 ]},{id:4,PrefabNameList:EnumPrefab.ARQ3,cnt:18,shape:1,r:150,probabilitys:[EnumPrefab.ARQHurt1,13 ]},{id:5,PrefabNameList:EnumPrefab.ARQ4,cnt:24,shape:1,r:200,probabilitys:[EnumPrefab.ARQHurt1,14 ]},{id:6,PrefabNameList:EnumPrefab.ARQ5,cnt:30,shape:1,r:250,probabilitys:[EnumPrefab.ARQHurt1,15 ]},{id:7,PrefabNameList:EnumPrefab.ARQ6,cnt:36,shape:1,r:300,probabilitys:[EnumPrefab.ARQHurt1,16 ]},{id:8,PrefabNameList:EnumPrefab.ARQ7,cnt:42,shape:1,r:350,probabilitys:[EnumPrefab.ARQHurt1,17 ]}],level5:[{id:1,PrefabNameList:EnumPrefab.ARGold,cnt:7,probabilitys:[EnumPrefab.ARQHurt1,10 ]},{id:2,PrefabNameList:EnumPrefab.ARQ2,cnt:9,probabilitys:[EnumPrefab.ARQHurt1,11 ]},{id:3,PrefabNameList:EnumPrefab.ARQ1,cnt:12,probabilitys:[EnumPrefab.ARQHurt1,12 ]}],level6:[{id:1,PrefabNameList:EnumPrefab.ARGold,cnt:7,shape:1,r:50,probabilitys:[EnumPrefab.ARQHurt1,10 ]},{id:2,PrefabNameList:EnumPrefab.ARQ1,cnt:14,shape:1,r:100,probabilitys:[EnumPrefab.ARQHurt1,11 ]},{id:3,PrefabNameList:EnumPrefab.ARQ2,cnt:21,shape:1,r:150,probabilitys:[EnumPrefab.ARQHurt1,12 ]},{id:4,PrefabNameList:EnumPrefab.ARQ3,cnt:28,shape:1,r:200,probabilitys:[EnumPrefab.ARQHurt1,13 ]},{id:5,PrefabNameList:EnumPrefab.ARQ4,cnt:35,shape:1,r:250,probabilitys:[EnumPrefab.ARQHurt1,14 ]},{id:6,PrefabNameList:EnumPrefab.ARQ5,cnt:42,shape:1,r:300,probabilitys:[EnumPrefab.ARQHurt1,15 ]},{id:7,PrefabNameList:EnumPrefab.ARQ6,cnt:49,shape:1,r:350,probabilitys:[EnumPrefab.ARQHurt1,16 ]}],level7:[{id:1,PrefabNameList:EnumPrefab.ARQ1,cnt:6,shape:1,r:50,probabilitys:[EnumPrefab.ARQHurt1,10 ]},{id:2,PrefabNameList:EnumPrefab.ARQ2,cnt:18,shape:1,r:150,probabilitys:[EnumPrefab.ARQHurt1,11 ]},{id:3,PrefabNameList:EnumPrefab.ARQ3,cnt:30,shape:1,r:250,probabilitys:[EnumPrefab.ARQHurt1,12 ]},{id:4,PrefabNameList:EnumPrefab.ARQ4,cnt:42,shape:1,r:350,probabilitys:[EnumPrefab.ARQHurt1,13 ]}],level8:[{id:1,PrefabNameList:EnumPrefab.ARQ1,cnt:16,probabilitys:[EnumPrefab.ARQHurt1,10 ]}],level9:[{id:1,PrefabNameList:EnumPrefab.ARQ2,cnt:16,probabilitys:[EnumPrefab.ARQHurt1,10 ]}],level10:[{id:1,PrefabNameList:EnumPrefab.ARGold,cnt:4,probabilitys:[EnumPrefab.ARQHurt1,10 ]},{id:2,PrefabNameList:EnumPrefab.ARQ1,cnt:5,probabilitys:[EnumPrefab.ARQHurt1,11 ]},{id:3,PrefabNameList:EnumPrefab.ARQ2,cnt:6,probabilitys:[EnumPrefab.ARQHurt1,12 ]},{id:4,PrefabNameList:EnumPrefab.ARQ3,cnt:7,probabilitys:[EnumPrefab.ARQHurt1,13 ]}],level11:[{id:1,PrefabNameList:EnumPrefab.ARGold,cnt:6,shape:1,r:50,probabilitys:[EnumPrefab.ARQHurt1,10 ]},{id:2,PrefabNameList:EnumPrefab.ARQ1,cnt:12,shape:1,r:100,probabilitys:[EnumPrefab.ARQHurt1,11 ]},{id:3,PrefabNameList:EnumPrefab.ARQ2,cnt:18,shape:1,r:150,probabilitys:[EnumPrefab.ARQHurt1,12 ]},{id:4,PrefabNameList:EnumPrefab.ARQ3,cnt:24,shape:1,r:200,probabilitys:[EnumPrefab.ARQHurt1,13 ]},{id:5,PrefabNameList:EnumPrefab.ARQ4,cnt:30,shape:1,r:250,probabilitys:[EnumPrefab.ARQHurt1,14 ]},{id:6,PrefabNameList:EnumPrefab.ARQ5,cnt:36,shape:1,r:300,probabilitys:[EnumPrefab.ARQHurt1,15 ]},{id:7,PrefabNameList:EnumPrefab.ARQ6,cnt:42,shape:1,r:350,probabilitys:[EnumPrefab.ARQHurt1,16 ]}],level12:[{id:1,PrefabNameList:EnumPrefab.ARGold,cnt:11,probabilitys:[EnumPrefab.ARQHurt1,10 ]},{id:2,PrefabNameList:EnumPrefab.ARQ1,cnt:13,probabilitys:[EnumPrefab.ARQHurt1,20 ]}],level13:[{id:1,PrefabNameList:EnumPrefab.ARGold,cnt:6,shape:1,r:50,probabilitys:[EnumPrefab.ARQHurt1,10 ]},{id:2,PrefabNameList:EnumPrefab.ARQ1,cnt:12,shape:1,r:100,probabilitys:[EnumPrefab.ARQHurt1,11 ]},{id:3,PrefabNameList:EnumPrefab.ARQ2,cnt:24,shape:1,r:200,probabilitys:[EnumPrefab.ARQHurt1,12 ]},{id:4,PrefabNameList:EnumPrefab.ARQ3,cnt:36,shape:1,r:300,probabilitys:[EnumPrefab.ARQHurt1,13 ]}]};
  getGateByLevelId(level: number) :{levelId?; levelTableName?; mapPrefabName?;list?;}{
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
    