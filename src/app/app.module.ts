import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StoreItemsComponent } from './store-items/store-items.component';
import { StoreItemComponent } from './store-items/store-item/store-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StoreItemsComponent,
    StoreItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
