import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { ProductListComponentModule } from '../../../projects/products/src/lib/adapters/primary/ui/product-list.component-module';
import { FirebaseProductsServiceModule } from '../../../projects/products/src/lib/adapters/secondary/infrastructure/firebase-products.service-module';

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
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
