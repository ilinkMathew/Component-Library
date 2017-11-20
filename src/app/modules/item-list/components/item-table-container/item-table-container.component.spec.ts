import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTableContainerComponent } from './item-table-container.component';

describe('ItemTableContainerComponent', () => {
  let component: ItemTableContainerComponent;
  let fixture: ComponentFixture<ItemTableContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTableContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
