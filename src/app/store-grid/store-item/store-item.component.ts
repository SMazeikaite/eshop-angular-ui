import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/cart/cart.service';
import { Product } from 'src/app/data/product';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.scss']
})
export class StoreItemComponent implements OnInit {
  item: Product = {} as Product;

  constructor(private route: ActivatedRoute, private cartService: CartService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.item = data.storeItem;
    });
  }

  addToCart() {
    this.cartService.addToCart(this.item);
    this.showSuccess();
  }

  showSuccess() {
    this.toastr.success('Successfully added new item to the cart. Click to view.', 'Cart updated',  {
      timeOut: 3000,
      extendedTimeOut: 1000,
      onActivateTick: true,
      positionClass: 'toast-bottom-right'
    });
  }

}
