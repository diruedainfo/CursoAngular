import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripsRoutingModule } from './trips-routing.module';
import { TripsList } from './trips.list';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    TripsList
  ],
  exports: [
    TripsList
  ],
  imports: [
    CommonModule,
    TripsRoutingModule,
    SharedModule
  ]
})
export class TripsModule { }
