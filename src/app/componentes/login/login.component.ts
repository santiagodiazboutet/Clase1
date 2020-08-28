import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user="";
  password="";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    if(this.user=="hola"&& this.password=="mundo"){
      this.router.navigate(['bienvenido']);
    }else{
      this.router.navigate(['error']);
    }
  }

}
