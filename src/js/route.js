"use strict";

export default function routeConfig($routeProvider){
  $routeProvider
    .when("/",{
      templateUrl:"tmpl/md2.html",
      controller:"mdTwoCtrl"
    })
    .when("/mdtwo",{
      templateUrl:"tmpl/md1.html",
      controller:"mdOneCtrl"
    })
    .otherwise({ redirectTo: "/" });
}
routeConfig.$inject = ["$routeProvider"];
