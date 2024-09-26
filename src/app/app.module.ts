import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { VideoPageComponent } from './components/video-page/video-page.component';  

const appRoutes: Routes = [
  { path: '', component: ProductsComponent },  
  { path: 'products/:name', component: ProductDetailComponent },  
  { path: 'video-page', component: VideoPageComponent },  
  { path: '**', redirectTo: '', pathMatch: 'full' }  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    ProductsComponent,
    FooterComponent,
    ProductDetailComponent,
    VideoPageComponent 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
