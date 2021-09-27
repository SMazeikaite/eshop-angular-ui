import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  
  items$ = new BehaviorSubject<Product[]>([]);
  public productList:Product[];
  url = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {
    this.refreshItems();
  }

  getItem(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  addItem(product: Product): void {
    this.http.post<Product>(this.url, product).subscribe(() => {
      this.refreshItems();
    });
  }

  removeItem(product: Product): void {     
    this.http.delete<Product>(`${this.url}/${product.id}`, ).subscribe(() => {
      this.refreshItems();
    });
  }

  refreshItems(): void {
    this.getData().subscribe(data => this.items$.next(data));
  }

  getData(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
}
