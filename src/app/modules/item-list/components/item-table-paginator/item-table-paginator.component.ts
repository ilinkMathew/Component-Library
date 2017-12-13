import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'itemTablePaginator',
  templateUrl: './item-table-paginator.component.html',
  styleUrls: ['./item-table-paginator.component.css']
})
export class ItemTablePaginatorComponent implements OnInit {
  @Input() tableSize;
  @Input() paginatorConfig;
  @Output() onLimitChanges = new EventEmitter<number>();
  @Output() onItemPaginatorEvent = new EventEmitter<any>();
  public startValue:number=1;
  public endValue:number;
  public selectedLimiterValue:number;
  constructor() { 
    }

  ngOnInit() {
 
  this.selectedLimiterValue = this.paginatorConfig.defaultLimiterValue;
  this.endValue = this.selectedLimiterValue; 
  }


 limitChange(limitValue){
   this.endValue=limitValue;
   this.startValue=1;
  this.onLimitChanges.emit(limitValue);  
 }

 goToPrev(){
 this.startValue-=this.selectedLimiterValue;
 this.endValue-=this.selectedLimiterValue;
 this.onItemPaginatorEvent.emit([this.startValue,this.endValue]);
 }
 goToNext(){
 this.startValue+=this.selectedLimiterValue;
 this.endValue+=this.selectedLimiterValue;
 this.onItemPaginatorEvent.emit([this.startValue,this.endValue]);
 }


} 
