import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {

  @Input() pelicula:any;
  @Input() url:string
  @Input() keyword?:string;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  detallesPelicula(id:string){
    if(typeof(this.keyword) == "undefined"){
      this.router.navigate(['/details', id, this.url]);
    } else {
      this.router.navigate(['/details', id, this.url, this.keyword]);
    }
  }

}
