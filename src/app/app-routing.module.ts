import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{HomeComponent} from "./components/home/home.component";
import{AboutComponent} from "./components/about/about.component";
import{Punto1Component} from "./components/punto1/punto1.component";
import{Punto2Component} from "./components/punto2/punto2.component";
import { Punto3Component } from './components/punto3/punto3.component';
import { Punto4Component } from './components/punto4/punto4.component';
import { PuntosInteresComponent } from './components/puntos-interes/puntos-interes.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { NbaComponent } from './components/nba/nba.component';
import { RegistroComponent } from './components/registro/registro.component';
import { SliderComponent } from './components/slider/slider.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'slider', component: SliderComponent},
  {path: 'punto1', component: Punto1Component},
  {path: 'punto2', component: Punto2Component},
  {path: 'punto3', component: Punto3Component},
  {path: 'punto4', component: Punto4Component},
  {path: 'datatable', component: DataTableComponent},
  {path: 'puntointeres', component: PuntosInteresComponent},
  {path: 'nba', component: NbaComponent},

  {path: '**', pathMatch: 'full' , redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
