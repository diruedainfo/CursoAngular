import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings.component';

const routes: Routes = [{ path: '', component: BookingsComponent }, { path: 'booking/:id', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) }, { path: 'booking/new', loadChildren: () => import('./new-booking/new-booking.module').then(m => m.NewBookingModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
