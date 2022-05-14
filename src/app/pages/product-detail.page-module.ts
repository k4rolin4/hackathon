import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductDetailPage } from './product-detail.page';
import { ProductDetailComponentModule } from '../../../projects/products/src/lib/adapters/primary/ui/product-detail.component-module';
import { FirebaseProductsServiceModule } from '../../../projects/products/src/lib/adapters/secondary/infrastructure/firebase-products.service-module';
import { ProductDetailResolver } from 'projects/products/src/lib/adapters/primary/ui/product-detail.resolver';
import { ProductDetailResolverModule } from 'projects/products/src/lib/adapters/primary/ui/product-detail.resolver-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':productId',
        component: ProductDetailPage,
        resolve: [ProductDetailResolver],
      },
    ]),
    ProductDetailComponentModule,
    FirebaseProductsServiceModule,
    ProductDetailResolverModule,
  ],
  declarations: [ProductDetailPage],
  providers: [],
  exports: [],
})
export class ProductDetailPageModule {}
