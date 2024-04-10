import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewBookingRoutingModule } from './new-booking-routing.module';
import { NewBookingComponent } from './new-booking.component';
import { NewBookingPage } from './new-booking.page';
import { NewBookingForm } from './new-booking.form';


@NgModule({
  declarations: [
    NewBookingComponent,
    NewBookingPage,
    NewBookingForm
  ],
  imports: [
    CommonModule,
    NewBookingRoutingModule
  ]
})
export class NewBookingModule { }
