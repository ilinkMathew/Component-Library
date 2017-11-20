import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListboxComponent } from './item-listbox.component';

describe('ItemListboxComponent', () => {
  let component: ItemListboxComponent;
  let fixture: ComponentFixture<ItemListboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemListboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
