import { Component, OnInit,Input,Output,ViewChild,EventEmitter} from '@angular/core';
import { ElementRef,Renderer2 } from '@angular/core';
@Component({
  selector: 'itemTable',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.css']
})
export class ItemTableComponent implements OnInit {
   
   @Input() tableHeaders;
   @Input() tableData;
   @Input() dataFields;
   @Input() selectorId;
   @Input() editFlag;
   @Output() onTableChanges = new EventEmitter<object>();
   @ViewChild('itemtable') itemTable;
   public dataKey:any;
   public colSpanWidth:number;
   public tableEditFlag:boolean;
   public sortFlag:boolean = false;
  
  constructor(private renderer:Renderer2) {

   }



  ngOnInit() {
     this.colSpanWidth = this.dataFields.length + 1;
     this.dataKey = this.selectorId; 
     this.tableEditFlag = this.editFlag;
    }

  generateRow(index){
     return 'item'+index;
    }


   toggleDetailView(rowId,value){

   this.itemTable.nativeElement.querySelector('#'+rowId).hidden=value;
  }
  
  edit(data,rowId){
    this.toggleDetailView(rowId,false);
   
 }
  
  handleViewChanges(value){
    switch (true) {
      
      case value.changeType === 'update':
       this.onTableChanges.emit({changeType:'update', id:value.id, payload:value.payload})
       this.toggleDetailView(value.rowId,true);
       break;

      case value.changeType === 'cancel':
      this.toggleDetailView(value.rowId,true);
      break;

      
      }
  


  }
  
  delete(data,rowId){
    
    let id = this.selectorId
    this.onTableChanges.emit({changeType:'delete',payload:{id:data[this.selectorId]}});  
    
  }

}
