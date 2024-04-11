import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {BehaviorSubject, concatMap, exhaustMap, map, Observable, switchMap} from 'rxjs';
import { AgenciesApi } from '../core/api/agencies.api';
import { Agency } from '../core/api/agency.interface';
import { Trip } from '../core/api/trip.interface';
import { TripsApi } from '../core/api/trips.api';
import {query} from "@angular/animations";

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.page.html',
  styleUrls: ['./agencies.page.scss'],
})
export class AgenciesPage implements OnInit {
  // public agencies!: Agency[];
  public agencies$: Observable<Agency[]>;
  public trips$!: Observable<Trip[]>;
  private search$: BehaviorSubject<string> = new BehaviorSubject('');

  public error: boolean = false;

  constructor(
    private agenciesApi: AgenciesApi,
    private tripsApi: TripsApi,
    private route: ActivatedRoute // para tratar los queryparams
  ) {
    this.agencies$ = this.search$.pipe(
      // map((searchTerm) => this.agenciesApi.getByText$(searchTerm))
      switchMap((searchTerm) => this.agenciesApi.getByText$(searchTerm))
      // concatMap((searchTerm) => this.agenciesApi.getByText$(searchTerm))
      // exhaustMap((searchTerm) => this.agenciesApi.getByText$(searchTerm))
    );
    this.trips$ = this.route.queryParamMap.pipe(
      map((queryParamMap) => queryParamMap.get('q')),
      switchMap((agencyId) => this.tripsApi.getByText$(agencyId))
    );

    // const q = this.route.snapshot.queryParamMap.get('q');
    // console.log(q);

    /*this.route.queryParamMap.subscribe((queryParamMap) =>
      console.log(queryParamMap.get('q'))
    );*/

  }



  onReload() {
    this.search$.next('');
  }

  onSearch(searchTerm: string) {
    this.search$.next(searchTerm);
    // this.agencies$ = this.agenciesApi.getByText$(searchTerm);
  }

  ngOnInit(): void {}
}
