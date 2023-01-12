import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductService } from './services/product.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NewProductComponent } from './components/new-product/new-product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { CartComponent } from './components/cart/cart.component';


const appRoutes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'newProduct', component: NewProductComponent },
  { path: 'detail/:productId', component: ProductDetailComponent },
  { path: 'cart/:cartString', component: CartComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NewProductComponent,
    ProductDetailComponent,
    AddToCartComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
