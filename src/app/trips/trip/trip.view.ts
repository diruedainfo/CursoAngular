import {Component, Input, OnInit} from '@angular/core';
import {Agency} from "../../core/api/agency.interface";
import {Trip} from "../../core/api/trip.interface";

@Component({
  selector: 'app-trip-view',
  templateUrl: './trip.view.html',
  styleUrls: ['./trip.view.scss']
})
export class TripView implements OnInit {

  @Input()
  public tripId!: string;
  @Input()
  public trip?: Trip;
  constructor() { }

  ngOnInit(): void {
  }

}
