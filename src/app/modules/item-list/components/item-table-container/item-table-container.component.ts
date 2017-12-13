import { Component, OnInit,Input,Output,EventEmitter,OnChanges } from '@angular/core';

@Component({
  selector: 'itemTableContainer',
  templateUrl: './item-table-container.component.html',
  styleUrls: ['./item-table-container.component.css']
})
export class ItemTableContainerComponent implements OnInit ,OnChanges {
  @Input() itemListConfig;
  @Output() onTableContainerChanges = new EventEmitter<object>();
  public tableHeaders:any;
  public tableData:any;
  public dataFields:any;
  public tablePaginatorConfig:any;
  public tableSize:number;
  public dataSelectorId:any;
  public allItems:any;

  constructor() { }

  ngOnInit() {
  	this.tableHeaders = this.itemListConfig.itemListTableConfig.itemTableHeader;
    this.dataFields = this.itemListConfig.itemListTableConfig.itemTableDataFields;
  	this.tablePaginatorConfig = this.itemListConfig.itemListPaginatorConfig;
    this.dataSelectorId = this.itemListConfig.itemListTableConfig.itemTableDataSelector;
    console.log(this.itemListConfig.itemListFlags.enableTableEdits);
  }
  ngOnChanges(){
    this.itemListConfig.itemListTableConfig.itemTableData.subscribe((val)=>{
      this.allItems = val; 
      this.tableSize = this.allItems.length;
      this.tableData = this.allItems.slice(0,this.itemListConfig.itemListPaginatorConfig.defaultLimiterValue);

    })

  }

  changeLimiterValue(value){
    
    this.tableData = this.allItems.slice(0,value);
  }
  
  changePaginator(value){
    let start,end;
    [start,end] = value;
     
      this.tableData = this.allItems.slice(start-1,end);
   }
  

   handleSearch(searchValue){
     let filteredData:any;
     if (searchValue === ''){
      
      this.tableData = this.allItems.slice(0,this.itemListConfig.itemListPaginatorConfig.defaultLimiterValue); 
      this.tableSize = this.tableData.length;                     
      this.itemListConfig.itemListFlags.enablePaginator = true;       
     }
     else { 
     this.tableData = this.allItems
                          .filter((item)=>{
                        let val = Object.values(item).map((el)=>String(el).toLowerCase());
                        if(val.includes(searchValue.toLowerCase()))
                                      return item;       
                                             });

     this.itemListConfig.itemListFlags.enablePaginator = false;
     }

   }


   handleTableChanges(value){
     this.onTableContainerChanges.emit(value);
   
   }


}
