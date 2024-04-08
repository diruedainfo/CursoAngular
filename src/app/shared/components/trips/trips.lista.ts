import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  @Input()
  public trips : Trip[] = [];
  @Output()
  private reload = new EventEmitter();


  public getTripsLength() {
    return this.trips.length;
  }

  public onReloadClick(list:string) {
    this.reloading = true;
    console.log('Reloading...' + list);

    this.reload.emit();
  }

  ngOnInit(): void {
  }

}
