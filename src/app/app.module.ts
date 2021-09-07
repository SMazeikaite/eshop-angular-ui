import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StoreGridItemComponent } from './store-grid/store-grid-item/store-grid-item.component';
import { StoreFilterComponent } from './store-grid/store-filter/store-filter.component';
import { FilterPipe } from './store-grid/store-filter/store-filter.pipe';
import { StoreService } from './store-grid/store.service';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarComponent,
    StoreGridItemComponent,
    StoreFilterComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FilterPipe, StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
