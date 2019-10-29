import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {
  
  @Input() hero: any = {};
  @Input() name:string;

  constructor() { }

  ngOnInit() {
  }

}
