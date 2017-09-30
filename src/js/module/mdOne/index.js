import mdOneApi from "./mdOneSrv";
let mdOne = angular.module('mdOne',[
  mdOneApi
  ])
  .controller("mdOneCtrl",["$scope","mdOneSrv","TableCom","modalCom","$route", function(scope,mdOneSrv,TableCom,modalCom,$route){
    var self = scope;
    //初始化函数
    function modInit(){
      mdOneSrv.getViewData().then(function(res){
        self.tableData = res;
        TableCom.init(self,'tableParams',self.tableData,'id',3);
      })
    }
    modInit();
    self.add = function (a, b) {
        a = Number(a);
        b = Number(b);
        if (a && b && !isNaN(a) && !isNaN(b))
            return a + b;
        return -1;
    }
    self.$watch(function() {
        return self.checkboxes.items;//监控checkbox
    }, function(val) {
        self.checkedItems = [];//所有被选中的checkbox的数据
        /*
        然后有一点需要注意的是每个按钮的disabled状态
        比如我想编辑某条数据，此时如果同时选中两条以上数
        据，这个时候要考虑是否可以批量编辑，如果不允许，编辑的btn就需要置为disabled
        其他按钮同样也需要考虑这个逻辑
        */

        self.checkedEdit = null;
        var arr=[];
        for(let i in self.checkboxes.items){
          arr.push(self.checkboxes.items[i])
        }
        if(val && arr.length>=0){
          for(var key in val){
            if(val[key]){
              self.tableParams.data.forEach(item=>{
                if(item.id==key){
                  self.checkedItems.push(item);
                }
              })
            }
          }
        };
        if(self.checkedItems.length==1){//我们默认当只有一条被选中时才可以编辑，此时可以用一个字段专门存这条数据，比如下面的self.checkedEdit,
          self.checkedEdit = angular.copy(self.checkedItems[0]);
        }
      //判断各个按钮的状态
      if(self.checkedItems.length==1){
        self.canEdit= true;
        self.canDel=true;
      }else if(self.checkedItems.length>1){
        self.canEdit= false;
        self.canDel=true;
      }else{
        self.canEdit= false;
        self.canDel=false;
      }
    },true);


    //新建数据
    self.create = function(){
      //实例化一个新建弹出层
      var instan = modalCom.init('create.html',"createCtrl",{refresh:function(){return modInit},context:function(){return self}})
    }
    //编辑数据
    self.edit = function(data){
      if(data){
        //实例化一个新建弹出层
        var instan = modalCom.init(
          'edit.html',
          "editCtrl",
          {
            editData:function(){
              return data
            },
            refresh:function(){
              return modInit
            },
            context:function(){
              return self
            }
          }
        )
      }
      
    }
    //删除数据
    self.delete=function(data){
        self.confirmFunc=function(){
            mdOneSrv.delData(data).then(function(result){
              //删除之后 do something 其实删除数据的话可以不刷新页面，把删除的数据暂时在前端手动减掉再渲染下table，我觉得也可行
            })
        }
        var content = {
            msg: "是否要删除",
            type: "warning",
            func:"confirmFunc"
        };
        self.$emit("ui-tag-alert", content);
    }
  }])
  .controller("createCtrl",["$scope","$uibModalInstance","mdOneSrv","refresh","context",function(scope,$uibModalInstance,mdOneSrv,refresh,context){
    var self = scope;
    self.data = {};
    self.selectList = [1,2,3,4,5];
    self.submited = false;
    self.formInvalid = function(field){
      return field.$dirty || self.submited;
    }
    self.sure = function(formname,data){
      self.submited = true;
      if(formname.$valid){
        //demo写法
        data.id = (Math.random()*1000).toFixed()+"_"+(new Date()).getTime();
        context['tableData'].unshift(data)
        context['tableParams'].reload();
        $uibModalInstance.dismiss('cancel');//关闭弹出层
      }
      //正常流程
      /*mdOneSrv.createData(self.data).then(function(){
        //新建之后 do something 比如刷新列表
        refresh();
        $uibModalInstance.dismiss('cancel');
      })*/


    }
  }])
  .controller("editCtrl",["$scope","editData","$uibModalInstance","mdOneSrv","refresh","context",function(scope,editData,$uibModalInstance,mdOneSrv,refresh,context){
    var self = scope;
    self.dat = angular.copy(editData);
    self.selectList = [1,2,3,4,5];
    self.submited = false;
    self.formInvalid = function(field){
      return field.$dirty || self.submited;
    }
    self.sure = function(formname){
      self.submited = true;
      if(formname.$valid){
        context['tableData'].forEach(item=>{
          if(item.id ==self.dat.id){
            for(var key in item){
              item[key]=self.dat[key];
            }
          }
        })
        $uibModalInstance.dismiss('cancel');//关闭弹出层
      }
      //正常流程
      /*mdOneSrv.editData(self.data).then(function(){
        refresh();
        $uibModalInstance.dismiss('cancel');
      })*/

      //demo写法

    }
  }]);
export default mdOne.name;