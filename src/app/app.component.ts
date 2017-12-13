import { Component,OnInit } from '@angular/core';
import {DataService} from './services/data.service';
import {Observable} from 'rxjs'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DataService]
})
export class AppComponent implements OnInit {
  title = 'app';
  public itemListBoxConfg:object;
 
  
  constructor(public dataService:DataService){}

  ngOnInit(){
  

      
      this.itemListBoxConfg = {
      itemListHeaderTitle:'Product',
      itemListFlags:{
        enablePaginator:true,
        enableTableEdits:true,
        enableSearch:true
      },
      itemListTableConfig:{
        itemTableHeader:['Product','Price','Category'],
        itemTableData:this.dataService.getdata(), // Data Service which returns an observable
        itemTableDataFields:['productName','productPrice','categoryName'], // Object keys of the data which you wanna display
        itemTableDataSelector:'id' // Unique ID used to idenify each of your data
      },
      itemListPaginatorConfig:{
        defaultLimiterValue:5
      }

    }
    

  }

 handleItemListChanges(value){
   switch (true) {
     case value.changeType === 'update':
          this.updateData(value)
       break;
     case value.changeType == 'delete':
         this.deleteData(value.payload)
       break;
   }
 }

 updateData(value){
 
   this.dataService.updateData(value.id,value.payload);
 }

 deleteData(value){
  this.dataService.deleteData(value.id);
 }



}



