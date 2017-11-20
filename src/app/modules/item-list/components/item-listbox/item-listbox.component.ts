import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'itemListBox',
  templateUrl: './item-listbox.component.html',
  styleUrls: ['./item-listbox.component.css']
})
export class ItemListboxComponent implements OnInit {
  @Input() itemListBoxConfg;
  public itemListHeader:any;
  public itemListConfig:any;
  constructor() { }

  ngOnInit() {
  
  }

}
