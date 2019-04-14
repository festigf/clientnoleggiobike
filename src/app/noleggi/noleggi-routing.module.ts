import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoleggiDashboardComponent } from './noleggi-dashboard/noleggi-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: NoleggiDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoleggiRoutingModule { }
