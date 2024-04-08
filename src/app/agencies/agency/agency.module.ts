import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgencyRoutingModule } from './agency-routing.module';
import { AgencyPage } from './agency.page';
import { AgencyView } from './agency.view';


@NgModule({
  declarations: [
    AgencyPage,
    AgencyView
  ],
  imports: [
    CommonModule,
    AgencyRoutingModule
  ]
})
export class AgencyModule { }
