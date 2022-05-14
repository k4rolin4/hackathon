import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list.component';
import { RouterModule } from '@angular/router';

@NgModule({ imports: [CommonModule, RouterModule],
  	declarations: [CartListComponent],
  	providers: [],
  	exports: [CartListComponent] })
export class CartListComponentModule {
}
