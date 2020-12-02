
export default class EditorManager {
  currSelect=-1;
  currMapData={
    //背景
    map:{
      action:-1,//动作
      shape:-1,//形状
    },
    list:[]//球数据
  };//当前编辑的map数据
  getCurrSelect(){
    return this.currSelect
  }

  setCurrSelect(currSelect){
    this.currSelect=currSelect
  }
  getCurrMapData(){
    return this.currMapData
  }

  setCurrMapData(currMapData){
    this.currMapData=currMapData
  }

  //保存编辑
  saveEditor(){

  }
  //计算编辑
  reckonEditor(){

  }
}
