import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{
  anyo:number;

  constructor(){
    this.anyo = new Date().getFullYear()
  }
}
