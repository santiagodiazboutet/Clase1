import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { ErrorComponent } from './componentes/error/error.component';
import { Componente1Component } from './componentes/componente1/componente1.component';
import { ListadoEntidadComponent } from './componentes/listado-entidad/listado-entidad.component';
import { ControlEntidadComponent } from './componentes/control-entidad/control-entidad.component';

const routes: Routes = [
  { path: '', component: Componente1Component},
  { path: 'login', component:LoginComponent},
  { path: 'calculadora', component:CalculadoraComponent},
  { path: 'bienvenido', component:BienvenidoComponent},
  { path: 'error', component:ErrorComponent},
  {path: 'paises/listado', component: ControlEntidadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
