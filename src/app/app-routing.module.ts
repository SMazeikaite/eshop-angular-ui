import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductResolverService } from './services/product-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent 
  },{ 
    path: 'product/:id',
    component: ProductComponent,
    resolve: { storeItem: ProductResolverService}
  },{ 
    path: 'cart',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }