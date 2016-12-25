"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var tnsOAuthModule = require('nativescript-oauth');
var facebookInitOptions = {
    clientId: '380261268977382',
    clientSecret: 'ce77c8d1c9f691e25467dbb8a734d240',
    scope: ['email']
};
tnsOAuthModule.initFacebook(facebookInitOptions);
var app_module_1 = require("./app.module");
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map