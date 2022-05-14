import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartPage } from './cart.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: CartPage,
        }
      ])],
  	declarations: [CartPage],
  	providers: [],
  	exports: [] })
export class CartPageModule {
}
