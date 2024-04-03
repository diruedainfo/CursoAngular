import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenciesRoutingModule } from './agencies-routing.module';
import { AgenciesList } from './agencies.list';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    AgenciesList
  ],
  exports: [
    AgenciesList
  ],
  imports: [
    CommonModule,
    AgenciesRoutingModule,
    SharedModule
  ]
})
export class AgenciesModule { }