let mdOneApi = angular.module("mdOneApi",[])
  .service("mdOneSrv",["$http","$q",function($http,$q){
    return {
      getViewData:function(){
        /*return $http({
          url:"http://192.168.138.134:9080/awstack-user/v1/enterprises/a4181dbb30dc4c049563f01e384c07bf/privileges",
          method:"GET"
        }).then(function(res){
          return res.data.data;
        });*/
        var data = [
          {
            name:"aa",
            id:"1",
            detail:"this a vm a",
            select:1
          },
          {
            name:"bb",
            id:"2",
            detail:"b this a vm ",
            select:2
          },
          {
            name:"cc",
            id:"3",
            detail:"c this a vm a",
            select:3
          },
          {
            name:"cc",
            id:"4",
            detail:"c this a vm a",
            select:4
          },
          {
            name:"cc",
            id:"5",
            detail:"c this a vm a",
            select:4
          }
        ];
        var deferred = $q.defer();
        deferred.resolve(data);
        return deferred.promise;
      },
      editData:function(data){
        return $http({
          url:"http://www.baidu.com",
          method:"POST",
          data:data
        })
      },
      createData:function(data){
        return $http({
          url:"http://www.baidu.com",
          method:"POST",
          data:data
        })
      },
      delData:function(data){
        return $http({
          url:"http://www.baidu.com",
          method:"PUT",
          data:data
        })
      }
    }

  }])

  export default mdOneApi.name;