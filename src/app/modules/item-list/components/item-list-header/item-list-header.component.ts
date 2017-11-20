import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'itemListHeader',
  templateUrl: './item-list-header.component.html',
  styleUrls: ['./item-list-header.component.css']
})
export class ItemListHeaderComponent implements OnInit {
  @Input() itemListHeader;
  public title:string;
  constructor() { }

  ngOnInit() {
  this.title = this.itemListHeader;
  }

}
