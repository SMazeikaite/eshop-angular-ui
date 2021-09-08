import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { StoreGridComponent } from './store-grid/store-grid.component';
import { StoreItemResolverService } from './store-grid/store-item/store-item-resolver.service';
import { StoreItemComponent } from './store-grid/store-item/store-item.component';

const routes: Routes = [
  { path: '', component: StoreGridComponent },
  { 
    path: 'product/:id', 
    component: StoreItemComponent,
    resolve: { storeItem: StoreItemResolverService}
  },
  { 
    path: 'cart', 
    component: CartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [StoreGridComponent, StoreItemComponent];