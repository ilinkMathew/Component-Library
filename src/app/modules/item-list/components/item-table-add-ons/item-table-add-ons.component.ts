import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {DomSanitizer} from   '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {Observable,Subject} from 'rxjs';
@Component({
  selector: 'itemTableAddons',
  templateUrl: './item-table-add-ons.component.html',
  styleUrls: ['./item-table-add-ons.component.css']
})
export class ItemTableAddOnsComponent implements OnInit {
  @Output() onSearchItem = new EventEmitter<string>()	
  public keyUp = new Subject<any>();
  constructor(iconRegistry:MatIconRegistry,sanitizer:DomSanitizer) {
  iconRegistry.addSvgIcon('search',sanitizer.bypassSecurityTrustResourceUrl('./assets/Search.svg'));
  const subscription = this.keyUp
                       .map(event  => event.target.value)
                       .debounceTime(1000)
                       .distinctUntilChanged()
                       .flatMap(search => Observable.of(search).delay(200))
                       .subscribe(val=>{
                       		this.onSearchItem.emit(val);
                       });

 

   }

  ngOnInit() {
  }



}
