import {Component, OnInit} from '@angular/core';
import {Booking} from "../core/api/booking.interface";
import {Observable, Subscription} from "rxjs";
import {Trip} from "../core/api/trip.interface";
import {BookingsApi} from "../core/api/bookings.api";
import {ActivatedRoute} from "@angular/router";
import {TripsApi} from "../core/api/trips.api";

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss']
})
export class BookingsPage implements OnInit {


  public bookings$: Observable<Booking[]>;
  public trips$!: Observable<Trip[]>;

  constructor(
    private bookingsApi: BookingsApi,
    private tripsApi: TripsApi,
    private route: ActivatedRoute
  ) {
    console.log("hola booking page")
    this.bookings$ = this.bookingsApi.getAll$();
    this.trips$ = this.tripsApi.getAll$();
  }

  public onReload() {
    this.bookings$ = this.bookingsApi.getAll$();
  }

  ngOnInit(): void {
  }

}
