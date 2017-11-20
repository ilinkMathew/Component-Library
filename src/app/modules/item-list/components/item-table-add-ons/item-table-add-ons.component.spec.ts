import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTableAddOnsComponent } from './item-table-add-ons.component';

describe('ItemTableAddOnsComponent', () => {
  let component: ItemTableAddOnsComponent;
  let fixture: ComponentFixture<ItemTableAddOnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTableAddOnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTableAddOnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
