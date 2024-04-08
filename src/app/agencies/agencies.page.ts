import { Component, OnInit } from '@angular/core';
import {Agency} from "../core/api/agency.interface";
import {AgenciesApi} from "../core/api/agencies.api";

@Component({
  selector: 'app-agencies-list',
  templateUrl: './agencies.page.html',
  styleUrls: ['./agencies.page.scss']
})
export class AgenciesPage implements OnInit {
  public agencies! : Agency[];

  constructor(
    private agenciesApi: AgenciesApi
  ) {
    this.agencies = agenciesApi.getAll();
  }

  onReload() {
    this.agencies = this.agenciesApi.getAll();
  }
  ngOnInit(): void {
  }

}
