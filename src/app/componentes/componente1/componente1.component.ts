import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {
   ejemplo1="Hola";
   ejemplo2="Hola2";
  constructor() { }

  ngOnInit(): void {
  }
  coso(){
    if(this.ejemplo2=="chau")
    {
      this.ejemplo2="Hola2"
    }else{
      this.ejemplo2="chau"
    }
  }
}
