import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreGridItemComponent } from './store-grid-item.component';

describe('StoreGridItemComponent', () => {
  let component: StoreGridItemComponent;
  let fixture: ComponentFixture<StoreGridItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreGridItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
