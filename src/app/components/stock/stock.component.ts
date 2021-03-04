import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
  responseData: any;
  
  constructor(public dataService: DataService) { }

  stockForm = new FormGroup({
    companyName: new FormControl(''),
    userName: new FormControl(''),  
    });

  
  ngOnInit(): void {
    this.rows = [];
this.dataService.getData();
    this.dataService.data$.subscribe(data => {
      this.rows = data;
    });
  }

  async submit() {
    console.log(this.stockForm.getRawValue())
  let response =await this.dataService.searchCompanyStockData(this.stockForm.getRawValue());
  this.responseData = Object.values(response["StockData"][0]);
  }

}
