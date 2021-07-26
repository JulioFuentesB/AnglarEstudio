import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raiz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  title = 'MiPrimeraApp';
  saludo = 'Hola angular como esta?';

  ocultar= false;







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
