import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'itemListBox',
  templateUrl: './item-listbox.component.html',
  styleUrls: ['./item-listbox.component.css']
})
export class ItemListboxComponent implements OnInit {
  @Input() itemListBoxConfg;
  @Output() onItemListChanges = new EventEmitter<object>();
  public itemListHeader:any;
  public itemListConfig:any;
  constructor() { }

  ngOnInit() {
  
  }
  handleContainerChanges(value){
  	this.onItemListChanges.emit(value);
  }

}
