import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items$ = new BehaviorSubject<Product[]>([]);
  count$ = this.items$.pipe(map((items) => items.length));

  constructor() {
    const cartJson = localStorage.getItem('cartItems');
    if (cartJson) {
      const items: Product[] = [];

      const res = JSON.parse(cartJson);
      for (let i = 0; i < res.length; i++) {
        items.push(res[i]);
      }

      this.items$.next(items);
    }
  }

  addToCart(product: Product): void {
    const items = this.items$.getValue();
    const newItems = [...items, product];

    this.items$.next(newItems);

    this.updateCartInLocalStorage();
  }

  removeFromCart(index: number): void {
    if (index > -1) {
      const itemsCopy = [...this.items$.getValue()];

      itemsCopy.splice(index, 1);
      this.items$.next(itemsCopy);

      this.updateCartInLocalStorage();
    }
  }

  updateCartInLocalStorage(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.items$.getValue()));
  }

  getItems(): Product[] {
    return this.items$.getValue();
  }

  clearCart(): void {
    this.items$.next([]);
    this.updateCartInLocalStorage();
  }
}
