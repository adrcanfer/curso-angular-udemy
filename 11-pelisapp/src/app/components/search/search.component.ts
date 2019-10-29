import { Component, OnInit } from '@angular/core';
import { inflate } from 'zlib';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  peliculas:any[] = []
  keyword:string ="";

  constructor(private peliculasService: PeliculasService, private route:ActivatedRoute) { }

  ngOnInit() {  
    if(this.route.snapshot.params['keyword']){
      this.keyword = this.route.snapshot.params['keyword'];
    }
    if(this.keyword != ""){
      this.buscarPelicula(this.keyword);
    }
  }

  buscarPelicula(keyword:string){
    if(keyword.length == 0){ return; }
    this.peliculasService.buscarPelicula(keyword).subscribe((data:any) => this.peliculas = data.results)
    this.keyword = keyword;
  }

}
