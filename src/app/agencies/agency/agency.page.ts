import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-agency',
  templateUrl: './agency.page.html',
  styleUrls: ['./agency.page.scss']
})
export class AgencyPage implements OnInit {

  public agencyId: string;

  constructor(route:ActivatedRoute) {
    this.agencyId = route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {
  }

}
