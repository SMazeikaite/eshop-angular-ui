import { Injectable } from '@angular/core';
import { Product } from '../data/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  removeFromCart(index: number) {
    if (index > -1) {
       this.items.splice(index, 1);
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
