import {Component, ElementRef, ViewChild} from '@angular/core';
import {registerElement} from 'nativescript-angular/element-registry';

registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView);

@Component({
  moduleId: module.id,
  selector: 'map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css']
})

export class MapComponent {

   @ViewChild("MapView") mapView: ElementRef;

   //Map events
   onMapReady = (event) => {
       console.log("Map Ready");
   };
}
