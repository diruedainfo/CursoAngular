import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AgenciesList} from "./agencies.list";

const routes: Routes = [
  {
    path: '', component: AgenciesList
  },
  {
    path: 'agency/new', loadChildren: () =>
      import('./new-agency/new-agency.module').then(m => m.NewAgencyModule)
  },
  {
    path: 'agency/:id',
    loadChildren: () =>
      import('./agency/agency.module').then(m => m.AgencyModule)
  },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgenciesRoutingModule { }
