import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:string;
  pag: string;
  keyword:string = "";
  pelicula:any = {};

  constructor(private router:Router, private activeRoute: ActivatedRoute, private peliculasServices:PeliculasService) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params['id'];
    this.pag = this.activeRoute.snapshot.params['pag'];
    if(this.activeRoute.snapshot.params['keyword']){
      this.keyword = this.activeRoute.snapshot.params['keyword']; 
    }
    this.peliculasServices.getMovie(this.id).subscribe((data:any) => {this.pelicula = data; console.log(this.pelicula)})
  }

  volver(){
    debugger;
    if(this.keyword != ""){
      this.router.navigateByUrl(`${this.pag}/${this.keyword}`);
    } else {
      this.router.navigateByUrl(this.pag);
    }
    
  }

}
