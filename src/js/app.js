"use strict";
import md from './module';
import routeConfig from "./route";
import httpConfig from "./http";
import translateConfig from "./i18n";
import mainCtrl from "./main";
import comModule from "./common/component";
import UIModule from "./common/ui-directive";
import validateModule from "./common/validate";

angular.module("app",[
  comModule,
  UIModule,
  validateModule,
  "ui.select",
  "ngSanitize",
  "ngRoute",
  "pascalprecht.translate",
  md
  ])
.constant("APIMODULE", APIMODULE.APIHOST)
.config(routeConfig)
.config(httpConfig)
.config(translateConfig)
.controller("mainCtrl",mainCtrl);