import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  addToCart(product: Product): void {
    this.items.push(product);
  }

  removeFromCart(index: number): void {
    if (index > -1) {
       this.items.splice(index, 1);
    }
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart(): void {
    this.items = [];
  }
}
