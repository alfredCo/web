var validateModule = angular.module('validateModule', ["ngMessages"]);

//只能是数字
validateModule.directive("checkNum",function(){
    return {
        restrict:"A",
        require:"ngModel",
        link:function(scope,ele,attrs,ngModel){
            var reg=/^[0-9]*$/
            ngModel.$parsers.push(function(viewValue){
                if(!reg.test(viewValue)){
                    ngModel.$setValidity("checkNum",false);
                }else{
                    ngModel.$setValidity("checkNum",true);
                }
                return viewValue;
            })
        }
    }
})
//只能输入中文、字母、数字、横线以及下划线
validateModule.directive("inputFormat",function(){
    return {
        restrict:"A",
        require:"ngModel",
        link:function(scope,ele,attrs,ngModel){
            var reg=/^(\w|[\u4E00-\u9FA5]|\-|\_)*$/
            ngModel.$parsers.push(function(viewValue){
                if(!reg.test(viewValue)){
                    ngModel.$setValidity("inputFormat",false);
                }else{
                    ngModel.$setValidity("inputFormat",true);
                }
                return viewValue;
            })
        }
    }
})
//电话号码验证
validateModule.directive("phoneInfo",function(){
    return {
        restrict:"A",
        require:"ngModel",
        link:function(scope,ele,attrs,ngModel){
            var reg=/(^(13\d|15[^4,\D]|17[13678]|18\d)\d{8}|170[^346,\D]\d{7})$/
            ngModel.$parsers.push(function(viewValue){
                if(!reg.test(viewValue)&&viewValue!=""){
                    ngModel.$setValidity("phoneInfo",false);
                }else{
                    ngModel.$setValidity("phoneInfo",true);
                }
                return viewValue;
            })
        }
    }
})
//邮箱验证
validateModule.directive("emailInfo",function(){
    return {
        restrict:"A",
        require:"ngModel",
        link:function(scope,ele,attrs,ngModel){
            var reg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
            ngModel.$parsers.push(function(viewValue){
                console.log(viewValue,"phone");
                if(!reg.test(viewValue)&&viewValue!=""){
                    ngModel.$setValidity("emailInfo",false);
                }else{
                    ngModel.$setValidity("emailInfo",true);
                }
                return viewValue;
            })
        }
    }
})


//最大长度不能超过32位
validateModule.directive("maxLength", ["$translate",function(translate){
    return {
        restrict: "EA",
        require:"ngModel",
        link: function(scope,ele,attrs,ngModel){
            ngModel.$parsers.push(function(viewValue){
				if(viewValue.length>32){
					ngModel.$setValidity("maxLength",false);
				}else{
					ngModel.$setValidity("maxLength",true);
				}
				return viewValue;
			})
        }
    };
}])
//封装ng-message
.directive("formValidate", ["$translate",function(translate){
    return {
        restrict: "EA",
        scope:{
            checkInfo:"=",
            patternMsg:"="
        },   
        template:"<div ng-message='required'>必填项</div>"+
                "<div ng-message='phoneInfo'>请输入正确的手机号码</div>"+
                "<div ng-message='emailInfo'>请输入正确的邮箱</div>"+
                "<div ng-message='inputFormat'>只能输入中文、字母、数字、横线以及下划线</div>"+
                "<div ng-message='checkNum'>只能输入数字</div>"+
                "<div ng-message='maxLength'>输入长度小于32位</div>",
        link: function(scope, element, attrs){
                // console.log(scope.checkInfo)
                // scope.patternMsg?scope.msg=scope.patternMsg:scope.msg ="输入格式不正确";
                // scope.checkInfo?scope.msg1=scope.checkInfo:scope.msg1 ="输入格式不正确";
        }
    };
}]);
export default validateModule.name