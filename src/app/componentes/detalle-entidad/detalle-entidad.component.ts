import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personas } from 'src/app/clases/personas';

@Component({
  selector: 'app-detalle-entidad',
  templateUrl: './detalle-entidad.component.html',
  styleUrls: ['./detalle-entidad.component.css']
})
export class DetalleEntidadComponent implements OnInit {
  @Input() persona:Personas;
  @Input() cosas:Array<Personas>;
  @Input() borrado:Array<Personas>;
  constructor() { }

  ngOnInit(): void {
  }
}
