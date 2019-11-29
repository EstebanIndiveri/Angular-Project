import { Component,OnInit,DoCheck, OnDestroy } from "@angular/core";
import { componentFactoryName } from '@angular/compiler';

@Component({
    selector: 'videojuego',
    templateUrl:'./videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo:string;
    public listado:string;

    constructor(){
        this.titulo="Componente de videojuegos";

        this.listado="Listado de los juegos mas populares";

        //console.log("Se ha cargado videojuegos");
    }
    ngOnInit(){
        //console.log("OnInit ejecutado");
    }

    ngDoCheck(){
        //console.log("Docheck ejecutado");
    }
    ngOnDestroy(){
        //console.log("Ondestroy ejecutado")
    }
    cambiarTitulo(){
        this.titulo="Nuevo titulo del componente"
    }
}
