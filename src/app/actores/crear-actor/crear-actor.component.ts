import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { actorCreacionDTO } from '../actor';
import { ActoresService } from '../actores.service';

@Component({
  selector: 'app-crear-actor',
  templateUrl: './crear-actor.component.html',
  styleUrls: ['./crear-actor.component.css'],
})
export class CrearActorComponent implements OnInit {
  constructor(
    private actoresServices: ActoresService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  errores: string[] = [];

  guardarCambios(actor: actorCreacionDTO) {

    debugger;
    console.log("crear actor guardar cambios");
    this.actoresServices.crear(actor).subscribe(
      () => {
        this.router.navigate(['/actores']);
      },
      (error) => (this.errores = parsearErroresAPI(error))
    );
    console.log(actor);
  }
}
