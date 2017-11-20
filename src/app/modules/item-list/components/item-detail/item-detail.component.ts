import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from   '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
@Component({
  selector: 'itemDetail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  constructor(iconRegistry:MatIconRegistry,sanitizer:DomSanitizer) {
  iconRegistry.addSvgIcon('update',sanitizer.bypassSecurityTrustResourceUrl('./assets/update.svg'));
  iconRegistry.addSvgIcon('cancel',sanitizer.bypassSecurityTrustResourceUrl('./assets/cancel.svg'));

   }

  ngOnInit() {
  }

}
