import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-store-item',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges {
  item: Product = {} as Product;

  constructor(private route: ActivatedRoute, private cartService: CartService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.item = data.storeItem;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes:", changes);
  }

  addToCart(): void {
    this.cartService.addToCart(this.item);
    this.showSuccess();
  }

  showSuccess(): void {
    this.toastr.success('New item was added to the cart', 'Cart updated',  {
      timeOut: 3000,
      extendedTimeOut: 1000,
      positionClass: 'toast-bottom-right'
    });
  }

}
