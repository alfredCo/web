"use strict";

export default function mainCtrl(scope){
  var self = scope;
  self.items = [
    {
      name:"前端UI",
      url: "#/"
    },
    {
      name:"JS相关",
      url: "#/mdtwo"
    }
  ]
}
mainCtrl.$inject = ["$scope"];
