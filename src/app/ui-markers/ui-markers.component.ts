import { Component } from '@angular/core';
import { Map, marker, point, tileLayer } from 'leaflet';
import { tileLayers } from '../thunderforest/config/tile-layers/data';
import { drinkWaterSoraluze } from './config/data/drink-water';

@Component({
  selector: 'app-ui-markers',
  templateUrl: './ui-markers.component.html',
  styleUrl: './ui-markers.component.css'
})
export class UiMarkersComponent {
  ngAfterViewInit() {
    const mapMarker = new Map('mapMarker').setView([0, 0], 15);
    tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapMarker);
    // Añade marcador manual
    const aerodromoMarker = marker([-14.041547487288192, -75.75723657816827]).addTo(mapMarker);
    const huacachinaMarker = marker([-14.087086942399745, -75.76267664653732]).addTo(mapMarker);
    const plazaArmasIcaMaker = marker([-14.06397353654805, -75.72908825820468]).addTo(mapMarker);
    // Centrar el mapa con fitbounds con marcadores
    mapMarker.fitBounds([
        [aerodromoMarker.getLatLng().lat, aerodromoMarker.getLatLng().lng],
        [huacachinaMarker.getLatLng().lat, huacachinaMarker.getLatLng().lng],
        [plazaArmasIcaMaker.getLatLng().lat, plazaArmasIcaMaker.getLatLng().lng],
      ])
    // Añade marcadores dinámicos
    const mapMarkerDinamico = new Map('mapMarkerDinamico').setView([0, 0], 15);
    tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapMarkerDinamico);
    tileLayer(tileLayers.baseLayers.thunderForest.map.landscape,{
      minZoom: 0,
      maxZoom: 20,
      attribution: tileLayers.baseLayers.thunderForest.atribution,
    }).addTo(mapMarker);

    drinkWaterSoraluze.map((point) => {
      marker([point.lat, point.lon]).addTo(mapMarkerDinamico)
    })
    const drinkWaterAdicional = marker([43.19679, -2.43828]).addTo(mapMarkerDinamico)
    mapMarkerDinamico.fitBounds([
      ...drinkWaterSoraluze.map(point => [point.lat, point.lon] as [number, number]),
      [drinkWaterAdicional.getLatLng().lat, drinkWaterAdicional.getLatLng().lng]
    ]);
  };
}
