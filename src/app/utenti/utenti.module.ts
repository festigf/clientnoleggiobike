import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UtentiRoutingModule } from './utenti-routing.module';
import { UtentiDashboardComponent } from './utenti-dashboard/utenti-dashboard.component';
import { UtentiTableComponent } from './utenti-dashboard/utenti-table/utenti-table.component';
import { ListUtentiComponent } from './utenti-dashboard/list-utenti/list-utenti.component';


@NgModule({
  declarations: [UtentiDashboardComponent, UtentiTableComponent, ListUtentiComponent],
  imports: [
    CommonModule,
    SharedModule,
    UtentiRoutingModule,
  ]
})
export class UtentiModule { }
