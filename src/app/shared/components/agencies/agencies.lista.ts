import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Agency} from "../../../core/api/agency.interface";
import {AgenciesApi} from "../../../core/api/agencies.api";
import {ActivatedRoute, Router} from "@angular/router";

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

  constructor(private router: Router, private route: ActivatedRoute){}

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

  public onSearchClick(agencyId:string) {
    this.router.navigate([],{
      queryParams: { q:agencyId },
      queryParamsHandling: 'merge',
    });
  }

}
