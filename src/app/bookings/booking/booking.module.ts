import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { BookingPage } from './booking.page';
import { BookingView } from './booking.view';


@NgModule({
  declarations: [
    BookingComponent,
    BookingPage,
    BookingView
  ],
  imports: [
    CommonModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
