import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  FirebaseAdminProductsServiceModule,
  FirebaseTopSellerServiceModule,
  MainComponentModule,
} from '@admin';

import { AdminPage } from './admin.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminPage,
      },
    ]),
    MainComponentModule,
    FirebaseAdminProductsServiceModule,
    FirebaseTopSellerServiceModule,
  ],
  declarations: [AdminPage],
  providers: [],
  exports: [],
})
export class AdminPageModule {}
