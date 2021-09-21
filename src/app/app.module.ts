import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductListItemComponent } from './product-list/product-list-item/product-list-item.component';
import { ProductsFilterComponent } from './product-list/products-filter/products-filter.component';
import { FilterService } from './services/products-filter.service';
import { ProductsToolbarComponent } from './product-list/products-toolbar/products-toolbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    CartComponent,
    NavbarComponent,
    ProductListItemComponent,
    ProductsFilterComponent,
    FilterService,
    ProductsToolbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [FilterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
