import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirebaseProductsServiceModule, ProductListComponentModule, TopSellersComponentModule, FirebaseTopSellerServiceModule } from '@products';
import { FirebaseCartServiceModule } from '@cart';
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
    FirebaseTopSellerServiceModule
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
