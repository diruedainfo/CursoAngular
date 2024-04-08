import { Component, OnInit } from '@angular/core';
import {Agency} from "../../core/api/agency.interface";
import {Trip} from "../../core/api/trip.interface";
import {AgenciesApi} from "../../core/api/agencies.api";
import {TripsApi} from "../../core/api/trips.api";
import {Observable} from "rxjs";

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.page.html',
  styleUrls: ['./new-trip.page.scss']
})
export class NewTripPage implements OnInit {

  public agencies! : Agency[];
  constructor(
    agenciesApi: AgenciesApi,
    private tripsApi: TripsApi
  ) {
    this.agencies = agenciesApi.getAll();
  }

  onSave(newTripData: Trip){
    this.tripsApi.post(newTripData);
  }

  ngOnInit(): void {
  }

}
