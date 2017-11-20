import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTablePaginatorComponent } from './item-table-paginator.component';

describe('ItemTablePaginatorComponent', () => {
  let component: ItemTablePaginatorComponent;
  let fixture: ComponentFixture<ItemTablePaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTablePaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTablePaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
