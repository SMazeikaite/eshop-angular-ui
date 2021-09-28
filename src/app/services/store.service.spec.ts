import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { StoreService } from './store.service';
import { Product } from '../models/product.model';

describe('StoreService', () => {
  let service: StoreService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(StoreService);
    httpTestingController.expectOne('http://localhost:3000/products');
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('getItem', () => {
    it('should return data from /products endpoint', () => {
      const fakeResponse = { id: 1 } as Product;

      service.getItem(1).subscribe((response) => {
        expect(response).toEqual(fakeResponse);
      });

      const mock = httpTestingController.expectOne(
        'http://localhost:3000/products/1'
      );
      mock.flush(fakeResponse);
    });
  });
});
