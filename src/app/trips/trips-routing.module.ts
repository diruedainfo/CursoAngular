import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TripsList} from "./trips.list";

const routes: Routes = [{ path: '', component: TripsList }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripsRoutingModule { }
