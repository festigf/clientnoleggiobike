import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtentiDashboardComponent } from './utenti-dashboard/utenti-dashboard.component';
import { UtentiTableComponent } from './utenti-dashboard/utenti-table/utenti-table.component';

const routes: Routes = [
  {path: '', component: UtentiDashboardComponent,
    children: [
      //{path: 'addUtente', component: CustomerComponent},
      {path: 'listUtenti', component: UtentiTableComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtentiRoutingModule { }
