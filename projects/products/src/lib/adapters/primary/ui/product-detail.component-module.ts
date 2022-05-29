import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({ imports: [CommonModule, BsDropdownModule.forRoot(), ModalModule.forRoot()],
  	declarations: [ProductDetailComponent],
  	providers: [],
  	exports: [ProductDetailComponent] })
export class ProductDetailComponentModule {
}
