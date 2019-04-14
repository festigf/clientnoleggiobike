import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoleggiRoutingModule } from './noleggi-routing.module';
import { NoleggiDashboardComponent } from './noleggi-dashboard/noleggi-dashboard.component';

@NgModule({
  declarations: [NoleggiDashboardComponent],
  imports: [
    CommonModule,
    NoleggiRoutingModule
  ]
})
export class NoleggiModule { }
