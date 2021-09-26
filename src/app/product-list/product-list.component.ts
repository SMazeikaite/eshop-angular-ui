import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-store-grid',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],  
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  
  filteredStoreItems?: Observable<Product[]>;

  constructor(private storeService: StoreService) {
    this.filteredStoreItems = this.storeService.items$;
  }

  onItemsFiltered(result: Observable<Product[]>): void {
    this.filteredStoreItems = result;
  }

  onItemRemove(e: Product): void {
    this.storeService.removeItem(e);
  }

}
