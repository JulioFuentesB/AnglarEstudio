import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { RatingComponent } from '../utilidades/rating/rating.component';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css'],
})
export class CicloDeVidaComponent
  implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit
{
  // noes evento de ciclo de vida ,sse usa para inyectar servicio
  //disparar el detector de cambios,inyectar el primer servicio
  constructor(private changeDetecxtorRef: ChangeDetectorRef) {}

  @Input()
  titulo: string | undefined;

  /*esta capturando en la variable, la instancia de app rating  */
  /*esta capturando en la variable, la instancia de app rating  */

  @ViewChild(RatingComponent)
  ratingComponent!: RatingComponent;

  timer!: ReturnType<typeof setInterval>;

  //CicloDeVidaComponent: any.ratingComponent: RatingComponent | undefined

  ngOnChanges(_changes: SimpleChanges): void {
    console.log('on changes');
  }

  //permite limpiar ciertos recursos del componente
  ngOnDestroy(): void {
    console.log('on destrpy');

    //limpiar recursos del timer,
    //sis se muestra el componente vuelve a ejecutar el timer y si se oculta  ya no lo muestra para el timer, evitar memori list o fugas de memoria
    clearInterval(this.timer);
  }
  ngDoCheck(): void {
    console.log('on do check');
  }
  ngAfterViewInit(): void {
    console.log('on  affter view');
    this.ratingComponent.ratingSeleccionado = 3;
    this.changeDetecxtorRef.detectChanges();
  }

  ngOnInit(): void {
    console.log('on init');

    this.timer = setInterval(() => console.log(new Date()), 1000);
  }
}
