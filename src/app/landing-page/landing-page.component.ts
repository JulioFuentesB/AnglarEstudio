import { Component, OnInit } from '@angular/core';
import { PeliculaDTO } from '../peliculas/pelicula';
import { PeliculasService } from '../peliculas/peliculas.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  // peliculasEnCine:
  //   | {
  //       titulo: string;
  //       fechaLanzamiento: Date;
  //       precio: number;
  //       poster: string;
  //     }[]
  //   | undefined;
  // peliculasProximosEstrenos:
  //   | {
  //       titulo: string;
  //       fechaLanzamiento: Date;
  //       precio: number;
  //       poster: string;
  //     }[]
  //   | undefined;

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.peliculasEnCine = [
    //     {
    //       titulo: 'Spider-Man',
    //       fechaLanzamiento: new Date(),
    //       precio: 1490,
    //       poster:
    //         'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UY720_.jpg',
    //     },
    //     {
    //       titulo: 'Moana',
    //       fechaLanzamiento: new Date('2016-11-14'),
    //       precio: 300,
    //       poster:
    //         'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_.jpg',
    //     },
    //   ];
    // }, 500);

    // peliculasEnCIne;
    //this.peliculasProximosEstrenos = [];

    // this.peliculasProximosEstrenos = [{
    //   titulo: 'Spider-Man',
    //   fechaLanzamiento: new Date(),
    //   precio: 1490

    // },
    // {
    //   titulo: 'Moana',
    //   fechaLanzamiento: new Date('2016-11-14'),
    //   precio: 300

    // },
    // {
    //   titulo: 'Piter pan',
    //   fechaLanzamiento: new Date('2016-11-14'),
    //   precio: 300

    // },
    // {
    //   titulo: 'Piter pan2',
    //   fechaLanzamiento: new Date('2016-11-14'),
    //   precio: 300

    // },
    // {
    //   titulo: 'Piter pan3',
    //   fechaLanzamiento: new Date('2016-11-14'),
    //   precio: 300

    // }];

    this.peliculasService.obtenerLandingPage().subscribe((landing) => {
      debugger;
      this.peliculasEnCine = landing.enCines;
      this.peliculasProximosEstrenos = landing.proximosEstrenos;
    });
  }
  peliculasEnCine: PeliculaDTO | any;
  peliculasProximosEstrenos: PeliculaDTO | any;
}
