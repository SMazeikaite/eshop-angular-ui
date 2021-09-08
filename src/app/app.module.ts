import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StoreService } from './services/store.service';
import { CartService } from './services/cart.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product-list/product/product.component';
import { ProductListItemComponent } from './product-list/product-list-item/product-list-item.component';
import { ProductsFilterComponent } from './product-list/products-filter/products-filter.component';
import { FilterPipe } from './product-list/products-filter/products-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    CartComponent,
    NavbarComponent,
    ProductListItemComponent,
    ProductsFilterComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  providers: [FilterPipe, StoreService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
