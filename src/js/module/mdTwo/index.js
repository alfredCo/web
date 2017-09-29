import mdTwoApi from "./mdTwoSrv";
let mdTwo = angular.module('mdTwo',[
  mdTwoApi
  ])
  .controller("mdTwoCtrl",["$scope","mdTwoSrv",function(scope,mdOneSrv){
    var self = scope;
    self.test1 = "awcloud";
    self.getData = function(){
      mdOneSrv.getViewData().then(function(res){
        console.log(res);
        self.data = res;
      })
    }
    self.selectList = [
      {name:1},
      {name:2},
      {name:3},
      {name:4}
    ];
    self.selected = {
      cur:self.selectList[0]
    }
  }]);
export default mdTwo.name;