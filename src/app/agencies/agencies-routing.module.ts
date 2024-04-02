import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AgenciesList} from "./agencies.list";

const routes: Routes = [{ path: '', component: AgenciesList }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgenciesRoutingModule { }
