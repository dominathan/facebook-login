"use strict";
var core_1 = require('@angular/core');
var element_registry_1 = require('nativescript-angular/element-registry');
element_registry_1.registerElement("MapView", function () { return require("nativescript-google-maps-sdk").MapView; });
var MapComponent = (function () {
    function MapComponent() {
        //Map events
        this.onMapReady = function (event) {
            console.log("Map Ready");
        };
    }
    __decorate([
        core_1.ViewChild("MapView"), 
        __metadata('design:type', core_1.ElementRef)
    ], MapComponent.prototype, "mapView", void 0);
    MapComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'map',
            templateUrl: 'map.component.html',
            styleUrls: ['map.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map