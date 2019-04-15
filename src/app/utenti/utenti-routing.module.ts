import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtentiDashboardComponent } from './utenti-dashboard/utenti-dashboard.component';
import { UtentiTableComponent } from './utenti-dashboard/utenti-table/utenti-table.component';
import { ListUtentiComponent } from './utenti-dashboard/list-utenti/list-utenti.component';

const routes: Routes = [
  {path: '', component: UtentiDashboardComponent,
    children: [
      //{path: 'addUtente', component: CustomerComponent},
      {path: 'listUtenti', component: ListUtentiComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtentiRoutingModule { }
