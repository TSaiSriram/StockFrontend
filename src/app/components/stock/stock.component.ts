import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  public stock = [];
  public scan = false;
  public rows;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.rows = [];
this.dataService.getData();
    this.dataService.data$.subscribe(data => {
      this.rows = data;
    });
  }

  submit() {
    this.scan = true;
  }

}
