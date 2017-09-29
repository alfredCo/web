//API SOURCE
window.APIMODULE = {
    APIHOST:{
        "BASE":"http://192.168.133.133:8080/user-manager",
        "BSS":"http://192.168.133.133:8080/bss-manager"
    }
};
// STATIC URL
window.STATIC_URL = "/frontend_static/"

;(function(){
var config = document.getElementById("page-config");
if(config){
    var js,css;
    if(config.getAttribute("data-css")){
        css = config.getAttribute("data-css").replace(/^\s+|\s+$/g, "").split(/\s+/).map(function(i){
            return "<link rel=\"stylesheet\" href=\"" + STATIC_URL + i + "\">";
        });
        document.write(css.join(""));
    } 
    if(config.getAttribute("data-js")){
       js = config.getAttribute("data-js").replace(/^\s+|\s+$/g, "").split(/\s+/).map(function(i){
           return "<script src=\"" + STATIC_URL + i + "\"></" + "script>";
        });
        document.write(js.join("")); 
    } 
}
})();

