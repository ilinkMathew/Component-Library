import { Component, OnInit,Input,ViewChild,AfterViewInit,QueryList} from '@angular/core';
import {DomSanitizer} from   '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
@Component({
  selector: 'itemTable',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.css']
})
export class ItemTableComponent implements OnInit,AfterViewInit {
   
   @Input() tableHeaders;
   @Input() tableData;
   @Input() dataFields;
   @ViewChild('itemtable') itemTable;
  
  constructor(iconRegistry:MatIconRegistry,sanitizer:DomSanitizer) {
  	iconRegistry.addSvgIcon('edit',sanitizer.bypassSecurityTrustResourceUrl('./assets/edit.svg'));
  	iconRegistry.addSvgIcon('delete',sanitizer.bypassSecurityTrustResourceUrl('./assets/delete.svg'));
    iconRegistry.addSvgIcon('update',sanitizer.bypassSecurityTrustResourceUrl('./assets/update.svg'));
    iconRegistry.addSvgIcon('cancel',sanitizer.bypassSecurityTrustResourceUrl('./assets/cancel.svg'));

   
   }

  ngOnInit() {
 
    }
  ngAfterViewInit(){
   
    }


  edit(data,rowId){
    
    this.itemTable.nativeElement.querySelector('#'+rowId).hidden=false;
    }
  delete(data,rowId){
    //this.itemTable.nativeElement.querySelector('#'+rowId).hidden = true;
  }
  cancel(rowId){
   this.itemTable.nativeElement.querySelector('#'+rowId).hidden = true; 
  }

}
