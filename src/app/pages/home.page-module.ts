import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  FirebaseProductsServiceModule,
  ProductListComponentModule,
  FirebaseTopSellerServiceModule,
  TopSellersComponentModule,
} from '@products';
import { FirebaseCartServiceModule } from '@cart';
import { NavbarComponentModule } from '@navigation';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
    ProductListComponentModule,
    FirebaseProductsServiceModule,
    FirebaseCartServiceModule,
    TopSellersComponentModule,
    FirebaseTopSellerServiceModule,
    NavbarComponentModule,
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
