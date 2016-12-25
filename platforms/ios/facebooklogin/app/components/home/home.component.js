"use strict";
var core_1 = require('@angular/core');
var element_registry_1 = require('nativescript-angular/element-registry');
element_registry_1.registerElement("MapView", function () { return require("nativescript-google-maps-sdk").MapView; });
var HomeComponent = (function () {
    function HomeComponent() {
        //Map events
        this.onMapReady = function (event) {
            console.log("Map Ready");
        };
    }
    __decorate([
        core_1.ViewChild("MapView"), 
        __metadata('design:type', core_1.ElementRef)
    ], HomeComponent.prototype, "mapView", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home',
            templateUrl: 'home.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map