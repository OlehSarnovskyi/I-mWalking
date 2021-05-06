import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {circle, icon, latLng, LeafletEvent, MapOptions, Marker, marker, polygon, tileLayer} from "leaflet";

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapPageComponent implements OnInit {

  options: MapOptions = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 13,
    center: latLng(49.85551624866252, 23.993590210808815)
  }

  layersControl = {
    baseLayers: {
      'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
      'Open Cycle Map': tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    },
    overlays: {
      'Big Circle': circle([ 46.95, -122 ], { radius: 5000 }),
      'Big Square': polygon([[ 46.8, -121.55 ], [ 46.9, -121.55 ], [ 46.9, -121.7 ], [ 46.8, -121.7 ]])
    }
  }

  layers = [
    circle([ 46.95, -122 ], { radius: 5000 }),
    polygon([[ 46.8, -121.85 ], [ 46.92, -121.92 ], [ 46.87, -121.8 ]]),
    marker([ 46.879966, -121.726909 ])
  ];

  map
  leafletCenter: any

  constructor() { }

  ngOnInit(): void {
  }

  moved($event: LeafletEvent) {
    console.log(this.leafletCenter);
  }

  setGeoLocation(position: { coords: { latitude: any; longitude: any } }) {
    const {
      coords: { latitude, longitude },
    } = position;

    const map = this.map.map('map').setView([latitude, longitude], 3);

    this.map.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>contributors'
    } ).addTo(map);
  }

  onMapReady($event) {
    this.map = $event;
    this.addSampleMarkerWithCurrentPosition()
  }

  private addSampleMarkerWithCurrentPosition() {
    let watchID = navigator.geolocation.watchPosition(event => {
      // 49.850889502366555, 24.021150749323788
        const marker = new Marker([event.coords.latitude, event.coords.longitude])
        .setIcon(
          icon({
            iconSize: [25, 41],
            iconAnchor: [13, 41],
            iconUrl: 'https://img.icons8.com/officel/2x/person-male.png'
          }));
      marker.addTo(this.map);
    });
    // TODO navigator.geolocation.clearWatch should be implemented
  }
}
