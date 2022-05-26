import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product.component';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [AddProductComponent],
  	providers: [],
  	exports: [AddProductComponent] })
export class AddProductComponentModule {
}
