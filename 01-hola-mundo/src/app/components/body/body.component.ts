import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  frase:any = {
    mensaje: "Un gran poder conlleva una gran responsabilidad",
    autor: "Ben Parker"
  };

  mostrado: boolean = false;
  
  personajes: string[] = ['Spiderman', 'Superman', 'Ironman']

  mostrar(){
    this.mostrado = !this.mostrado
  }
}
