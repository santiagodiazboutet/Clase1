import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personas } from 'src/app/clases/personas';
import { mihttpclientService } from 'src/app/servicios/mihttpclient.service';


@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.css']
})
export class ControlEntidadComponent implements OnInit {
  cosas:Array<Personas>;
  @Input() personaSelecc:Personas;
  @Output() usuarioSeleccionado: EventEmitter<any> = new EventEmitter<any>();
  listadoborrados:Array<Personas>=new Array<Personas>();

  constructor(private httpservice:mihttpclientService) {
  }

  ngOnInit(): void {


    this.httpservice.obtenerPaises("https://api.mocki.io/v1/570c5e5c").subscribe((paises: any) => {
      console.log(paises);
      console.log('console log dentro del observable');
      this.cosas = paises;
    }, error => {
      console.log('Error');

    });
    this.usuarioSeleccionado.emit(this.cosas);
    console.log('console log despues del observable');


  }


  personaSeleccionada(persona:Personas){
    console.log(persona);
    this.personaSelecc=persona;
  }

}
