import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { UtentiTableDataSource } from './utenti-table-datasource';

@Component({
  selector: 'app-utenti-table',
  templateUrl: './utenti-table.component.html',
  styleUrls: ['./utenti-table.component.css']
})
export class UtentiTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: UtentiTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngAfterViewInit() {
    this.dataSource = new UtentiTableDataSource(this.paginator, this.sort);
  }
}
