import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsPage } from './bookings.page';
import {AuthenticatedGuard} from "../auth/api/authenticated.guard";

const routes: Routes = [
  { path: '',
    component: BookingsPage },
  {
    path: 'booking/new',
    canLoad: [AuthenticatedGuard],
    loadChildren: () =>
      import('./new-booking/new-booking.module').then((m) => m.NewBookingModule)
  },
  {
    path: 'booking/:id',
    loadChildren: () => import('./booking/booking.module').then((m) => m.BookingModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
