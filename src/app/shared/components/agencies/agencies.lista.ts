import { Component, OnInit } from '@angular/core';
import {Agency} from "../../../core/api/agency.interface";
import {AgenciesApi} from "../../../core/api/agencies.api";

@Component({
  selector: 'app-agencies-lista',
  templateUrl: './agencies.lista.html',
  styleUrls: ['./agencies.lista.scss']
})
export class AgenciesLista implements OnInit {
  public reloading = false;

  public agencies : Agency[];
  constructor(
    agenciesApi: AgenciesApi
  ) {
    this.agencies = agenciesApi.getAll();
  }
  public getAgenciesLength() {
    return this.agencies.length;
  }

  public reload(list:string) {
    this.reloading = true;
    console.log('Reloading...' + list);
  }
  ngOnInit(): void {
  }

}
