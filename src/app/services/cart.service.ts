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
    this.updateCartInLocalStorage();
  }

  removeFromCart(index: number): void {
    if (index > -1) {
      this.items.splice(index, 1);
      this.updateCartInLocalStorage();
    }
  }

  updateCartInLocalStorage(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart(): void {
    this.items = [];
    this.updateCartInLocalStorage();
  }
}
