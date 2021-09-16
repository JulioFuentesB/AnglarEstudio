import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { latLng, LeafletMouseEvent, Marker, tileLayer, marker } from 'leaflet';
import { Coordenada } from './coordenada';
//import { Coordenada } from './coordenada';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements OnInit {
  constructor() {}

  @Input()
  coordenadaIniciales: Coordenada[] = [];

  @Output()
  coordenadaSeleccionada: EventEmitter<Coordenada> = new EventEmitter<Coordenada>();

  ngOnInit(): void {
    //esta mapeando cada una de las cordenadas, a un arreglo de marcadores y colocarlo en capas
    this.capas = this.coordenadaIniciales.map((valor) =>
      marker([valor.latitud, valor.longitud])
    );
  }
  //opciones iniciales para cargar leaftlet mapa open source
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...',
      }),
    ],
    zoom: 14,
    center: latLng(5.619299929115677, -432.92577743267475),
  };

  capas: Marker<any>[] = [];

  manejarClick(event: LeafletMouseEvent) {
    const latitud = event.latlng.lat;
    const longitud = event.latlng.lng;
    console.log({ latitud, longitud });

    this.capas = [];
    this.capas.push(marker([latitud, longitud]));

    //emite las cordenadas seleccionadas
    this.coordenadaSeleccionada.emit({ latitud: latitud, longitud: longitud });
  }
}
