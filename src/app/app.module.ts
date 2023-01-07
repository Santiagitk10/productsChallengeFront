import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductService } from './services/product.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NewProductComponent } from './components/new-product/new-product.component';


const appRoutes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'newProduct', component: NewProductComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NewProductComponent
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
