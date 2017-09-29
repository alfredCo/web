"use strict";
export default function httpConfig($httpProvider) {
    $httpProvider.interceptors.push(["$q", "$rootScope", "APIMODULE", function(q, $rootScope, APIMODULE) {
        return {
            request: function(config) {
                if (config.url.indexOf('bss-manager') > -1) {
                    var res_url = config.url.split('bss-manager');
                    config.url = APIMODULE.BSS + res_url[1];
                } else if (config.url.indexOf('user-manager') > -1) {
                    var res_url = config.url.split('user-manager');
                    config.url = APIMODULE.BASE + res_url[1];
                }
                let auth_token = sessionStorage.$AUTH_TOKEN;
                config.headers['X-Auth-Token'] = auth_token;
                return config;
            },
            response: function(res) {
                if (/\.html/.test(res.config.url)) {
                    return res;
                }
                return res.data;
            },
            requestError: function(rej) {
                return rej;
            },
            responseError: function(rej) {
                return rej;
            }
        }
    }]);
}
httpConfig.$inject = ["$httpProvider"];
