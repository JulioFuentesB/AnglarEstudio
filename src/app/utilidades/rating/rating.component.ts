import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SeguridadService } from 'src/app/seguridad/seguridad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Input()
  maximoRating = 5;

  @Input() //pasar por parametro al decorador un valor
  ratingSeleccionado = 0;

  @Output() //pasar un evento por el decorador
  rated: EventEmitter<number> = new EventEmitter<number>();

  //maximoRatingArr = [];
  maximoRatingArr: string[] = [];
  votado = false;
  ratingAnterior = 0;

  constructor(private seguridadService: SeguridadService) {}

  ngOnInit(): void {
    this.maximoRatingArr = Array(this.maximoRating).fill(0);
  }

  manejarMouseEnter(index: number): void {
    this.ratingSeleccionado = index + 1;
  }

  manejarMauseLeave() {
    if (this.ratingAnterior !== 0) {
      this.ratingSeleccionado = this.ratingAnterior;
    } else {
      this.ratingSeleccionado = 0;
    }
  }

  rate(index: number): void {
    if (this.seguridadService.estaLogueado()) {
      /*disparando un evento y emitiendo el valor atravez del evento*/
      this.ratingSeleccionado = index + 1;
      this.votado = true;
      this.ratingAnterior = this.ratingSeleccionado;
      this.rated.emit(this.ratingSeleccionado);
    } else {
      Swal.fire('Debe Loguearse', 'No puede realizar esta accion', 'error');
    }
  }
}
