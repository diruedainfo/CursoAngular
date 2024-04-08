import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Agency} from "../../../core/api/agency.interface";
import {AgenciesApi} from "../../../core/api/agencies.api";

@Component({
  selector: 'app-agencies-lista',
  templateUrl: './agencies.lista.html',
  styleUrls: ['./agencies.lista.scss']
})
export class AgenciesLista implements OnInit {
  public reloading = false;

  @Input()
  public agencies : Agency[] = [];

  @Output()
  private reload = new EventEmitter();

  public getAgenciesLength() {
    return this.agencies.length;
  }

  public onReloadClick(list:string) {
    this.reloading = true;
    console.log('Reloading...' + list);
    this.reload.emit();
  }
  ngOnInit(): void {
  }

}
