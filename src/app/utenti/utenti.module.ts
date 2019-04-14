import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtentiRoutingModule } from './utenti-routing.module';
import { UtentiDashboardComponent } from './utenti-dashboard/utenti-dashboard.component';
import { UtentiTableComponent } from './utenti-dashboard/utenti-table/utenti-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@NgModule({
  declarations: [UtentiDashboardComponent, UtentiTableComponent],
  imports: [
    CommonModule,
    UtentiRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class UtentiModule { }
