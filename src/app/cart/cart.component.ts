import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  items: Product[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.updateItems();
  }

  updateItems(): void {
    this.items = this.cartService.getItems();
  }

  onRemoveItem(index: number): void {
    this.cartService.removeFromCart(index);
    this.updateItems();
  }

  onClearCart(): void {
    this.cartService.clearCart();
    this.updateItems();
  }
}
