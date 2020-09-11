import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";
import { mihttpclientService} from '../../servicios/mihttpclient.service'
import {  Personas} from "../../clases/personas";
@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.css']
})
export class ListadoEntidadComponent implements OnInit {
  @Input() cosas:Array<Personas>;
  constructor(private httpservice:mihttpclientService) {
  }

  ngOnInit(): void {



  }



}

