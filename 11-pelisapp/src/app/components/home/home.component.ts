import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  novedades:any[] = [];
  populares:any[] = [];
  infantiles:any[] = [];

  constructor(private peliculasService:PeliculasService) { }

  ngOnInit() {
    this.peliculasService.getPeliculasActuales().subscribe((data:any)=> this.novedades = data.results);
    this.peliculasService.getPopulares().subscribe((data:any) => { this.populares = data.results });
    this.peliculasService.getPopulares().subscribe((data:any) => { this.infantiles = data.results });
  }
}
