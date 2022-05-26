import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  AddProductComponentModule,
  FirebaseAdminProductsServiceModule,
} from '@admin';
import { AdminAddProductPage } from './admin-add-product.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminAddProductPage,
      },
    ]),
    AddProductComponentModule,
    FirebaseAdminProductsServiceModule,
  ],
  declarations: [AdminAddProductPage],
  providers: [],
  exports: [],
})
export class AdminAddProductPageModule {}
