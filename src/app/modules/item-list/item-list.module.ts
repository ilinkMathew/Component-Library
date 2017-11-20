import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule } from '@angular/common/http';
import { ItemListboxComponent } from './components/item-listbox/item-listbox.component';
import { ItemListHeaderComponent } from './components/item-list-header/item-list-header.component';
import { ItemAddComponent } from './components/item-add/item-add.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
 import {MatIconModule} from '@angular/material/icon';
 import {MatButtonModule} from '@angular/material/button';
import { ItemTableContainerComponent } from './components/item-table-container/item-table-container.component';
import { ItemTableAddOnsComponent } from './components/item-table-add-ons/item-table-add-ons.component';
import { ItemTableComponent } from './components/item-table/item-table.component';
import { ItemTablePaginatorComponent } from './components/item-table-paginator/item-table-paginator.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule

  ],
  declarations: [ItemListboxComponent,
  				ItemListHeaderComponent,
  				ItemAddComponent,
  				ItemTableContainerComponent,
  				ItemTableAddOnsComponent,
  				ItemTableComponent,
  				ItemTablePaginatorComponent,
  				ItemDetailComponent],
  exports:[ItemListboxComponent]
})
export class ItemListModule { }
