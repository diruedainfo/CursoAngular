import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Booking} from "../../../core/api/booking.interface";

@Component({
  selector: 'app-bookings-lista',
  templateUrl: './bookings.lista.html',
  styleUrls: ['./bookings.lista.scss']
})
export class BookingsLista implements OnInit {
  public reloading = false;

  @Input()
  public bookings : Booking[] = [];

  @Output()
  private reload = new EventEmitter();
  public getBookingsLength() {
    return this.bookings.length;
  }

  public onReloadClick(list:string) {
    this.reloading = true;
    console.log('Reloading...' + list);

    this.reload.emit();
  }
  ngOnInit(): void {
  }

}
