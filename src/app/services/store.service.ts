import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import products from '../data/products.json';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  public productList:Product[] = products;

  getItem(id: number): Product {
    return this.getData()[id];
  }

  addItem(product: Product): void {
    this.productList.push(product);
  } 

  getData(): Product[] {
    return this.productList;
  }
}
