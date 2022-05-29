import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddProductComponentModule, FirebaseAdminProductsServiceModule, NavbarComponentModule } from '@admin';
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
    NavbarComponentModule
  ],
  declarations: [AdminAddProductPage],
  providers: [],
  exports: [],
})
export class AdminAddProductPageModule {}
