import { Component, OnInit } from '@angular/core';
import { PeliculaCreacionDTO } from 'src/app/peliculas/pelicula';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css'],
})
export class CrearPeliculaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  guardarCmabios(pelicula: PeliculaCreacionDTO) {
    console.log(pelicula);
  }
}
