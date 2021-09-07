import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/data/product';

@Pipe({
  name: 'store-filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Product[], lowerThan: number, higherThan: number): any {
      return items.filter(item => item.price > higherThan || item.price < lowerThan);
  }
}