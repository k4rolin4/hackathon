import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirebaseProductsServiceModule, ProductListComponentModule } from '@products';
import { FirebaseCartServiceModule } from '@cart';
import { FirebaseAdminProductsServiceModule, FirebaseTopSellerServiceModule, TopSellersComponentModule } from '@admin';
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
    FirebaseAdminProductsServiceModule  
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
