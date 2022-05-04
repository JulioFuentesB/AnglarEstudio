import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CoordenadaConMensaje } from 'src/app/utilidades/mapa/coordenada';
import { PeliculaDTO } from '../pelicula';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-detall-pelicula',
  templateUrl: './detall-pelicula.component.html',
  styleUrls: ['./detall-pelicula.component.css'],
})
export class DetallPeliculaComponent implements OnInit {
  constructor(
    private peliculasService: PeliculasService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  pelicula: PeliculaDTO | any;
  fechaLanzamiento: Date | any;
  trailerURL: SafeResourceUrl | any; //url segura, mecanismo de seguridad
  coordenadas: CoordenadaConMensaje[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.peliculasService.obtenerPorId(params.id).subscribe((pelicula) => {
        console.log(pelicula);
        this.pelicula = pelicula;
        this.fechaLanzamiento = new Date(pelicula.fechaLanzamiento);
        this.trailerURL = this.generarURLYoutubeEmbed(this.pelicula.trailer);
        this.coordenadas = pelicula.cines.map((cine) => {
          return {
            longitud: cine.longitud,
            latitud: cine.latitud,
            mensaje: cine.nombre,
          };
        });
      });
    });
  }

  generarURLYoutubeEmbed(url: any): SafeResourceUrl {
    if (!url) {
      return '';
    }

    var video_id = url.split('v=')[1];
    var posicionAmpersand = video_id.indexOf('&');
    if (posicionAmpersand !== -1) {
      video_id = video_id.substring(0, posicionAmpersand);
    }
    //sanitizador que no haya nada malicioso, en la url
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${video_id}`
    );
  }
}
