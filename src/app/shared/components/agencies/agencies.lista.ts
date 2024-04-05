import { Component, OnInit } from '@angular/core';
import {Agency} from "../../../core/api/agency.interface";

@Component({
  selector: 'app-agencies-lista',
  templateUrl: './agencies.lista.html',
  styleUrls: ['./agencies.lista.scss']
})
export class AgenciesLista implements OnInit {
  public reloading = false;

  public agencies : Agency[] = [
    {
      id: 'space-y',
      name: 'Space Y',
      range: 'Interplanetary',
      status: 'Active',
    },
    {
      id: 'green-origin',
      name: 'Green Origin',
      range: 'Orbital',
      status: 'Active',
    },
    {
      id: 'virgin-way',
      name: 'Virgin Way',
      range: 'Orbital',
      status: 'Pending',
    },
  ]
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
