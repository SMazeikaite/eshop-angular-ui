import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Pipe({
  name: 'storeFilter',
})
export class FilterPipe implements PipeTransform {
  transform(
    items: Product[] | null,
    lowerThan?: number,
    higherThan?: number
  ): Product[] | null {
    if (!items) {
      return items;
    }

    if (lowerThan && higherThan) {
      return items.filter(
        (item) => item.price > higherThan || item.price < lowerThan
      );
    } else if (lowerThan) {
      return items.filter((item) => item.price < lowerThan);
    } else if (higherThan) {
      return items.filter((item) => item.price > higherThan);
    } else {
      return items;
    }
  }
}
