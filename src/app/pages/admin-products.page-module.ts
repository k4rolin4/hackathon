import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  FirebaseAdminProductsServiceModule,
  FirebaseTopSellerServiceModule,
  TopSellersComponentModule,
} from '@admin';
import { AdminProductsPage } from './admin-products.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminProductsPage,
      },
    ]),
    TopSellersComponentModule,
    FirebaseAdminProductsServiceModule,
    FirebaseTopSellerServiceModule,
  ],
  declarations: [AdminProductsPage],
  providers: [],
  exports: [],
})
export class AdminProductsPageModule {}
