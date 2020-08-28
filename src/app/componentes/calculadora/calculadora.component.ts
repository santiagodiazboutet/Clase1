import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  numero1=0;
  numero2=0;
  promedio=0;
  suma=0;
  constructor() { }

  ngOnInit(): void {
  }

  calcularPromedio(){
    this.promedio=(this.numero1+this.numero2)/2;
    this.suma=this.numero1+this.numero2;
  }
  limpiarCuadro(){
    this.promedio=0;
    this.suma=0;
  }
}
