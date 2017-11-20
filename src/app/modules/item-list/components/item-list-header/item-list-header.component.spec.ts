import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListHeaderComponent } from './item-list-header.component';

describe('ItemListHeaderComponent', () => {
  let component: ItemListHeaderComponent;
  let fixture: ComponentFixture<ItemListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
