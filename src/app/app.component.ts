import { Component,OnInit } from '@angular/core';
import {itemData} from './models/data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public itemListBoxConfg:object;

  ngOnInit(){
  	this.itemListBoxConfg = {
  		itemListHeaderTitle:'Product',
      itemListFlags:{
        enablePaginator:true
      },
  		itemListTableConfig:{
  			itemTableHeader:['Product','Price','Category'],
  			itemTableData:itemData,
        itemTableDataFields:['productName','productPrice','categoryName']
  		},
      itemListPaginatorConfig:{
        defaultLimiterValue:5
      }

  	}
  }

}
