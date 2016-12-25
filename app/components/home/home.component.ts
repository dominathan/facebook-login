import {Component, ElementRef, ViewChild} from '@angular/core';
import {registerElement} from 'nativescript-angular/element-registry';

registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView);

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html'
})

export class HomeComponent {

   @ViewChild("MapView") mapView: ElementRef;

   //Map events
   onMapReady = (event) => {
       console.log("Map Ready");
   };
}
