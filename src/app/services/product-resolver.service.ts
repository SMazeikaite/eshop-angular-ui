import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<Product> {
  constructor(private storeService: StoreService) { }

  resolve(route: ActivatedRouteSnapshot): Product | Observable<Product> | Promise<Product> {
    return this.storeService.getItem(route.params.id);
  }
}
