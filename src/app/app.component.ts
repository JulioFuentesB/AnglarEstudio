import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raiz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'MiPrimeraApp';
  saludo = 'Hola angular como esta?';

  ocultar= false;



  peliculasEnCine:
    | { titulo: string; fechaLanzamiento: Date; precio: number;poster: string; }[]
    | undefined;
  peliculasProximosEstrenos:
    | { titulo: string; fechaLanzamiento: Date; precio: number;poster: string; }[]
    | undefined;

  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCine = [
        {
          titulo: 'Spider-Man',
          fechaLanzamiento: new Date(),
          precio: 1490,
          poster:"https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UY720_.jpg"
        },
        {
          titulo: 'Moana',
          fechaLanzamiento: new Date('2016-11-14'),
          precio: 300,
          poster:"https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_.jpg"
        },
      ];
    }, 500);

    // peliculasEnCIne;
    this.peliculasProximosEstrenos = [];

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
  }

  manejarRate(voto: number): void {
    alert('voto : ' + voto);
  }
}

// export class AppComponent implements OnInit {
//   ngOnInit(): void {

//    this.peliculas = [{
//       titulo: 'Spider-Man',
//       fechaLanzamiento: new Date(),
//       precio: 1400.99
//     },
//     {
//       titulo: 'Moana',
//       fechaLanzamiento: new Date('2016-11-14'),
//       precio: 300.99
//     }]
//   }

//   peliculas: { titulo: string; fechaLanzamiento: Date; precio: number; }[] | undefined;

//   title = 'Al valor que yo quiera';
//   ocultar = false;
//   peliculasEnCines=[];

// }
