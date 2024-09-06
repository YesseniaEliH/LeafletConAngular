import { Component } from '@angular/core';
import { Draggable, Map, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-ui-events',
  templateUrl: './ui-events.component.html',
  styleUrl: './ui-events.component.css'
})
export class UiEventsComponent {
  ngAfterViewInit() {
    // Añade eventos dragging
    const mapMarkerDrag = new Map('mapMarkerDrag').setView([-14.041547487288192, -75.75723657816827], 15);
    tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapMarkerDrag);
    const aerodromoMarker = marker([-14.041547487288192, -75.75723657816827], {
      draggable: true,
    }).addTo(mapMarkerDrag);

    aerodromoMarker.on("movestart", () => console.log("Movestart - Empezamos a mover"));
    aerodromoMarker.on("dragstart", () => console.log("Dragstart - Empezamos a arrastrar"));
    aerodromoMarker.on("move", () => console.log("Move - Estamos moviendo"));
    aerodromoMarker.on("drag", () => console.log("Drag - Estamos arrastrando"));
    aerodromoMarker.on("moveend", () => console.log("Moveend - Finalizamos mover"));
    aerodromoMarker.on("dragend", () => console.log("Dragend - Empezamos a arrastrar"));

    // Añade eventos mouse
    const mapMarkerMouse = new Map('mapMarkerMouse').setView([-14.041547487288192, -75.75723657816827], 15);
    tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapMarkerMouse);
    const aeroMarker = marker([-14.041547487288192, -75.75723657816827], {
      draggable: true,
    }).addTo(mapMarkerMouse);

    aeroMarker.on("click", () => console.log("click"));
    aeroMarker.on("dblclick", () => console.log("dobleclick"));
    aeroMarker.on("mousedown", () => console.log("Haciendo click - mousedown"));
    aeroMarker.on("mouseup", () => console.log("Dejando de hacer click - mouseup"));
    aeroMarker.on("mouseover", () => console.log("mouseover - Estamos sobre el marcador"));
    aeroMarker.on("mouseout", () => console.log("mouseout - No estamos sobre el marcador"));
    aeroMarker.on("contextmenu", () => console.log("contextmenu - Click derecho del ratón"));
  
    // Eliminar un marcador manual
    const options = {
      draggable: true,
    };
    const huacachinaMarker = marker([-14.087086942399745, -75.76267664653732], options).addTo(mapMarkerMouse);
    const plazaArmasIcaMaker = marker([-14.06397353654805, -75.72908825820468], options).addTo(mapMarkerMouse);
    // Centrar el mapa con fitbounds con marcadores
    mapMarkerMouse.fitBounds([
      [huacachinaMarker.getLatLng().lat, huacachinaMarker.getLatLng().lng],
      [plazaArmasIcaMaker.getLatLng().lat, plazaArmasIcaMaker.getLatLng().lng],
    ])

    huacachinaMarker.on('move', () => {
      console.log("Marcador Huacachina eliminado")
      mapMarkerMouse.removeLayer(huacachinaMarker)
    })

    plazaArmasIcaMaker.on('move', () => {
      console.log("Marcador Plaza de Armas eliminado")
      mapMarkerMouse.removeLayer(plazaArmasIcaMaker)
    })

    // Eliminar marcador dinámico
    // drinkWaterSoraluze.map((point) => {
    //   const markerItem = marker([point.lat, point.lon], options).addTo(myMap);
    //   markerItem.on("move", () => {
    //     console.log(`Marcador de la posición (${point.name}) => ${point.lat} / ${point.lon} Eliminado!!!`)
            // myMap.removeLayer(markerItem)
    //   })

    // })
  }
}
