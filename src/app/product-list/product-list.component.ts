import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-store-grid',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  storeItems: Product[] = [];
  filteredStoreItems?: Product[];

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.filteredStoreItems = this.storeService.getData();
  }

  onItemsFiltered(e: Product[]): void {
    this.filteredStoreItems = e;
  }

}
