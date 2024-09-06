import { Component } from '@angular/core';
import { Map, marker, tileLayer } from 'leaflet';
import { tileLayers } from './config/tile-layers/data';



@Component({
  selector: 'app-thunderforest',
  templateUrl: './thunderforest.component.html',
  styleUrl: './thunderforest.component.css'
})
export class ThunderforestComponent {
  ngAfterViewInit() {
    const map = new Map('map').setView([-14.041015, -75.757245], 15);
  
    tileLayer(tileLayers.baseLayers.thunderForest.map.landscape,{
      minZoom: 0,
      maxZoom: 20,
      attribution: tileLayers.baseLayers.thunderForest.atribution,
    }).addTo(map);

  };
}
