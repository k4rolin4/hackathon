import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product.component';

@NgModule({ imports: [CommonModule],
  	declarations: [AddProductComponent],
  	providers: [],
  	exports: [AddProductComponent] })
export class AddProductComponentModule {
}
