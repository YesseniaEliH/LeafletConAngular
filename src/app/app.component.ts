import { Component } from '@angular/core';
import { Map, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-leaflet';

  ngAfterViewInit() {
    const map = new Map('map').setView([-14.041015, -75.757245], 15);
    
    tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    marker([-14.041015, -75.757245]).addTo(map);
    // const markerItem = marker([-14.041015, -75.757245]).addTo(map);
    // map.fitBounds([
    //     [markerItem.getLatLng().lat, markerItem.getLatLng().lng]
    //   ])

  };
}
