import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from '../../services/store.service';
import { FilterService } from '../../services/products-filter.service';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.scss']
})
export class ProductsFilterComponent {
  @Input() lowerThan!: number;
  @Input() higherThan!: number;
  @Output() itemsFiltered = new EventEmitter<Product[]>();
  expensiveFilterOn = false;
  cheapFilterOn = false;
  filteredItems!: Product[];

  constructor(private filterService: FilterService, private storeService: StoreService) { }

  onExpensiveFilterClick(): void {
    this.expensiveFilterOn = !this.expensiveFilterOn;
    this.filterStore();
  }

  onCheapFilterClick(): void {
    this.cheapFilterOn = !this.cheapFilterOn;
    this.filterStore();
  }

  filterStore(): void {
    this.filteredItems = this.storeService.getData();
    if (this.expensiveFilterOn || this.cheapFilterOn) {
      const lowerThan = this.cheapFilterOn ? this.lowerThan : 0;
      const higherThan = this.expensiveFilterOn ? this.higherThan : Number.MAX_VALUE;
      this.filteredItems = this.filterService.transform(this.storeService.getData(), lowerThan, higherThan);
    }
    this.itemsFiltered.emit(this.filteredItems);
  }

}
