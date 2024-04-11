import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {TripsApi} from "../../core/api/trips.api";
import {Trip} from "../../core/api/trip.interface";
import {BookingsApi} from "../../core/api/bookings.api";
import {Booking} from "../../core/api/booking.interface";
import {IdNameApi} from "../../core/api/id-name.api";


@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.page.html',
  styleUrls: ['./new-booking.page.scss']
})
export class NewBookingPage implements OnInit {
  public trips$: Observable<Trip[]>;
  public premiumFood: string[];

  constructor(
    private _tripsApi: TripsApi,
    private _bookingsApi: BookingsApi,
    private _idNameApi: IdNameApi
  ) {
    this.trips$ = _tripsApi.getAll$();
    this.premiumFood = _idNameApi.getFood();
    console.log(this.premiumFood);
  }

  public onSave(newBooking: Partial<Booking>) {
    this._bookingsApi.post$(newBooking).subscribe();
  }

  ngOnInit(): void {
  }
}
