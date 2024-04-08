import { Component, OnInit } from '@angular/core';
import {Agency} from "../../../core/api/agency.interface";
import {Trip} from "../../../core/api/trip.interface";
import {AgenciesApi} from "../../../core/api/agencies.api";
import {TripsApi} from "../../../core/api/trips.api";

@Component({
  selector: 'app-trips-lista',
  templateUrl: './trips.lista.html',
  styleUrls: ['./trips.lista.scss']
})
export class TripsLista implements OnInit {
  public reloading = false;

  public trips : Trip[];

  constructor(
    tripsApi: TripsApi
  ) {
    this.trips = tripsApi.getAll();
  }
  public getTripsLength() {
    return this.trips.length;
  }

  public reload(list:string) {
    this.reloading = true;
    console.log('Reloading...' + list);
  }

  ngOnInit(): void {
  }

}
