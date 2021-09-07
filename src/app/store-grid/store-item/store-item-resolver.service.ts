import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/data/product';
import { StoreService } from '../store.service';

@Injectable({
  providedIn: 'root'
})
export class StoreItemResolverService implements Resolve<Product> {
  constructor(private storeService: StoreService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product | Observable<Product> | Promise<Product> {
    return this.storeService.getItem(route.params.id);
  }
}
