import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { actorCreacionDTO, actorDTO } from '../actor';
import { ActoresService } from '../actores.service';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  //constructor(private rutaActivada:ActivatedRoute) { }

  //modelo:actorDTO ={nombre:'Julio',fechaNacimiento: new Date(), foto: 'https://m.media-amazon.com/images/M/MV5BNTAzMzA3NjQwOF5BMl5BanBnXkFtZTgwMDUzODQ5MTI@._V1_UY317_CR23,0,214,317_AL_.jpg',biografia:''}
  // modelo:actorDTO;

  // ngOnInit(): void {

  //   this.rutaActivada.params.subscribe(params => {
  //    // alert(params.id);
  //   })
  // }

  // guardarCambios(actor:actorCreacionDTO)
  // {
  //   console.log(actor);
  // }


  constructor(
    private rutaActivada: ActivatedRoute,
    private router: Router,
    private actoresService: ActoresService
  ) {}

  //modelo: generoCreacionDTO = {nombre: 'Drama'};

  modelo: actorDTO | any;
  errores: string[] = [];

  // ngOnInit(): void {

  //   this.rutaActivada.params.subscribe(params => {
  //    // alert(params.id);
  //   })
  // }

  ngOnInit(): void {
    this.rutaActivada.params.subscribe((params) => {
      this.actoresService.obtenerPorId(params.id).subscribe(
        (actor) => {
          this.modelo = actor;
        },
        () => this.router.navigate(['/actores'])
      );
    });
  }

  guardarCambios(actor: actorCreacionDTO) {
    this.actoresService.editar(this.modelo.id, actor).subscribe(
      () => {
        this.router.navigate(['/actores']);
      },
      (error) => (this.errores = parsearErroresAPI(error))
    );
    //error => console.error(error))
    console.log(actor);
  }



}
