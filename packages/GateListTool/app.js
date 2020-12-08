require("shelljs/global");
var async = require("async");
var _ = require("underscore");
var fs = require("fs");
var path = require("path");
const xlsx = require("node-xlsx");
var utilBuild = require("./../Framework/utilTool/utilBuild");
var app = (module.exports = {});
var g_gateInfo = "";
var g_leveInfo = "";
var getGateByLevelIdReturn = ":{levelId?,levelTableName?,action?}";
app.main = function () {
  exec(`rm -r -f output`, () => {
    utilBuild.mkdirsSync(path.resolve(__dirname, "./output"));
    let xlsxFilePath = path.resolve(__dirname, "./level.xlsx");
    //console.log(xlsxFilePath);
    var list = xlsx.parse(xlsxFilePath);
    _.each(list, (table, idx) => {
      app.getGateList(table);
      app.getLevels(table);
    });
    app.saveFile(g_gateInfo, g_leveInfo);
  });
};
app.getGateList = function (table) {
  let infoList = "";
  if (table.name === "GateList") {
    let byteNameList = [];
    _.each(table.data, (list, idx) => {
      if (1 == idx) {
        byteNameList = list;
        getGateByLevelIdReturn = ":{";
        let size = list.length;
        for (let keyName of list) {
          getGateByLevelIdReturn += keyName + "?,";
        }
        getGateByLevelIdReturn += "list?";
        getGateByLevelIdReturn += "}";
      } else if (idx > 1) {
        infoList += `{`;
        for (let key in list) {
          let keyName = byteNameList[key];
          let value =
            "string" == typeof list[key]
              ? `${
                  -1 == keyName.indexOf("PrefabName")
                    ? `"${list[key]}"`
                    : "EnumPrefab" + "." + list[key]
                }`
              : `${list[key]}`;
          infoList += `${byteNameList[key]}:${value},`;
        }
        infoList += "list:[],";
        infoList += `},`;
      }
    });
    g_gateInfo = infoList;
  }
  return infoList;
};
app.getLevels = function (table) {
  if (table.name != "GateList") {
    g_leveInfo += table.name + ":[";
    let byteNameList = [];
    _.each(table.data, (list, idx) => {
      if (1 == idx) {
        byteNameList = list;
      } else if (idx > 1) {
        g_leveInfo += `{`;
        //let idx=0;
        for (let key in list) {
          //++idx;
          let keyName = byteNameList[key];
          let value =
            "string" == typeof list[key]
              ? `${
                  -1 == keyName.indexOf("PrefabName")
                    ? `"${list[key]}"`
                    : "EnumPrefab" + "." + list[key]
                }`
              : `${list[key]}`;

          if(byteNameList[key]=="probabilitys"){
            value=value.replace(/\"/g,"");
            let valueList = value.split("#");
            let per =  Number(valueList[1])
            let list = `[EnumPrefab.${valueList[0]},${per} ]`
            g_leveInfo += `${byteNameList[key]}:${list},`;
          }else{
            g_leveInfo += `${byteNameList[key]}:${value},`;
          }

          //g_leveInfo += idx==_.size(list)?"":","
        }
        g_leveInfo += `},`;
        //g_leveInfo += idx1==_.size(table.data)?`}`:`},`
      }
    });
    g_leveInfo += "],";


  }
};

app.saveFile = function (gateInfo, g_leveInfo) {
  console.log("开始保存文件app.saveFile");
  let saveInfo = `import EnumPrefab from "../../Framework/Auto/EnumPrefab";
export default class DataLevelManager {
  private gateList = [
    {},
${gateInfo}
  ];

  private leveList = {${g_leveInfo}};
  getGateByLevelId(level: number) ${getGateByLevelIdReturn}{
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
    `;

    saveInfo = saveInfo.replace(/\,\}/g,"}")
    saveInfo = saveInfo.replace(/\,\]/g,"]")
    saveInfo = saveInfo.replace(/\,\};/g,"};")
  utilBuild.saveFile(
    path.resolve(__dirname, "./../../assets/Script/Data/DataLevelManager.ts"),
    saveInfo
  );
};
app.main();
