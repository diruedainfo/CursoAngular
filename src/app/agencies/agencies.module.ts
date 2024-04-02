import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenciesRoutingModule } from './agencies-routing.module';
import { AgenciesList } from './agencies.list';


@NgModule({
  declarations: [
    AgenciesList
  ],
  exports: [
    AgenciesList
  ],
  imports: [
    CommonModule,
    AgenciesRoutingModule
  ]
})
export class AgenciesModule { }
