import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Trip} from "../../core/api/trip.interface";
import {TripsApi} from "../../core/api/trips.api";

@Component({
  selector: 'app-trip',
  templateUrl: './trip.page.html',
  styleUrls: ['./trip.page.scss']
})
export class TripPage implements OnInit {

  public tripId: string;
  public trip?: Trip;
  constructor(route:ActivatedRoute, tripsApi: TripsApi) {
    this.tripId = route.snapshot.paramMap.get('id') || '';
    this.trip = tripsApi.getById(this.tripId);
  }

  ngOnInit(): void {
  }

}
