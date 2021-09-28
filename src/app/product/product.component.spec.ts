import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    const fakeActivatedRoute = {
      data: of({ storeItem: {} }),
      paramMap: of(convertToParamMap({ id: 1 })),
    };

    TestBed.configureTestingModule({
      declarations: [ProductComponent],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        {
          provide: ToastrService,
          useValue: jasmine.createSpyObj<ToastrService>('ToastrService', [
            'success',
          ]),
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('showSuccess', () => {
    it('should use toaster service to show a notification', () => {
      const toasterService = TestBed.inject(ToastrService);

      component.showSuccess();

      expect(toasterService.success).toHaveBeenCalled();
    });
  });
});
