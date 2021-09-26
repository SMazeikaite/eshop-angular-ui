import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResolverService implements Resolve<Product> {
  constructor(private storeService: StoreService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Product | Observable<Product> | Promise<Product> {
    return this.storeService.getItem(route.params.id).pipe(delay(2000));
  }
}
