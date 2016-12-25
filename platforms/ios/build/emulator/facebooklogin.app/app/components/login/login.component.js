"use strict";
var core_1 = require('@angular/core');
var tnsOAuthModule = require('nativescript-oauth');
var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.onLoginTap = function (event) {
        console.log("I WAS PRESSED" + event);
        tnsOAuthModule.login()
            .then(function () {
            console.log('logged in');
            console.dir("accessToken " + tnsOAuthModule.accessToken());
        })
            .catch(function (err) {
            //do something with the error
            console.log("FUCK", err);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: 'login.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map