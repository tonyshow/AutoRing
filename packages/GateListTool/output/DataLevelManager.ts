export default class DataLevelManager {
  private gateList = [
    {},
    {
      levelId: 1,
      levelTableName: "level1",
      action: 1,
      actionTime: 1,
      args1: 1,
    },
    {
      levelId: 2,
      levelTableName: "level2",
      action: 1,
      actionTime: 1,
      args1: 1,
    },
    {
      levelId: 3,
      levelTableName: "level3",
      action: 1,
      actionTime: 1,
      args1: 1,
    },
    {
      levelId: 4,
      levelTableName: "level4",
      action: 1,
      actionTime: 1,
      args1: 1,
    },
    {
      levelId: 5,
      levelTableName: "level5",
      action: 1,
      actionTime: 1,
      args1: 1,
    },
    {
      levelId: 6,
      levelTableName: "level6",
      action: 1,
      actionTime: 1,
      args1: 1,
    },
    {
      levelId: 7,
      levelTableName: "level7",
      action: 1,
      actionTime: 1,
      args1: 1,
    },
    {
      levelId: 8,
      levelTableName: "level8",
      action: 1,
      actionTime: 1,
      args1: 1,
    },
    {
      levelId: 9,
      levelTableName: "level9",
      action: 1,
      actionTime: 1,
      args1: 1,
    },
    {
      levelId: 10,
      levelTableName: "level10",
      action: 1,
      actionTime: 1,
      args1: 1,
    },
    {
      levelId: 11,
      levelTableName: "level11",
      action: 1,
      actionTime: 1,
      args1: 1,
    },
    {
      levelId: 12,
      levelTableName: "level12",
      action: 1,
      actionTime: 1,
      args1: 1,
    },
    {
      levelId: 13,
      levelTableName: "level13",
      action: 1,
      actionTime: 1,
      args1: 1,
    },
    {
      levelId: 14,
      levelTableName: "level14",
      action: 1,
      actionTime: 1,
      args1: 1,
    },
    {
      levelId: 15,
      levelTableName: "level15",
      action: 1,
      actionTime: 1,
      args1: 1,
    },
    {
      levelId: 16,
      levelTableName: "level16",
      action: 1,
      actionTime: 1,
      args1: 1,
    },
    {
      levelId: 17,
      levelTableName: "level17",
      action: 1,
      actionTime: 1,
      args1: 1,
    },
    {
      levelId: 18,
      levelTableName: "level18",
      action: 1,
      actionTime: 1,
      args1: 1,
    },
  ];
  getGateByLevelId(level: number) {
    if (null == level) {
      cc.error("请传入有效的关卡levelId");
      return [];
    }
    let gate = this.gateList[level];
    if (!!gate) {
      return gate;
    }
    cc.error("无关卡数据level = ", level);
    return [];
  }
  getGateIdList() {
    return [];
  }
}
