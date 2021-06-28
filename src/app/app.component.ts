import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raiz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'MiPrimeraApp';
  saludo = 'Hola angular como esta?';

  peliculasEnCine:
    | { titulo: string; fechaLanzamiento: Date; precio: number }[]
    | undefined;
  peliculasProximosEstrenos:
    | { titulo: string; fechaLanzamiento: Date; precio: number }[]
    | undefined;

  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCine = [
        {
          titulo: 'Spider-Man',
          fechaLanzamiento: new Date(),
          precio: 1490,
        },
        {
          titulo: 'Moana',
          fechaLanzamiento: new Date('2016-11-14'),
          precio: 300,
        },
      ];
    }, 3000);

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

