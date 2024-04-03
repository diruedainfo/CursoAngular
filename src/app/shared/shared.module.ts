import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReloadingComponent } from './reloading/reloading.component';
import { AgenciesLista } from './components/agencies/agencies.lista';
import { TripsLista } from './components/trips/trips.lista';
import {Router, RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    ReloadingComponent,
    AgenciesLista,
    TripsLista
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    RouterModule,
    ReloadingComponent,
    AgenciesLista,
    TripsLista
  ]
})
export class SharedModule { }
