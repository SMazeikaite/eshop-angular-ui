import { Component, OnInit } from '@angular/core';
import { Product } from '../data/product';
import { StoreService } from './store.service';

@Component({
  selector: 'app-store-grid',
  templateUrl: './store-grid.component.html',
  styleUrls: ['./store-grid.component.scss']
})
export class StoreGridComponent implements OnInit {

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
