import { Input, OnDestroy, SimpleChanges } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { DoCheck } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css'],
})
export class CicloDeVidaComponent
  implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit
{
  // noes evento de ciclo de vida ,sse usa para inyectar servicio
  constructor() {}


@Input()
titulo: string | undefined

  ngOnChanges(_changes: SimpleChanges): void {
    console.log('on changes');
  }
  ngOnDestroy(): void {
    console.log('on destrpy');
  }
  ngDoCheck(): void {
    console.log('on do check');
  }
  ngAfterViewInit(): void {
    console.log('on  affter view');
  }

  ngOnInit(): void {
    console.log('on init');
  }
}
