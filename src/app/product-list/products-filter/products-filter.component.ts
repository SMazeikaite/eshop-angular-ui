import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from '../../services/store.service';
import { FilterService } from '../../services/products-filter.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.scss']
})
export class ProductsFilterComponent {
  @Input() lowerThan!: number;
  @Input() higherThan!: number;
  @Output() itemsFiltered = new EventEmitter<Observable<Product[]>>();
  expensiveFilterOn = false;
  cheapFilterOn = false;
  filteredItems!: Product[];
  storeItems: Product[];

  constructor(private filterService: FilterService, private storeService: StoreService) {
    this.storeService.items$.subscribe(data => this.storeItems = data);
   }

  onExpensiveFilterClick(): void {
    this.expensiveFilterOn = !this.expensiveFilterOn;
    this.filterStore();
  }

  onCheapFilterClick(): void {
    this.cheapFilterOn = !this.cheapFilterOn;
    this.filterStore();
  }

  filterStore(): void {
    this.filteredItems = this.storeItems;
    if (this.expensiveFilterOn || this.cheapFilterOn) {
      const lowerThan = this.cheapFilterOn ? this.lowerThan : 0;
      const higherThan = this.expensiveFilterOn ? this.higherThan : Number.MAX_VALUE;
      this.filteredItems = this.filterService.transform(this.storeItems, lowerThan, higherThan);
    }
    this.itemsFiltered.emit(of(this.filteredItems));
  }

}
