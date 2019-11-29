import { Component } from '@angular/core';
import { Configuration } from './models/configuracion';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Testing de Javascript y Angular';
  public mostrar_videojuegos:boolean =true;
  public descripcion="";
  public config;
  constructor(){
    this.title=Configuration.titulo;
    this.descripcion=Configuration.descripcion;
    this.config=Configuration;
  }
  ocultarVideojuegos(value){
  this.mostrar_videojuegos=value;
  }

}


