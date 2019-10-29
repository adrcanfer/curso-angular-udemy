import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey: string = "dba3fe282734f12f8035cfc3b262ecac";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  peliculas:any[]=[]

  constructor(private http:HttpClient) { }

  getPeliculasActuales(){
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);
    let desdeStr = `${desde.getFullYear()}-${desde.getMonth()+1}-${desde.getDate()}`;
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth()+1}-${hasta.getDate()}`;

    let url = `${this.urlMoviedb}/discover/movie?api_key=${this.apiKey}&language=es-ES&primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}`
    return this.http.get(url);
  }

  getPopulares(){
    let url = `${this.urlMoviedb}/discover/movie?api_key=${this.apiKey}&language=es-ES&sort_by=popularity.desc`
    return this.http.get(url);
  }

  getInfantiles(){
    let url = `${this.urlMoviedb}/discover/movie?api_key=${this.apiKey}&language=es-ES&sort_by=popularity.desc`
    return this.http.get(url);
  }

  getMovie(id:string){
    let url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apiKey}&language=es-ES`

    return this.http.get(url);
  }


  buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es`;

    return this.http.get(url);
  }
}
