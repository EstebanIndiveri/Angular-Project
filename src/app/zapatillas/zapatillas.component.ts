import { Component,OnInit } from '@angular/core';
import { Zapatilla } from "../models/zapatilla";
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { ZapatillaService } from "../../service/zapatilla.service";
@Component({
    selector:'zapatillas',
    templateUrl:'./zapatillas.component.html',
    styleUrls: ['./zapatillas.component.css'],
    providers:[ZapatillaService]
})

export class ZapatillasComponent implements OnInit{
    public titulo:string="Componente de zapatilla";
    public zapatillas:Array<Zapatilla>;
    public marcas:string[];
    public color:string;
    public mi_marca:string;
    
    constructor(
        private _zapatillaService: ZapatillaService
    ){
        this.mi_marca="file";
        this.color='yellow';
        this.marcas=new Array();
        
    }
    ngOnInit(){
		this.zapatillas = this._zapatillaService.getZapatillas();
		//alert(this._zapatillaService.getTexto());
       // alert(this._zapatillaService.getTexto());
		this.getMarcas();
	}
    getMarcas(){
        this.zapatillas.forEach((zapatilla,index)=>{
            if(this.marcas.indexOf(zapatilla.marca)<0){
                this.marcas.push(zapatilla.marca);
            }
           
        });
        console.log(this.marcas);
    }
    getMarca(){
        alert(this.mi_marca);
    }
    addMarca(){
        this.marcas.push(this.mi_marca);
    }
    borrarMarca(index){
        this.marcas.splice(index,1);
    }
    onBlur(){
        console.log("has salido del imput");
    }
    mostrarPalabra(){
        alert(this.mi_marca); 
    }
}
