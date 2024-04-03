import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReloadingComponent } from './reloading/reloading.component';
import { AgenciesLista } from './components/agencies/agencies.lista';
import { TripsLista } from './components/trips/trips.lista';
import {Router, RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ReloadingComponent,
    AgenciesLista,
    TripsLista
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    ReloadingComponent,
    AgenciesLista,
    TripsLista
  ]
})
export class SharedModule { }
