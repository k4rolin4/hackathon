import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductDetailPage } from './product-detail.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: ProductDetailPage,
        }
      ])],
  	declarations: [ProductDetailPage],
  	providers: [],
  	exports: [] })
export class ProductDetailPageModule {
}
