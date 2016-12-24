"use strict";
var platform_1 = require('nativescript-angular/platform');
var router_1 = require('nativescript-angular/router');
var core_1 = require('@angular/core');
var home_component_1 = require('./home/home.component');
var login_component_1 = require('./login/login.component');
var COMPONENTS = [
    home_component_1.HomeComponent,
    login_component_1.LoginComponent
];
exports.routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        children: [
            { path: 'login', component: login_component_1.LoginComponent }
        ]
    }
];
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_1.NativeScriptModule,
                router_1.NativeScriptRouterModule
            ],
            declarations: [
                COMPONENTS
            ],
            exports: [
                COMPONENTS,
                platform_1.NativeScriptModule,
                router_1.NativeScriptRouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ComponentsModule);
    return ComponentsModule;
}());
exports.ComponentsModule = ComponentsModule;
//# sourceMappingURL=components.module.js.map