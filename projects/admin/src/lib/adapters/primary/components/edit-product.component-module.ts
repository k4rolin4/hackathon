import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProductComponent } from './edit-product.component';

@NgModule({ imports: [CommonModule],
  	declarations: [EditProductComponent],
  	providers: [],
  	exports: [EditProductComponent] })
export class EditProductComponentModule {
}
