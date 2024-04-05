import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Agency} from "../../core/api/agency.interface";
import {AgenciesApi} from "../../core/api/agencies.api";

@Component({
  selector: 'app-agency',
  templateUrl: './agency.page.html',
  styleUrls: ['./agency.page.scss']
})
export class AgencyPage implements OnInit {

  public agencyId: string;
  public agency?: Agency;

  constructor(route:ActivatedRoute, agenciesApi: AgenciesApi) {
    this.agencyId = route.snapshot.paramMap.get('id') || '';
    this.agency = agenciesApi.getById(this.agencyId);
  }

  ngOnInit(): void {
  }

}
