import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public Usuario;
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
export class Usuario{
  public nombre;
  public clave;
}
