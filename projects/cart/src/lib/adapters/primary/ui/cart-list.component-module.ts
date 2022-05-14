import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list.component';

@NgModule({ imports: [CommonModule],
  	declarations: [CartListComponent],
  	providers: [],
  	exports: [CartListComponent] })
export class CartListComponentModule {
}
