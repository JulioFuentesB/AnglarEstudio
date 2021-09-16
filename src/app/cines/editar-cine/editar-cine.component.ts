import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css'],
})
export class EditarCineComponent implements OnInit {
  constructor(private rutaActivada: ActivatedRoute) {}

  modelo: cineDTO = {
    nombre: 'Sambil',
    latitud: 5.576293252445086,
    longitud: -432.9653549279951,
  };

  ngOnInit(): void {
    //para enrutar con parametros
    this.rutaActivada.params.subscribe((params) => {
      // alert(params.id);
    });
  }

  guardarCambios(cine: cineCreacionDTO) {
    console.log(cine);
  }
}
