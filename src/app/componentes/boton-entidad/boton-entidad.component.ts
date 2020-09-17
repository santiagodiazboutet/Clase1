import { keyframes } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Personas } from 'src/app/clases/personas';

@Component({
  selector: 'app-boton-entidad',
  templateUrl: './boton-entidad.component.html',
  styleUrls: ['./boton-entidad.component.css']
})
export class BotonEntidadComponent implements OnInit {
  @Input() persona:Personas;
  @Input() cosas:Array<Personas>;
  @Input() borrado:Array<Personas>;
  constructor() { }

  ngOnInit() {
  }

  Borrar(){
    let index:number;
    this.cosas.forEach((val,key) => {

      if(this.persona.id==val.id){
        console.log(key);
        index=key;
      }
    });
    console.log(index);
    if(index){
      this.cosas.splice(index,1);
      this.borrado.push(this.persona);
    }

  }


}
