import { Component, OnInit } from '@angular/core';
import {Booking} from "../../core/api/booking.interface";
import {ActivatedRoute} from "@angular/router";
import {BookingsApi} from "../../core/api/bookings.api";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss']
})
export class BookingPage implements OnInit {
  public bookingId = '';
  public booking?: Booking;
  constructor(
    private route: ActivatedRoute,
    private bookingsApi: BookingsApi) { }

  ngOnInit(): void {
    this.bookingId = this.route.snapshot.paramMap.get('id') || '';
    this.bookingsApi.getById$(this.bookingId).subscribe((booking) => (this.booking = booking));
  }

}
