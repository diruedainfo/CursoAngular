import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import {SharedModule} from "../shared/shared.module";
import {AgenciesModule} from "../agencies/agencies.module";
import {TripsModule} from "../trips/trips.module";



@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    SharedModule,
    AgenciesModule,
    TripsModule,
  ],
  exports: [
    HomePage
  ]
})
export class HomeModule { }
