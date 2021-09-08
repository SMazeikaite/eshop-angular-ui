import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  constructor() {
    const cartJson = localStorage.getItem('cartItems');
    if (cartJson) {
      const res = JSON.parse(cartJson);
      for (let i = 0; i < res.length; i++) {
        this.items.push(res[i]);
      }
    }
  }

  addToCart(product: Product): void {
    this.items.push(product);
    this.updateLocalStorage('cartItems', this.items);
  }

  removeFromCart(index: number): void {
    if (index > -1) {
      this.items.splice(index, 1);
      this.updateLocalStorage('cartItems', this.items);
    }
  }

  updateLocalStorage(name: string, data: Product[]): void {
    localStorage.setItem(name, JSON.stringify(data));
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart(): void {
    this.items = [];
  }
}
