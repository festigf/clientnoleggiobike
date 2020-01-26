import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-utenti',
  templateUrl: './list-utenti.component.html',
  styleUrls: ['./list-utenti.component.css']
})
export class ListUtentiComponent implements OnInit {
  utenti$;
 
  constructor(public dataService: DataService) { 
    this.utenti$ = this.dataService.getUtenti();
  }

  ngOnInit() { }

}
