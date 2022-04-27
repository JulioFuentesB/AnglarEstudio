import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { cineCreacionDTO } from '../cine';
import { CinesService } from '../cines.service';

@Component({
  selector: 'app-crear-cine',
  templateUrl: './crear-cine.component.html',
  styleUrls: ['./crear-cine.component.css']
})
export class CrearCineComponent implements OnInit {

  constructor(private roter: Router, private cinesServices: CinesService) {}

  errores:string[] =[];
  ngOnInit(): void {
  }



  guardarCambios(cine:cineCreacionDTO) {
    console.log(cine);
    this.cinesServices.crear(cine).subscribe(
      () => {
        this.roter.navigate(['/cines']);
      },
      //(error) => console.log(genero)
      (error) => this.errores=parsearErroresAPI(error)
    );
  }


}
