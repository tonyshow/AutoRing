import EnumPrefab from "../../Framework/Auto/EnumPrefab";
export default class DataLevelManager {
  private gateList = [
    {},
{levelId:1,levelTableName:"level1",mapPrefabName:EnumPrefab.ARMapCircular,list:[]},{levelId:2,levelTableName:"level2",mapPrefabName:EnumPrefab.ARMapSquare,list:[]},{levelId:3,levelTableName:"level3",mapPrefabName:EnumPrefab.ARMapSquare,list:[]},{levelId:4,levelTableName:"level4",mapPrefabName:EnumPrefab.ARMapCircular,list:[]},{levelId:5,levelTableName:"level5",mapPrefabName:EnumPrefab.ARMapSquare,list:[]},{levelId:6,levelTableName:"level6",mapPrefabName:EnumPrefab.ARMapCircular,list:[]},{levelId:7,levelTableName:"level7",mapPrefabName:EnumPrefab.ARMapCircular,list:[]},{levelId:8,levelTableName:"level8",mapPrefabName:EnumPrefab.ARMapSquare,list:[]},{levelId:9,levelTableName:"level9",mapPrefabName:EnumPrefab.ARMapSquare,list:[]},{levelId:10,levelTableName:"level10",mapPrefabName:EnumPrefab.ARMapSquare,list:[]},{levelId:11,levelTableName:"level1",mapPrefabName:EnumPrefab.ARMapCircular,list:[]},{levelId:12,levelTableName:"level2",mapPrefabName:EnumPrefab.ARMapSquare,list:[]},{levelId:13,levelTableName:"level3",mapPrefabName:EnumPrefab.ARMapSquare,list:[]},{levelId:14,levelTableName:"level4",mapPrefabName:EnumPrefab.ARMapCircular,list:[]},{levelId:15,levelTableName:"level5",mapPrefabName:EnumPrefab.ARMapSquare,list:[]},{levelId:16,levelTableName:"level1",mapPrefabName:EnumPrefab.ARMapCircular,list:[]},{levelId:17,levelTableName:"level2",mapPrefabName:EnumPrefab.ARMapSquare,list:[]},{levelId:18,levelTableName:"level1",mapPrefabName:EnumPrefab.ARMapCircular,list:[]},
  ];

