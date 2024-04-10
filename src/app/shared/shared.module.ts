import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReloadingComponent } from './components/reloading/reloading.component';
import { EmailControl } from './controls/email/email.control';
import { TemplateControl } from './controls/template/template.control';
import { SearchControl } from './controls/search/search.control';
import {AgenciesLista} from "./components/agencies/agencies.lista";
import {TripsLista} from "./components/trips/trips.lista";
import { BookingsLista } from './components/bookings/bookings.lista';

@NgModule({
  declarations: [ReloadingComponent, AgenciesLista, TripsLista, EmailControl, TemplateControl, SearchControl, BookingsLista],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    ReloadingComponent,
    AgenciesLista,
    TripsLista,
    EmailControl,
    TemplateControl,
    SearchControl,
    BookingsLista,
  ],
})
export class SharedModule {}
