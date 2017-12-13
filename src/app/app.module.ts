import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ItemListModule} from './modules/item-list/item-list.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
  
     ],
  imports: [
    BrowserModule,
    ItemListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
