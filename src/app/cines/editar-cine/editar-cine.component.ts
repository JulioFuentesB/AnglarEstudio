import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { cineCreacionDTO, cineDTO } from '../cine';
import { CinesService } from '../cines.service';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css'],
})
export class EditarCineComponent implements OnInit {
  // constructor(private rutaActivada: ActivatedRoute) {}

  // modelo: cineDTO = {
  //   nombre: 'Sambil',
  //   latitud: 5.576293252445086,
  //   longitud: -432.9653549279951,
  // };


  constructor(
    private rutaActivada: ActivatedRoute,
    private router: Router,
    private cinesService: CinesService
  ) {}

  //modelo: cineCreacionDTO = {nombre: 'Drama'};

  modelo: cineDTO | any;
  errores: string[] = [];

  // ngOnInit(): void {
  //   //para enrutar con parametros
  //   this.rutaActivada.params.subscribe((params) => {
  //     // alert(params.id);
  //   });
  // }

  ngOnInit(): void {
    this.rutaActivada.params.subscribe((params) => {
      this.cinesService.obtenerPorId(params.id).subscribe(
        (cine) => {
          this.modelo = cine;
        },
        () => this.router.navigate(['/cines'])
      );
    });
  }

  // guardarCambios(cine: cineCreacionDTO) {
  //   console.log(cine);
  // }

  guardarCambios(cine: cineCreacionDTO) {
    this.cinesService.editar(this.modelo.id, cine).subscribe(
      () => {
        this.router.navigate(['/cines']);
      },
      (error) => (this.errores = parsearErroresAPI(error))
    );
    //error => console.error(error))
  }
}
