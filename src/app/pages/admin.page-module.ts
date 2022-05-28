import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  FirebaseAdminProductsServiceModule,
  FirebaseTopSellerServiceModule,
  InMemoryProductStorageModule,
  MainComponentModule,
} from '@admin';
import { InMemoryContextStorageModule } from '@products';
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
    InMemoryContextStorageModule,
    InMemoryProductStorageModule,
  ],
  declarations: [AdminPage],
  providers: [],
  exports: [],
})
export class AdminPageModule {}
