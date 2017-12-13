import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Observable,Subject} from 'rxjs';
@Component({
  selector: 'itemTableAddons',
  templateUrl: './item-table-add-ons.component.html',
  styleUrls: ['./item-table-add-ons.component.css']
})
export class ItemTableAddOnsComponent implements OnInit {
  @Output() onSearchItem = new EventEmitter<string>()	
  public keyUp = new Subject<any>();
  constructor() {
  
  const subscription = this.keyUp
                       .map(event  => event.target.value)
                        .debounceTime(500)
                       .distinctUntilChanged()
                       .flatMap(search => Observable.of(search).delay(200))
                       .subscribe(val=>{
                       		this.onSearchItem.emit(val);
                       });

 

   }

  ngOnInit() {
  }



}
