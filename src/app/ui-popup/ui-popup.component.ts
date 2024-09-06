import { Component } from '@angular/core';
import { Map,tileLayer, marker, popup } from 'leaflet';
import { tileLayers } from '../thunderforest/config/tile-layers/data';

@Component({
  selector: 'app-ui-popup',
  templateUrl: './ui-popup.component.html',
  styleUrl: './ui-popup.component.css'
})
export class UiPopupComponent {
  ngAfterViewInit() {
    const mapMarker = new Map('mapMarkerPopup').setView([0, 0], 15);
    tileLayer(tileLayers.baseLayers.osmManik.map, {
      maxZoom: 20,
      attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapMarker);
    const huacachinaImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Oasis_Huacachina_Per%C3%BA_-_camilogaleano%28.%29com.jpg/450px-Oasis_Huacachina_Per%C3%BA_-_camilogaleano%28.%29com.jpg"
    const plazaArmasIcaImg = "https://lh5.googleusercontent.com/p/AF1QipN-MEKBcjn7v_6hnnJly3v6FyIU8m_i0TCXhg-M=w408-h544-k-no"

    const aerodromoMarker = marker([-14.041547487288192, -75.75723657816827]).addTo(mapMarker);

    // Añade popup al hacer click en el elemento
    const huacachinaMarker = marker([-14.087086942399745, -75.76267664653732]).addTo(mapMarker).bindPopup(`
      <h4> Huacachina</h4>
      <p>La laguna de Huacachina (en quechua: huáccac cachi = ''la que llora sal'' o huáccacchine= ''hago llorar'')
      es un gran oasis de aguas sulfurosas ubicado a cinco kilómetros al oeste del departamento peruano Ica, 
      en medio del desierto costero del océano Pacífico.</p>
      <img src="${huacachinaImg}" alt="img"/>
      <hr>
      <a href="https://drive.google.com/file/d/1V3t5oURIfK960jYbnNMWLO7ozJl1U7_E/view" target="_blank" title="lalala">Vea más información</a> 
      `);

    // Añade tooltip cuando pasa el cursor sobre el elemento
    const plazaArmasIcaMaker = marker([-14.06397353654805, -75.72908825820468]).bindTooltip(`
      <h3> Plaza de Armas de Ica</h3>
      <img src="${plazaArmasIcaImg}" alt="img"/>
      <hr>
      <a href="https://drive.google.com/file/d/1V3t5oURIfK960jYbnNMWLO7ozJl1U7_E/view" target="_blank" title="lalala">Vea más información</a> 
      `, {
        opacity: 1,
        direction: "bottom",
        sticky: true,
      }).addTo(mapMarker);
    
    
    // Añade popup que se abre por defecto en el marcador
    const popupItem = popup().setLatLng([-14.041547487288192, -75.75723657816827])
    .setContent('<h4>Cerca al nuevo hogar</h4>')
    .openOn(mapMarker);
    
    // Centrar el mapa con fitbounds con marcadores
       
    mapMarker.fitBounds([
        [aerodromoMarker.getLatLng().lat, aerodromoMarker.getLatLng().lng],
        [huacachinaMarker.getLatLng().lat, huacachinaMarker.getLatLng().lng],
        [plazaArmasIcaMaker.getLatLng().lat, plazaArmasIcaMaker.getLatLng().lng],
      ])
   
  };
}
