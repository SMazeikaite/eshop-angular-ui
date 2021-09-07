import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/data/product';
import { StoreService } from '../store.service';
import { FilterPipe } from './store-filter.pipe';

@Component({
  selector: 'app-store-filter',
  templateUrl: './store-filter.component.html',
  styleUrls: ['./store-filter.component.scss']
})
export class StoreFilterComponent implements OnInit {
  @Input() lowerThan!: number;
  @Input() higherThan!: number;
  @Output() itemsFiltered = new EventEmitter<Product[]>();
  expensiveFilterOn: boolean = false;
  cheapFilterOn: boolean = false;
  filteredItems!: Product[];

  constructor(private filterPipe: FilterPipe, private storeService: StoreService) { }

  ngOnInit(): void {
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
    this.filteredItems = this.storeService.getData();
    if (this.expensiveFilterOn || this.cheapFilterOn) {
      const lowerThan = this.cheapFilterOn ? this.lowerThan : 0;
      const higherThan = this.expensiveFilterOn ? this.higherThan : Number.MAX_VALUE;
      this.filteredItems = this.filterPipe.transform(this.storeService.getData(), lowerThan, higherThan);
    }
    this.itemsFiltered.emit(this.filteredItems);
  }

}
