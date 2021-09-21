import { Pipe } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Pipe({
  name: 'store-filter'
})
export class FilterService {

  transform(items: Product[], lowerThan: number, higherThan: number): Product[] {
      return items.filter(item => item.price > higherThan || item.price < lowerThan);
  }
}