import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component'; // Detalles del producto

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' }, 
  { path: 'products', component: ProductsComponent }, 
  { path: 'product/:name', component: ProductDetailComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
