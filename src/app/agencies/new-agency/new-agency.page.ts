import {Component, Input, OnInit} from '@angular/core';
import {IdName} from "../../core/api/id-name.interface";
import {IdNameApi} from "../../core/api/id-name.api";
import {AgenciesApi} from "../../core/api/agencies.api";
import {Agency} from "../../core/api/agency.interface";

@Component({
  selector: 'app-new-agency',
  templateUrl: './new-agency.page.html',
  styleUrls: ['./new-agency.page.scss']
})
export class NewAgencyPage implements OnInit {

  public ranges: IdName[];
  public statuses;
  constructor(
    idNameApi: IdNameApi,
    private agenciesApi: AgenciesApi,
  ) {
    this.ranges = idNameApi.getRanges();
    this.statuses = idNameApi.getStatuses();
  }

  onSave(newAgencyData: Agency){
    this.agenciesApi.post(newAgencyData);
  }

  ngOnInit(): void {
  }

}
