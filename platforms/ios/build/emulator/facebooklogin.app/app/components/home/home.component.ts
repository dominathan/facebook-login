import {Component, ElementRef, ViewChild} from '@angular/core';
import {registerElement} from 'nativescript-angular/element-registry';
var mapsModule = require("nativescript-google-maps-sdk");

registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView);
exports.mapView = mapsModule.MapView; //Doesn't work
exports.mapView = new mapsModule.MapView(); //Doesn't work
exports.mapView = mapsModule; //Doesn't work


@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html'
})

export class HomeComponent {
  //  public message:string = "Message set.";
  //  public latitude:number = 30.0;
  //  public longitude:number = -100.0;
  //  public zoom:number = 10;
  //  public bearing:number = 0;
  //  public tilt:number = 0;
   //
  //  constructor() {
  //      this.message = "Home constructed.";
  //  }
   @ViewChild("MapView") mapView: ElementRef;

   //Map events
   onMapReady = (event) => {
       console.log("Map Ready");
   };
}
