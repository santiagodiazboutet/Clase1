import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { Usuario } from "../../clases/usuario";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public Usuario:Usuario;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    if(this.Usuario.nombre=="hola"&& this.Usuario.clave=="mundo"){
      this.router.navigate(['bienvenido']);
    }else{
      this.router.navigate(['error']);
    }
  }

}