  private leveList = {level1:[{id:1,PrefabNameList:EnumPrefab.ARGold,cnt:3,shape:1,r:50,probabilitys:[EnumPrefab.ARQ3,1 ]},{id:2,PrefabNameList:EnumPrefab.ARQ2,cnt:12,shape:1,r:100,probabilitys:[EnumPrefab.ARQ3,1 ]}],level2:[{id:4,PrefabNameList:EnumPrefab.ARGold,cnt:2,probabilitys:[EnumPrefab.ARQ3,500 ]},{id:5,PrefabNameList:EnumPrefab.ARQ1,cnt:4,probabilitys:[EnumPrefab.ARQ3,100 ]}],level3:[{id:4,PrefabNameList:EnumPrefab.ARQ2,cnt:12,probabilitys:[EnumPrefab.ARQ3,500 ]}],level4:[{id:1,PrefabNameList:EnumPrefab.ARGold,cnt:1,shape:1,r:0,probabilitys:[EnumPrefab.ARQ3,500 ]},{id:1,PrefabNameList:EnumPrefab.ARQ1,cnt:6,shape:1,r:50,probabilitys:[EnumPrefab.ARQ3,100 ]},{id:2,PrefabNameList:EnumPrefab.ARGold,cnt:12,shape:1,r:100,probabilitys:[EnumPrefab.ARQ3,101 ]},{id:3,PrefabNameList:EnumPrefab.ARQ1,cnt:18,shape:1,r:150,probabilitys:[EnumPrefab.ARQ3,102 ]},{id:4,PrefabNameList:EnumPrefab.ARQ1,cnt:24,shape:1,r:200,probabilitys:[EnumPrefab.ARQ3,103 ]},{id:5,PrefabNameList:EnumPrefab.ARQ1,cnt:30,shape:1,r:250,probabilitys:[EnumPrefab.ARQ3,104 ]},{id:6,PrefabNameList:EnumPrefab.ARQ1,cnt:36,shape:1,r:300,probabilitys:[EnumPrefab.ARQ3,105 ]},{id:7,PrefabNameList:EnumPrefab.ARQ1,cnt:42,shape:1,r:350,probabilitys:[EnumPrefab.ARQ3,500 ]}],level5:[{id:1,PrefabNameList:EnumPrefab.ARQ1,cnt:15,probabilitys:[EnumPrefab.ARQ3,500 ]}],level6:[{id:1,PrefabNameList:EnumPrefab.ARQ1,cnt:7,shape:1,r:50,probabilitys:[EnumPrefab.ARQ3,500 ]},{id:2,PrefabNameList:EnumPrefab.ARGold,cnt:14,shape:1,r:100,probabilitys:[EnumPrefab.ARQ3,100 ]},{id:3,PrefabNameList:EnumPrefab.ARQ1,cnt:21,shape:1,r:150,probabilitys:[EnumPrefab.ARQ3,101 ]},{id:4,PrefabNameList:EnumPrefab.ARQ2,cnt:28,shape:1,r:200,probabilitys:[EnumPrefab.ARQ3,102 ]},{id:5,PrefabNameList:EnumPrefab.ARQ1,cnt:35,shape:1,r:250,probabilitys:[EnumPrefab.ARQ3,103 ]},{id:6,PrefabNameList:EnumPrefab.ARQ2,cnt:42,shape:1,r:300,probabilitys:[EnumPrefab.ARQ3,104 ]},{id:7,PrefabNameList:EnumPrefab.ARQ1,cnt:49,shape:1,r:350,probabilitys:[EnumPrefab.ARQ3,105 ]}],level7:[{id:1,PrefabNameList:EnumPrefab.ARQ1,cnt:6,shape:1,r:50,probabilitys:[EnumPrefab.ARQ3,500 ]},{id:3,PrefabNameList:EnumPrefab.ARQ1,cnt:18,shape:1,r:150,probabilitys:[EnumPrefab.ARQ3,100 ]},{id:5,PrefabNameList:EnumPrefab.ARQ1,cnt:30,shape:1,r:250,probabilitys:[EnumPrefab.ARQ3,101 ]},{id:7,PrefabNameList:EnumPrefab.ARQ1,cnt:42,shape:1,r:350,probabilitys:[EnumPrefab.ARQ3,102 ]}],level8:[{id:1,PrefabNameList:EnumPrefab.ARQ1,cnt:16,probabilitys:[EnumPrefab.ARQ3,500 ]}],level9:[{id:1,PrefabNameList:EnumPrefab.ARQ2,cnt:16,probabilitys:[EnumPrefab.ARQ3,500 ]}],level10:[{id:1,PrefabNameList:EnumPrefab.ARGold,cnt:4,probabilitys:[EnumPrefab.ARQ3,1 ]},{id:2,PrefabNameList:EnumPrefab.ARQ1,cnt:5,probabilitys:[EnumPrefab.ARQ3,1 ]},{id:3,PrefabNameList:EnumPrefab.ARQ2,cnt:6,probabilitys:[EnumPrefab.ARQ3,1 ]},{id:4,PrefabNameList:EnumPrefab.ARQ1,cnt:7,probabilitys:[EnumPrefab.ARQ3,700 ]}],level11:[{id:1,PrefabNameList:EnumPrefab.ARGold,cnt:6,shape:1,r:50,probabilitys:[EnumPrefab.ARQ3,1 ]},{id:2,PrefabNameList:EnumPrefab.ARQ2,cnt:12,shape:1,r:100,probabilitys:[EnumPrefab.ARQ3,1 ]},{id:3,PrefabNameList:EnumPrefab.ARQ1,cnt:18,shape:1,r:150,probabilitys:[EnumPrefab.ARQ3,1 ]},{id:4,PrefabNameList:EnumPrefab.ARQ2,cnt:24,shape:1,r:200,probabilitys:[EnumPrefab.ARQ3,1 ]},{id:5,PrefabNameList:EnumPrefab.ARQ1,cnt:30,shape:1,r:250,probabilitys:[EnumPrefab.ARQ3,1 ]},{id:6,PrefabNameList:EnumPrefab.ARQ2,cnt:36,shape:1,r:300,probabilitys:[EnumPrefab.ARQ3,1 ]},{id:7,PrefabNameList:EnumPrefab.ARQ1,cnt:42,shape:1,r:350,probabilitys:[EnumPrefab.ARQ3,1 ]}],level12:[{id:4,PrefabNameList:EnumPrefab.ARGold,cnt:11,probabilitys:[EnumPrefab.ARQ3,500 ]},{id:5,PrefabNameList:EnumPrefab.ARQ1,cnt:13,probabilitys:[EnumPrefab.ARQ3,100 ]}]};
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
    