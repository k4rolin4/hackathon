import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { CartPageModule } from './pages/cart.page-module';
import { CheckoutPageModule } from './pages/checkout.page-module';
import { CheckoutSummaryPageModule } from './pages/checkout-summary.page-module';
import { ProductDetailPageModule } from './pages/product-detail.page-module';
import { ContactPageModule } from './pages/contact.page-module';
import { AboutUsPageModule } from './pages/about-us.page-module';
import { AdminPageModule } from './pages/admin.page-module';
import { AdminProductsPageModule } from './pages/admin-products.page-module';
import { AdminAddProductPageModule } from './pages/admin-add-product.page-module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => HomePageModule,
  },
  {
    path: 'home',
    loadChildren: () => HomePageModule,
  },
  {
    path: 'cart',
    loadChildren: () => CartPageModule,
  },
  {
    path: 'checkout',
    loadChildren: () => CheckoutPageModule,
  },
  {
    path: 'checkout-summary',
    loadChildren: () => CheckoutSummaryPageModule,
  },
  {
    path: 'product-detail',
    loadChildren: () => ProductDetailPageModule,
  },
  {
    path: 'contact',
    loadChildren: () => ContactPageModule,
  },
  {
    path: 'about-us',
    loadChildren: () => AboutUsPageModule,
  },
  {
    path: 'admin',
    loadChildren: () => AdminPageModule,
  },
  {
    path: 'admin/topSellers',
    loadChildren: () => AdminProductsPageModule,
  },
  { 
        path: 'admin/addProduct', 
        loadChildren: () => AdminAddProductPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
