import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from   '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
@Component({
  selector: 'itemAdd',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {

  constructor(iconRegistry:MatIconRegistry,sanitizer:DomSanitizer) {
  iconRegistry.addSvgIcon('add',sanitizer.bypassSecurityTrustResourceUrl('./assets/add.svg'));
  iconRegistry.addSvgIcon('clear',sanitizer.bypassSecurityTrustResourceUrl('./assets/clear.svg'));
   }

  ngOnInit() {
  }

}
