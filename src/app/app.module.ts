import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule}from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1Component } from './componentes/componente1/componente1.component';
import { LoginComponent } from './componentes/login/login.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { ErrorComponent } from './componentes/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    LoginComponent,
    CalculadoraComponent,
    BienvenidoComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
