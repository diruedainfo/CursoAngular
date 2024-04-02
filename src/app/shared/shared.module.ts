import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReloadingComponent } from './reloading/reloading.component';
import { AgenciesLista } from './components/agencies/agencies.lista';
import { TripsLista } from './components/trips/trips.lista';



@NgModule({
  declarations: [
    ReloadingComponent,
    AgenciesLista,
    TripsLista
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReloadingComponent,
    AgenciesLista,
    TripsLista
  ]
})
export class SharedModule { }
