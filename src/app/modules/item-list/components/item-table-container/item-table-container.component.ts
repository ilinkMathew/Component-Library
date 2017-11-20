import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'itemTableContainer',
  templateUrl: './item-table-container.component.html',
  styleUrls: ['./item-table-container.component.css']
})
export class ItemTableContainerComponent implements OnInit {
  @Input() itemListConfig;
  public tableHeaders:any;
  public tableData:any;
  public dataFields:any;
  public tablePaginatorConfig:any;
  public tableSize:number;
  constructor() { }

  ngOnInit() {
  	this.tableHeaders = this.itemListConfig.itemListTableConfig.itemTableHeader;
    this.tableData = this.itemListConfig.itemListTableConfig.itemTableData.slice(0,this.itemListConfig.itemListPaginatorConfig.defaultLimiterValue);
    this.dataFields = this.itemListConfig.itemListTableConfig.itemTableDataFields;
  	this.tablePaginatorConfig = this.itemListConfig.itemListPaginatorConfig;
    this.tableSize = this.itemListConfig.itemListTableConfig.itemTableData.length;
   

  }

  changeLimiterValue(value){
    this.tableData=this.itemListConfig.itemListTableConfig.itemTableData.slice(0,value);
  }
  
  changeTableData(value){
    let start,end;
    [start,end] = value;
     this.tableData=this.itemListConfig.itemListTableConfig.itemTableData.slice(start-1,end);   
      
   }
  

   handleSearch(searchValue){
     let filteredData:any;
     if (searchValue === ''){
      this.tableData =  this.itemListConfig.itemListTableConfig.
                            itemTableData.
                            slice(0,this.itemListConfig.itemListPaginatorConfig.defaultLimiterValue);
      this.itemListConfig.itemListFlags.enablePaginator = true;       
     }
     else { 
     this.tableData = this.itemListConfig.itemListTableConfig
                       .itemTableData.filter((item)=>{
                        let val = Object.values(item).map((el)=>String(el).toLowerCase());
                        if(val.includes(searchValue.toLowerCase()))
                                      return item;       
                                             });

     this.itemListConfig.itemListFlags.enablePaginator = false;
     }

   }


}
