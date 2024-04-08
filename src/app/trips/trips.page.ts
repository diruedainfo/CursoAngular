import { Component, OnInit } from '@angular/core';
import {TripsApi} from "../core/api/trips.api";
import {Trip} from "../core/api/trip.interface";

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss']
})
export class TripsPage implements OnInit {
  public trips!: Trip[];
  constructor(
    private tripsApi: TripsApi
  ) {
    this.trips = tripsApi.getAll();
  }

  onReload() {
    this.trips = this.tripsApi.getAll();
  }

  ngOnInit(): void {
  }

}
