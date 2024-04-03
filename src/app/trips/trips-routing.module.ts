import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TripsList} from "./trips.list";

const routes: Routes = [{ path: '', component: TripsList }, { path: 'trip/:id', loadChildren: () => import('./trip/trip.module').then(m => m.TripModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripsRoutingModule { }
