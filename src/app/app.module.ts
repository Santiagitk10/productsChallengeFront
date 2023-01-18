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
import { FinishPurchaseComponent } from './components/finish-purchase/finish-purchase.component';
import { PurchaseService } from './services/purchase.service';
import { PurchaseListComponent } from './components/purchase-list/purchase-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';


const appRoutes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'newProduct', component: NewProductComponent },
  { path: 'detail/:productId', component: ProductDetailComponent },
  { path: 'cart/:cartString', component: CartComponent },
  { path: 'purchaseList', component: PurchaseListComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NewProductComponent,
    ProductDetailComponent,
    AddToCartComponent,
    CartComponent,
    FinishPurchaseComponent,
    PurchaseListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProductService,
    PurchaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
