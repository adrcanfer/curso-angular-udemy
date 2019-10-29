import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  
  hero:any = {};

  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService) { 
    this.activatedRoute.params.subscribe( params => {
      this.hero = _heroesService.getHeroByName(params['name']);
      console.log(this.hero);
    })
  }

  ngOnInit() {
  }

}
