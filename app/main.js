"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var facebook_1 = require("./config/facebook");
var google_api_1 = require('./config/google_api');
var tnsOAuthModule = require('nativescript-oauth');
var facebookInitOptions = {
    clientId: facebook_1.FACEBOOK_CLIENT_ID,
    clientSecret: facebook_1.FACEBOOK_CLIENT_SECRET,
    scope: ['email', 'user_friends', 'public_profile']
};
var platform = require("platform");
// before calling .boostrap
if (platform.isIOS) {
    GMSServices.provideAPIKey(google_api_1.GOOGLE_MAP_API);
}
tnsOAuthModule.initFacebook(facebookInitOptions);
var app_module_1 = require("./app.module");
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map