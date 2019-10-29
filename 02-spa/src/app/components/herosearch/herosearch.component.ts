import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router' ;
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-herosearch',
  templateUrl: './herosearch.component.html',
  styleUrls: ['./herosearch.component.css']
})
export class HerosearchComponent implements OnInit {
  
  keyword:string;
  heroes:any[];

  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService) {
  }
  
  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.keyword = params['keyword']
      this.heroes = this._heroesService.findHeroes(this.keyword);
    })
  }

}
