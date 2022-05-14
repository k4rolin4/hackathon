import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CheckoutPage } from './checkout.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: CheckoutPage,
        }
      ])],
  	declarations: [CheckoutPage],
  	providers: [],
  	exports: [] })
export class CheckoutPageModule {
}
