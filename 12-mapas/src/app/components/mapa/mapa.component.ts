import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/clases/marcador.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  lat = 51.678418;
  lng = 7.809007;
  marcadores: Marcador[] = [];

  constructor(private snackBar:MatSnackBar, public dialog: MatDialog) { 
    if(localStorage.getItem('marcadores')){
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'))
    }
  }

  ngOnInit() {
  }

  editarMarcador(marcador:Marcador):void {
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width:'250px',
      data: {titulo:marcador.titulo, desc: marcador.desc}
    })

    dialogRef.afterClosed().subscribe(res =>{
      if(!res){return;}
      marcador.titulo = res.titulo;
      marcador.desc = res.desc;
      this.guardarStorage();
      this.snackBar.open("Marcador actualizado", "Cerrar", {duration:3000});

    })
  }

  agregarMarcador(evento){
    console.log(evento)
    this.marcadores.push(new Marcador(evento.coords.lat, evento.coords.lng))
    this.guardarStorage();
    this.snackBar.open("Marcador añadido", "Cerrar", {duration:3000});
  }

  guardarStorage(){
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores))
  }

  borrarMarcador(i:number){
    this.marcadores.splice(i,1);
    this.guardarStorage();
    this.snackBar.open("Marcador borrado", "Cerrar", {duration:3000});

  }

}
