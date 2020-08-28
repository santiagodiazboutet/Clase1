import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { ErrorComponent } from './componentes/error/error.component';
import { Componente1Component } from './componentes/componente1/componente1.component';

const routes: Routes = [
  { path: '', component: Componente1Component},
  { path: 'login', component:LoginComponent},
  { path: 'calculadora', component:CalculadoraComponent},
  { path: 'bienvenido', component:BienvenidoComponent},
  { path: 'error', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
