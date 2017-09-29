let mdTwoApi = angular.module("mdTwoApi",[])
  .service("mdTwoSrv",["$http","$q",function($http,$q){
    return {
      getViewData:function(){
        return $http({
          url:"http://192.168.138.134:9080/awstack-user/v1/enterprises/a4181dbb30dc4c049563f01e384c07bf/users",
          method:"GET"
        }).then(function(res){
          return res.data.data;
        });
      }
    }

  }])

  export default mdTwoApi.name;