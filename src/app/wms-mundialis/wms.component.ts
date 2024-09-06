import { Component } from '@angular/core';
import { Map, tileLayer } from 'leaflet';
import { tileLayers } from '../thunderforest/config/tile-layers/data';


@Component({
  selector: 'app-wms',
  templateUrl: './wms.component.html',
  styleUrl: './wms.component.css'
})
export class WmsComponent {
  ngAfterViewInit() {
    const myMap = new Map('mymap').setView([-14.041015, -75.757245], 15);
  
  tileLayer.wms('http://ows.mundialis.de/services/service?', {
      layers: 'OSM-WMS',
      format: 'image/png',
      transparent: true,
      attribution: tileLayers.baseLayers.default.atribution
    }).addTo(myMap);
  }
}
